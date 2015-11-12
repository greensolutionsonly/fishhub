package bid

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Bid struct {
	Id           bson.ObjectId `json:"_id" bson:"_id,omitempty"`
	UserId       string        `json:"userid"`
	FishId       string        `json:"fishid" binding:"required"`
	BidDate      time.Time     `json:"caughtdate"`
	CreatedDate  time.Time     `json:"createddate"`
	UpdatedDate  time.Time     `json:"updateddate"`
	Price        int           `json:"price" binding:"required"`
	CurrencyType string        `json:"currencytype" binding:"required"`
	BidStatus    string        `json:"bidstatus"`
}
