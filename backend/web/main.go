package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/config"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	. "github.com/greensolutionsonly/fishhub/backend/login"
	"github.com/greensolutionsonly/fishhub/backend/session"
	. "github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"log"
	"net/http"
)

func home(r render.Render, session sessions.Session) {
	session.Set("hello", "world")
	r.HTML(200, "index", "jeremy")
}

func main() {

	config, err := config.Load()
	if err != nil {
		log.Fatal(err)
	}

	fishhubService, err := fishhub.NewService(config.MongoURL)
	if err != nil {
		log.Fatal(err)
	}

	sessionService, err := session.NewService(config.MongoURL)
	if err != nil {
		log.Fatal(err)
	}

	store := sessions.NewCookieStore([]byte(config.SessionKey))

	m := martini.Classic()

	m.Map(fishhubService)
	m.Map(sessionService)

	m.Group("/users", func(r martini.Router) {
		r.Post("", binding.Bind(UserForm{}), NewUser)
		r.Get("/:id", GetUser)
		r.Put("/update/:id", UpdateUser)
		r.Delete("/delete/:id", DeleteUser)
	})

	m.Group("/login", func(r martini.Router) {
		r.Post("", binding.Bind(LoginForm{}), CheckCredential)
	})
	// Setup routes
	m.Get("/test", home)

	m.Handlers(
		render.Renderer(render.Options{
			Delims: render.Delims{"<%", "%>"},
		}),
		martini.Logger(),
		martini.Static("public"),
		sessions.Sessions("go_session", store),
	)

	m.NotFound(func(r render.Render, s sessions.Session) {
		s.Set("hello", "world")
		r.HTML(404, "404", nil)
	})

	err = http.ListenAndServe(":"+config.Port, m)
	if err != nil {
		log.Fatal(err)
	}

}
