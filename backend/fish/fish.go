package fish

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Fish struct {
	Id           bson.ObjectId `json:"_id" bson:"_id,omitempty"`
	UserId       string        `json:"userid"`
	Name         string        `json:"name"  binding:"required"`
	Species      string        `json:"species" binding:"required"`
	Grade        string        `json:"grade"  binding:"required"`
	Size         string        `json:"size" binding:"required"`
	Quantity     int           `json:"quantity" binding:"required"`
	Location     string        `json:"location"`
	CaughtDate   time.Time     `json:"caughtdate"`
	Pricing      int           `json:"pricing" binding:"required"`
	CurrencyType string        `json:"currencytype" binding:"required"`
}
