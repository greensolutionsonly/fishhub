package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/config"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
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

	m.Handlers(
		render.Renderer(render.Options{
			Delims: render.Delims{"<%", "%>"},
		}),
		martini.Logger(),
		martini.Static("public"),
		sessions.Sessions("go_session", store),
	)
	// setup routes
	m.Group("/users", func(r martini.Router) {
		r.Post("", binding.Bind(user.UserForm{}), user.Create)
		r.Get("/:id", user.Get)
		r.Put("/:id", binding.Bind(user.UserUpdateForm{}), user.Update)
		r.Delete("/delete/:id", user.Delete)
	})

	m.Group("/fishes", func(r martini.Router) {
		r.Post("", binding.Bind(user.FishForm{}), fish.Create)
		r.Get("/:id", fish.Get)
		r.Put("/:id", binding.Bind(user.FishForm{}), fish.Update)
		r.Delete("/delete/:id", fish.Delete)
	})

	m.Group("/login", func(r martini.Router) {
		r.Post("", binding.Bind(session.LoginForm{}), session.Create)
	})

	m.Get("/", home)

	m.NotFound(func(r render.Render, s sessions.Session) {
		s.Set("hello", "world")
		r.HTML(404, "404", nil)
	})

	err = http.ListenAndServe(":"+config.Port, m)
	if err != nil {
		log.Fatal(err)
	}

}
