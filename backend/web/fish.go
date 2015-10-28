package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/fish"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

func addFish(r render.Render, re *http.Request, f *fishhub.DBService, fish fish.Fish, user *user.User) {
	d := f.DB.Copy()
	defer d.Close()
	fish.UserId = user.UserId
	_, err := d.Upsert("fishes", fish, nil, fish, true)
	if err != nil {
		r.JSON(400, map[string]interface{}{
			"message":        "Unknown error occurred, please try again",
			"classification": "UnknownError",
		})
		return
	}
	r.JSON(200, fish)

	return
}

func getFish(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService) {
	db := f.DB.Copy()
	defer db.Close()
	fish := fish.Fish{}
	query := bson.M{"id": params["id"]}
	_ = db.FindOne("fishes", query, &fish)
	r.JSON(200, fish)
}

func getAllFish(r render.Render, re *http.Request, f *fishhub.DBService, user *user.User) {
	d := f.DB.Copy()
	defer d.Close()
	query := bson.M{"userid": user.UserId}
	var fishes []*fish.Fish
	err := d.FindAll("fishes", query, nil, &fishes)
	if err != nil {
		r.JSON(400, map[string]interface{}{
			"message":        "Unknown error occurred, please try again",
			"classification": "UnknownError",
		})
		return
	}
	r.JSON(200, fishes)
}

func updateFish(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, fish fish.Fish) {
	d := f.DB.Copy()
	defer d.Close()
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}
	updated, _ := d.Upsert("fishes", query, nil, fish, true)

	if updated == true {
		r.JSON(200, fish)
		return
	}

	r.JSON(400, map[string]interface{}{
		"message":        "Unknown error occurred, please try again",
		"classification": "UnknownError",
	})
	return
}

func deleteFish(r render.Render, re *http.Request, f *fishhub.DBService, params martini.Params) {
	d := f.DB.Copy()
	defer d.Close()
	err := d.RemoveID("fishes", bson.ObjectIdHex(params["id"]))
	if err != nil {

		r.JSON(400, map[string]interface{}{
			"message":        "Unknown error occurred, please try again",
			"classification": "UnknownError",
		})
		return
	}

	r.JSON(200, map[string]interface{}{
		"message":        "Information is successfully deleted.",
		"classification": "success",
	})
}
