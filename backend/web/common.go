package main

import (
	"github.com/martini-contrib/render"
)

func displayUnknownError(r render.Render) {
	r.JSON(501, map[string]interface{}{
		"message":        "Unknown error occurred, please try again",
		"classification": "UnknownError",
	})
}

func displaySuccessfulMessage(r render.Render, message, classification string) {
	r.JSON(201, map[string]interface{}{
		"message":        message,
		"classification": classification,
	})
}
