package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/chat"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

func newChat(r render.Render, re *http.Request, f *fishhub.DBService, chat chat.Chat, user *user.User) {
	chat.Db = f
	err := chat.Insert()
	if err != nil {
		displayUnknownError(r)
		return
	}

	displaySuccessfulMessage(r, "chat is processed successfully", "Chat")
	return
}

func getChats(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, chat chat.Chat) {
	chat.Db = f
	chats, err := chat.GetChats()
	if err != nil {
		displayUnknownError(r)
		return
	}

	r.JSON(200, chats)
}

func clearChat(r render.Render, params martini.Params, re *http.Request, f *fishhub.DBService, chat chat.Chat) {
	chat.Db = f

	chat.Id = bson.ObjectIdHex(params["id"])
	go chat.Clear()
	displaySuccessfulMessage(r, "chat is cleared", "Chat")
}

func clearChats(r render.Render, re *http.Request, f *fishhub.DBService, chat chat.Chat) {
	chat.Db = f
	go chat.ClearAll()
	displaySuccessfulMessage(r, "chats are cleared successfully", "Chat")

}
