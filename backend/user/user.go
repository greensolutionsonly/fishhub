package user

import (
	"github.com/greensolutionsonly/fishhub/backend/db"
	"github.com/jamieomatthews/validation"
	"github.com/martini-contrib/binding"
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
	Locale          string `json:"locale" binding:"required"`
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
	Locale       string        `json:"locale" binding:"required"`
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
	Locale        string        `json:"locale"`
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

func (userForm UserForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {
	if len(errors) >= 1 {
		return errors
	}
	v := validation.NewValidation(&errors, userForm)
	v.Validate(&userForm.Name).Classify("MinimumLengthError").Key("name").MinLength(4)
	v.Validate(&userForm.Name).Classify("MaxLengthError").Key("name").MaxLength(400)
	v.Validate(&userForm.Password).Classify("MinimumLengthError").Key("password").MinLength(8)
	if userForm.Email != "" {
		v.Validate(&userForm.Email).Classify("EmailFormatError").Email()
	}
	if userForm.Password != userForm.ConfirmPassword {
		fields := []string{"password", "confirm_password"}
		errors = append(errors, binding.Error{Message: "does not match", FieldNames: fields, Classification: "PasswordNotMatchError"})
	}
	return *v.Errors.(*binding.Errors)
}

func (userForm UserUpdateForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {
	if len(errors) >= 1 {
		return errors
	}
	v := validation.NewValidation(&errors, userForm)
	v.Validate(&userForm.Name).Classify("MinimumLengthError").Key("name").MinLength(4)
	v.Validate(&userForm.Name).Classify("MaxLengthError").Key("name").MaxLength(400)
	if userForm.Email != "" {
		v.Validate(&userForm.Email).Classify("EmailFormatError").Email()
	}
	return *v.Errors.(*binding.Errors)
}
