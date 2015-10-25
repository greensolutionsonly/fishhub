package user

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/db"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/jamieomatthews/validation"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type UserForm struct {
	UserId          string `json:"userid"  binding:"required"`
	Name            string `json:"name"  binding:"required"`
	Email           string `json:"email" form:"email"`
	Role            string `json:"role"  binding:"required"`
	Country         string `json:"country" binding:"required"`
	Address         string `json:"address"`
	ContactNo       string `json:"contactno"`
	Notification    bool   `json:"notification"`
	ConfirmPassword string `json:"confirmpassword" binding:"required"`
	Password        string `json:"password" binding:"required"`
}

type UserUpdateForm struct {
	Name         string        `json:"name"  binding:"required"`
	Email        string        `json:"email" form:"email"`
	UserId       string        `json:"userid" form:"userid"`
	Role         string        `json:"role"  binding:"required"`
	Country      string        `json:"country" binding:"required"`
	Address      string        `json:"address"`
	ContactNo    string        `json:"contactno"`
	Notification bool          `json:"notification"`
	Id           bson.ObjectId `json:"_id" bson:"_id,omitempty"`
}
type User struct {
	Id            bson.ObjectId `json:"_id" bson:"_id,omitempty"`
	UserId        string        `json:"userid"`
	Name          string        `json:"name"`
	Email         string        `json:"email"`
	Role          string        `json:"role"`
	Country       string        `json:"country"`
	Address       string        `json:"address"`
	ContactNo     string        `json:"contactno"`
	Notification  bool          `json:"notification"`
	authenticated bool          `json:"-"`
	DB            *db.DB        `json:"-"`
}

func (u *User) IsAuthenticated() bool {
	return u.authenticated
}

func (u *User) Logout() {
	u.authenticated = false
}

func (u *User) Login() {
	u.authenticated = true
}

func (u *User) UniqueId() interface{} {
	return u.Id
}

func (u *User) GetById(id interface{}) error {
	db := u.DB.Copy()
	defer db.Close()

	query := bson.M{"id": id}
	err := db.FindOne("users", query, &u)
	return err
}

func Create(r render.Render, re *http.Request, f *fishhub.DBService, userForm UserForm) {
	userExistError := binding.Error{
		Message:        "is already taken",
		FieldNames:     []string{"email"},
		Classification: "UserExistError",
	}
	errors := binding.Errors{userExistError}
	if userExist(f, userForm.Email) {
		r.JSON(400, errors)
		return
	}

	d := f.DB.Copy()
	defer d.Close()

	updated, _ := d.Upsert("users", db.Query{"userid": userForm.UserId}, nil, userForm, true)

	if updated == true {
		r.JSON(200, map[string]interface{}{
			"message": "User profile is successfully created.",
		})
		return
	}

	r.JSON(400, map[string]interface{}{
		"message":        "Unknown error occurred, please try again",
		"classification": "UnknownError",
	})
	return
}

func userExist(f *fishhub.DBService, userId string) bool {
	db := f.DB.Copy()
	defer db.Close()
	ui := User{}
	query := bson.M{"userid": userId}
	err := db.FindOne("users", query, &ui)
	if err == mgo.ErrNotFound {
		return false
	} else {
		return true
	}
	return false
}

func Get(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService) {
	db := f.DB.Copy()
	defer db.Close()
	ui := User{}
	query := bson.M{"userid": params["id"]}
	_ = db.FindOne("users", query, &ui)
	r.JSON(200, ui)
}

func Update(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, userForm UserUpdateForm) {
	d := f.DB.Copy()
	defer d.Close()
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}
	updated, _ := d.Upsert("users", query, nil, userForm, true)

	if updated == true {
		r.JSON(200, userForm)
		return
	}

	r.JSON(400, map[string]interface{}{
		"message":        "Unknown error occurred, please try again",
		"classification": "UnknownError",
	})
	return
}

func Delete(r render.Render, re *http.Request, f *fishhub.DBService) {

}

func (UserForm UserForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {
	if len(errors) >= 1 {
		return errors
	}
	v := validation.NewValidation(&errors, UserForm)
	v.Validate(&UserForm.Name).Classify("MinimumLengthError").Key("name").MinLength(4)
	v.Validate(&UserForm.Name).Classify("MaxLengthError").Key("name").MaxLength(400)
	v.Validate(&UserForm.Password).Classify("MinimumLengthError").Key("password").MinLength(8)
	if UserForm.Email != "" {
		v.Validate(&UserForm.Email).Classify("EmailFormatError").Email()
	}
	if UserForm.Password != UserForm.ConfirmPassword {
		fields := []string{"password", "confirm_password"}
		errors = append(errors, binding.Error{Message: "does not match", FieldNames: fields, Classification: "PasswordNotMatchError"})
	}
	return *v.Errors.(*binding.Errors)
}

func (UserForm UserUpdateForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {
	if len(errors) >= 1 {
		return errors
	}
	v := validation.NewValidation(&errors, UserForm)
	v.Validate(&UserForm.Name).Classify("MinimumLengthError").Key("name").MinLength(4)
	v.Validate(&UserForm.Name).Classify("MaxLengthError").Key("name").MaxLength(400)
	if UserForm.Email != "" {
		v.Validate(&UserForm.Email).Classify("EmailFormatError").Email()
	}
	return *v.Errors.(*binding.Errors)
}
