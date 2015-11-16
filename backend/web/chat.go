package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/chat"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2/bson"
	"net/http"
	"time"
)

func newChat(r render.Render, re *http.Request, f *fishhub.DBService, chat chat.Chat, user *user.User) {
	chat.Db = f
  err := chat.Upsert()
  if err := nil {
    displayUnknownError(r)
    return
  }

  displaySuccessfulMessage(r, "chat is processed successfully", "Chat")
  return
}

func getChats(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService,chat chat.Chat ) {
	chat.Db = f
  chats, err := c.getChats()
  if err != nil {
    displayUnknownError(r)
    return
  }

	r.JSON(200, chats)
}

func clearChat(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, chat chat.Chat) {
  chat.Db = f

	bid := bid.Bid{}
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}
	_ = db.FindOne("bids", query, &bid)
	r.JSON(200, bid)
}

func clearChats(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, chat chat.Chat) {
	db := f.DB.Copy()
	defer db.Close()
	bid := bid.Bid{}
	query := bson.M{"_id": bson.ObjectIdHex(params["id"])}
	_ = db.FindOne("bids", query, &bid)
	r.JSON(200, bid)
}
