package login

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/session"
	. "github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type LoginForm struct {
	UserId   string `json:"userid" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Verify(c martini.Context, sessionService session.Service, r render.Render, re *http.Request, loginForm LoginForm, f *fishhub.DBService, session sessions.Session) {
	db := f.DB.Copy()
	defer db.Close()
	userProfile := &User{}
	query := bson.M{"userid": loginForm.UserId, "password": loginForm.Password}
	err := db.FindOne("users", query, userProfile)

	if err != nil {
		r.JSON(401, map[string]interface{}{
			"message":        "Unauthorized error",
			"classification": "UnauthorizedError",
		})
		return
	}
	session.Set("userid", userProfile.UserId)
	r.JSON(200, map[string]interface{}{
		"message": "authorized",
	})

	sessionService.UpsertSession(userProfile.UserId)
	c.Map(userProfile)
	return
}
