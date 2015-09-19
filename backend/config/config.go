package config

import (
	"fmt"
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	Port     string
	MongoURL string
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

	return &Config{
		port,
		mongoURL,
	}, nil
}
