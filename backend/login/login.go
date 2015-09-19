package login

import (
	"github.com/alpa-vantage/fishhub/backend/fishhub"
	. "github.com/alpa-vantage/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type LoginForm struct {
	UserEmail string `json:"email" binding:"required"`
	Password  string `json:"password" binding:"required"`
}

func CheckCredential(r render.Render, re *http.Request, loginForm LoginForm, f *fishhub.Service, session sessions.Session) {
	db := f.DB.Copy()
	defer db.Close()
	userProfile := UserProfile{}

	query := bson.M{"email": loginForm.UserEmail, "password": loginForm.Password}
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
