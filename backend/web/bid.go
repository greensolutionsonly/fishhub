package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/bid"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2/bson"
	"net/http"
	"time"
)

func addBid(r render.Render, re *http.Request, f *fishhub.DBService, bid bid.Bid, user *user.User) {
	d := f.DB.Copy()
	defer d.Close()
	bid.UserId = user.UserId
	bid.CreatedDate = time.Now()
	bid.UpdatedDate = time.Now()

	if bid.BidStatus == "active" {
		bid.BidDate = time.Now()
	}
	_, err := d.Upsert("bids", bid, nil, bid, true)
	if err != nil {
		r.JSON(400, map[string]interface{}{
			"message":        "Unknown error occurred, please try again",
			"classification": "UnknownError",
		})
		return
	}

	r.JSON(200, bid)

	return
}

func getBid(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService) {
	db := f.DB.Copy()
	defer db.Close()
	bid := bid.Bid{}
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}
	_ = db.FindOne("bids", query, &bid)
	r.JSON(200, bid)
}

func getAllBids(r render.Render, re *http.Request, f *fishhub.DBService, user *user.User) {
	d := f.DB.Copy()
	defer d.Close()
	query := bson.M{"userid": user.UserId}
	var bids []*bid.Bid
	err := d.FindAll("bids", query, nil, &bids)
	if err != nil {
		r.JSON(400, map[string]interface{}{
			"message":        "Unknown error occurred, please try again",
			"classification": "UnknownError",
		})
		return
	}
	r.JSON(200, bids)
}

func updateBid(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, bid bid.Bid) {
	d := f.DB.Copy()
	defer d.Close()
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}

	bid.UpdatedDate = time.Now()
	if bid.BidStatus == "active" {
		bid.BidDate = time.Now()
	}

	updated, _ := d.Upsert("bids", query, nil, bid, true)

	if updated == true {
		r.JSON(200, bid)
		return
	}

	r.JSON(400, map[string]interface{}{
		"message":        "Unknown error occurred, please try again",
		"classification": "UnknownError",
	})
	return
}

func deleteBid(r render.Render, re *http.Request, f *fishhub.DBService, params martini.Params) {
	d := f.DB.Copy()
	defer d.Close()
	err := d.RemoveID("bids", bson.ObjectIdHex(params["id"]))
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
