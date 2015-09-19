package user

import (
	"github.com/alpa-vantage/fishhub/backend/db"
	"github.com/alpa-vantage/fishhub/backend/fishhub"
	"github.com/jamieomatthews/validation"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type UserForm struct {
	Name            string `form:"name" binding:"required"`
	Email           string `form:"email" binding:"required"`
	Role            string `form:"role" binding:"required"`
	Country         string `form:"country" binding:"required"`
	Address         string `form:"address"`
	ContactNo       string `form:"contactno"`
	Notification    bool   `form:"notification"`
	ConfirmPassword string `form:"confirmpassword"`
	Password        string `form:"password"`
}

type UserProfile struct {
	Name         string `json:"name"`
	Email        string `json:"email"`
	Role         string `json:"role"`
	Country      string `json:"country"`
	Address      string `json:"address"`
	ContactNo    string `json:"contactno"`
	Notification bool   `json:"notification"`
	Password     string `json:"password"`
}

func (userForm UserForm) Validate(errors binding.Errors, req *http.Request) binding.Errors {
	if len(errors) >= 1 {
		return errors
	}
	v := validation.NewValidation(&errors, userForm)
	v.Validate(&userForm.Name).Classify("MinimumLengthError").Key("name").MinLength(4)
	v.Validate(&userForm.Name).Classify("MaxLengthError").Key("name").MaxLength(400)
	v.Validate(&userForm.Password).Classify("MinimumLengthError").Key("password").MinLength(8)
	v.Validate(&userForm.Email).Classify("EmailFormatError").Email()
	if userForm.Password != userForm.ConfirmPassword {
		fields := []string{"password", "confirm_password"}
		errors = append(errors, binding.Error{Message: "does not match", FieldNames: fields, Classification: "PasswordNotMatchError"})
	}
	return *v.Errors.(*binding.Errors)
}

func userExist(f *fishhub.Service, email string) bool {
	db := f.DB.Copy()
	defer db.Close()
	ui := UserProfile{}
	query := bson.M{"email": email}
	err := db.FindOne("users", query, &ui)
	if err == mgo.ErrNotFound {
		return false
	} else {
		return true
	}
	return false
}

func NewUser(r render.Render, re *http.Request, f *fishhub.Service, userForm UserForm) {
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
	user := UserProfile{}
	user.Email = userForm.Email
	user.Name = userForm.Name
	user.Role = userForm.Role
	user.Password = userForm.Password
	user.Notification = userForm.Notification
	user.Address = userForm.Address
	user.ContactNo = userForm.ContactNo
	user.Country = userForm.Country

	d := f.DB.Copy()
	defer d.Close()

	updated, _ := d.Upsert("users", db.Query{"email": user.Email}, nil, user, true)

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

func UpdateUser(r render.Render, re *http.Request, f *fishhub.Service, userForm UserForm) {
	user := UserProfile{}
	user.Email = userForm.Email
	user.Name = userForm.Name
	user.Role = userForm.Role
	user.Password = userForm.Password
	user.Notification = userForm.Notification
	user.Address = userForm.Address
	user.ContactNo = userForm.ContactNo
	user.Country = userForm.Country

	d := f.DB.Copy()
	defer d.Close()

	updated, _ := d.Upsert("users", db.Query{"email": user.Email}, nil, user, true)

	if updated == true {
		r.JSON(200, map[string]interface{}{
			"Message": "User profile is successfully updated.",
		})
		return
	}

	r.JSON(400, map[string]interface{}{
		"Message":        "Unknown error occurred, please try again",
		"Classification": "UnknownError",
	})
	return

}

func DeleteUser(r render.Render, re *http.Request) {

}

func GetUser(r render.Render, re *http.Request) {

}
