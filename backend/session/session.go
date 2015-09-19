package session

import (
	"github.com/alpa-vantage/fishhub/backend/db"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"log"
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
