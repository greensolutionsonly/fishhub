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
	"time"
)

type FishForm struct {
	Id            bson.ObjectId `json:"_id" bson:"_id,omitempty"`
	Name          string        `json:"name"  binding:"required"`
	Species       string        `json:"species" binding:"required"`
	Grade         string        `json:"grade"  binding:"required"`
	Size          int           `json:"size" binding:"required"`
	Quantity      int           `json:"quantity" binding:"required"`
	Location      string        `json:"location"`
	CaughtDate    time.Time     `json:"caught_date"`
	Pricing       int           `json:"pricing" binding:"required"`
	PricingDollar string        `json:"pricing_dollar" binding:"required"`
}

func Create(r render.Render, re *http.Request, f *fishhub.DBService, fishForm FishForm) {
	d := f.DB.Copy()
	defer d.Close()

	updated, _ := d.Upsert("fishes", db.Query{"userid": "userForm.UserId"}, nil, fishForm, true)

	r.JSON(400, map[string]interface{}{
		"message":        "Unknown error occurred, please try again",
		"classification": "UnknownError",
	})
	return
}

func Get(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService) {
	db := f.DB.Copy()
	defer db.Close()
	ui := User{}
	query := bson.M{"id": params["id"]}
	_ = db.FindOne("fishes", query, &ui)
	r.JSON(200, ui)
}

func Update(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, fishForm FishForm) {
	d := f.DB.Copy()
	defer d.Close()
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}
	updated, _ := d.Upsert("fishes", query, nil, fishForm, true)

	if updated == true {
		r.JSON(200, fishForm)
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
