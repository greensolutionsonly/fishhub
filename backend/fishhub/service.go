package fishhub

import (
	"github.com/alpa-vantage/fishhub/backend/db"
)

var availableLocales = [...]string{"en", "fr", "de", "es", "pt", "ko", "ja", "zh", "pl"}

func NewService(dbURL string) (*Service, error) {
	db, err := db.Connect(dbURL)
	if err != nil {
		return nil, err
	}

	return &Service{db, false}, nil
}

type Service struct {
	DB          *db.DB
	ForceUpdate bool
}
