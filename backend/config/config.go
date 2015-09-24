package config

import (
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	Port       string
	MongoURL   string
	SessionKey string
}

func Load() (*Config, error) {
	godotenv.Load(".env")

	mongoURL := os.Getenv("MONGOLAB_URI")
	if mongoURL == "" {
		return nil, fmt.Errorf("MONGOLAB_URI")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	sessionKey := os.Getenv("SESSION_KEY")
	if sessionKey == "" {
		sessionKey = "go_session_key"
	}

	return &Config{
		port,
		mongoURL,
		sessionKey,
	}, nil
}
