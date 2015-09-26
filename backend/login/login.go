package login

import (
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	. "github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type LoginForm struct {
	UserId   string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Verify(r render.Render, re *http.Request, loginForm LoginForm, f *fishhub.DBService, session sessions.Session) {
	db := f.DB.Copy()
	defer db.Close()
	userProfile := User{}
	query := bson.M{"email": loginForm.UserId, "password": loginForm.Password}
	err := db.FindOne("users", query, &userProfile)

	if err != nil {
		r.JSON(401, map[string]interface{}{
			"message":        "Unauthorized error",
			"classification": "UnauthorizedError",
		})
		return
	}
	session.Set("user", "asasasasa")
	r.JSON(200, map[string]interface{}{
		"message": "authorized",
	})
	return
}
