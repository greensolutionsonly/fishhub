package main

import (
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
)

func Auth(r render.Render, db *fishhub.DBService, session sessions.Session) {
	if session.Get("userid") == "" {
		r.Redirect("/", 200)
		return
	}
}
