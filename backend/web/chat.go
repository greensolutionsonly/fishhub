package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/chat"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"gopkg.in/mgo.v2/bson"
	"io"
	"io/ioutil"
	"log"
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

func LoadFile(fileName string, s *fishhub.DBService) (path string, err error) {
	gridFile, err := s.DB.OpenFile("chats", fileName)
	if err != nil {
		return
	}
	defer gridFile.Close()

	f, err := ioutil.TempFile("", "")
	if err != nil {
		return
	}
	defer f.Close()

	_, err = io.Copy(f, gridFile)
	path = f.Name()

	return
}

func getChatFile(w http.ResponseWriter, re render.Render, params martini.Params, r *http.Request, f *fishhub.DBService) {
	fileName := params["id"]

	file, err := LoadFile(fileName, f)

	if err != nil {
		log.Printf("Problem loading file %s: %s", fileName, err)
		return
	}

	http.ServeFile(w, r, file)
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
