package main

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/bid"
	"github.com/greensolutionsonly/fishhub/backend/config"
	"github.com/greensolutionsonly/fishhub/backend/fish"
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

	m.Post("/users", binding.Bind(user.UserForm{}), createUser)

	m.Group("/users", func(r martini.Router) {
		r.Get("/:id", getUser)
		r.Put("/:id", binding.Bind(user.UserUpdateForm{}), updateUser)
		r.Delete("/delete/:id", deleteUser)
	}, Auth)

	m.Group("/fishes", func(r martini.Router) {
		r.Get("", getAllFish)
		r.Post("", binding.Bind(fish.Fish{}), addFish)
		r.Get("/:id", getFish)
		r.Put("/:id", binding.Bind(fish.Fish{}), updateFish)
		r.Delete("/:id", deleteFish)
	}, Auth)

	m.Group("/bids", func(r martini.Router) {
		r.Get("", getAllBids)
		r.Post("", binding.Bind(bid.Bid{}), addBid)
		r.Get("/:id", getBid)
		r.Put("/:id", binding.Bind(bid.Bid{}), updateBid)
		r.Delete("/:id", deleteBid)
	}, Auth)

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
