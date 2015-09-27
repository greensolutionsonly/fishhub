package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/config"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/login"
	"github.com/greensolutionsonly/fishhub/backend/session"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/binding"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"log"
	"net/http"
)

func home(r render.Render) {
	r.HTML(200, "index", nil)
}

func main() {

	config, err := config.Load()
	if err != nil {
		log.Fatal(err)
	}

	DBService, err := fishhub.NewDBService(config.MongoURL)
	if err != nil {
		log.Fatal(err)
	}

	sessionService, err := session.NewService(config.MongoURL)
	if err != nil {
		log.Fatal(err)
	}

	store := sessions.NewCookieStore([]byte(config.SessionKey))

	m := martini.Classic()

	m.Map(DBService)
	m.Map(sessionService)

	m.Group("/users", func(r martini.Router) {
		r.Post("", binding.Bind(user.UserForm{}), user.Create)
		r.Get("/:id", user.Get)
		r.Put("/update/:id", user.Update)
		r.Delete("/delete/:id", user.Delete)
	})

	m.Group("/login", func(r martini.Router) {
		r.Post("", binding.Bind(login.LoginForm{}), login.Verify)
	})

	// Setup routes
	m.Get("/", home)

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
