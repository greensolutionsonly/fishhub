package session

import (
	"github.com/go-martini/martini"
	"github.com/greensolutionsonly/fishhub/backend/db"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"github.com/greensolutionsonly/fishhub/backend/user"
	"github.com/martini-contrib/render"
	"github.com/martini-contrib/sessions"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"log"
	"net/http"
	"time"
)

func NewService(dbURL string) (*Service, error) {
	db, err := db.Connect(dbURL)
	if err != nil {
		return nil, err
	}

	return &Service{db}, nil
}

type Service struct {
	DB *db.DB
}

type SessionInformation struct {
	SessionId       string    `json:"sessionid"`
	LastUpdatedTime time.Time `json:"lastupdatedtime"`
}

func (s *Service) IsSessionInitialized(sessionId string) bool {
	_, err := s.GetSessionInfo(sessionId)
	if err == mgo.ErrNotFound {
		return false
	} else {
		return true
	}
	return false
}

func (s *Service) GetSessionInfo(sessionId string) (si SessionInformation, err error) {
	SessionQuery := bson.M{"sessionid": sessionId}
	db := s.DB.Copy()
	defer db.Close()
	err = db.FindOne("sessions", SessionQuery, &si)
	return si, err
}

func (s *Service) UpsertSession(sessionId string) {
	si := SessionInformation{}
	si.LastUpdatedTime = time.Now()
	si.SessionId = sessionId
	db := s.DB.Copy()
	defer db.Close()
	err := db.UpsertSession("sessions", bson.M{"sessionid": sessionId}, si)
	if err != nil {
		log.Fatal(err)
	}
}

func (s *Service) RemoveExpiredSession() int {
	db := s.DB.Copy()
	defer db.Close()
	removed, err := s.DB.RemoveCollection("sessions", bson.M{"lastupdatedtime": bson.M{"$lt": time.Now().Add(-720 * time.Hour)}})
	if err != nil {
		log.Fatal(err)
	}
	return removed
}

func (s *Service) RemoveAllSession() int {
	db := s.DB.Copy()
	defer db.Close()
	removed, err := s.DB.RemoveCollection("sessions", bson.M{"lastupdatedtime": bson.M{"$lt": time.Now()}})
	if err != nil {
		log.Fatal(err)
	}
	return removed
}

type LoginForm struct {
	UserId   string `json:"userid" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Create(c martini.Context, sessionService *Service, r render.Render, re *http.Request, loginForm LoginForm, f *fishhub.DBService, session sessions.Session) {
	db := f.DB.Copy()
	defer db.Close()
	userProfile := &user.User{}
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

func Destroy() {

}
