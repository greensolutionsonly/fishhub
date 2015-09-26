package fishhub

import (
	"github.com/greensolutionsonly/fishhub/backend/db"
)

var availableLocales = [...]string{"en", "fr", "de", "es", "pt", "ko", "ja", "zh", "pl"}

func NewDBService(dbURL string) (*DBService, error) {
	db, err := db.Connect(dbURL)
	if err != nil {
		return nil, err
	}

	return &DBService{db, false}, nil
}

type DBService struct {
	DB          *db.DB
	ForceUpdate bool
}
