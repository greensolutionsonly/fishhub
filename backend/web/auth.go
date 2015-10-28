package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

func Auth(ctx martini.Context, req *http.Request, r render.Render, session sessions.Session, res http.ResponseWriter, f *fishhub.DBService) {
	db := f.DB.Copy()
	defer db.Close()
	userProfile := &user.User{}
	query := bson.M{"userid": session.Get("userid")}
	err := db.FindOne("users", query, userProfile)

	if err != nil {
		r.JSON(401, map[string]interface{}{
			"message":        "Unauthorized error",
			"classification": "UnauthorizedError",
		})
		return
	}
	ctx.Map(userProfile)
}
