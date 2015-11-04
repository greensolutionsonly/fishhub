package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

func createUser(r render.Render, re *http.Request, f *fishhub.DBService, userForm user.UserForm) {
	userExistError := binding.Error{
		Message:        "is already taken",
		FieldNames:     []string{"email"},
		Classification: "UserExistError",
	}
	errors := binding.Errors{userExistError}
	if userExist(f, userForm.UserId) {
		r.JSON(400, errors)
		return
	}

	d := f.DB.Copy()
	defer d.Close()

	query := bson.M{"userid": userForm.UserId}
	updated, _ := d.Upsert("users", query, nil, userForm, true)

	if updated == true {
		r.JSON(400, map[string]interface{}{
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
	ui := user.User{}
	query := bson.M{"userid": userId}
	err := db.FindOne("users", query, &ui)
	if err == mgo.ErrNotFound {
		return false
	} else {
		return true
	}
	return false
}

func getUser(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService) {
	db := f.DB.Copy()
	defer db.Close()
	ui := user.User{}
	query := bson.M{"userid": params["id"]}
	_ = db.FindOne("users", query, &ui)
	r.JSON(200, ui)
}

func updateUser(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, userForm user.UserUpdateForm) {
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

func deleteUser(r render.Render, re *http.Request, f *fishhub.DBService) {

}
