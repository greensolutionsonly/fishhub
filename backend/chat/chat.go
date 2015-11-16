package chat

import (
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"gopkg.in/mgo.v2/bson"
	"mime/multipart"
	"time"
)

type Chat struct {
	Id          bson.ObjectId         `json:"_id" bson:"_id,omitempty" form:"-"`
	FromUid     string                `json:"from_uid" form:"from_uid"`
	ToUid       string                `json:"to_uid" form:"to_uid"`
	Message     string                `json:"message" form:"message"`
	MessageType string                `json:"message_type" form:"-"`
	MimeUrl     string                `json:"mime_url" form:"-"`
	MimeFile    *multipart.FileHeader `json:"-" form:"mime_file"`
	SendAt      time.Time             `json:"send_at" form:"-"`
	ReceivedAt  time.Time             `json:"received_at" form:"-"`
	IsRead      bool                  `json:"is_read" form:"-"`
	IsDelivered bool                  `json:is_delivered form:"-"`
	ReadAt      time.Time             `json:"read_at"`
	Db          fishhub.DBService     `json:"-" form:"-"`
}

func (c *Chat) UpsertMime() {

}

func (c *Chat) Upsert() error {

return nil
}

func (c Chat) Clear() {
  db := c.Db.DB.Copy()
  defer db.Close()
  _ = db.RemoveID("chats", c.Id)

}

func (c Chat) ClearAll() {
    db := c.Db.DB.Copy()
  defer db.Close()

  q := bson.M{"from_uid": c.FromUid, "touid": c.ToUid}
  _ = db.RemoveAll("chats", q)
}

func (c Chat) Validate() {

}

func (c Chat) GetChats() []Chat, error {
    db := c.Db.DB.Copy()
  defer db.Close()

	q := bson.M{"from_uid": c.FromUid, "touid": c.ToUid}
	sortFields := []string{"-send_at"}
	chats := []Chat{}
	err := db.FindAll("chats", q, sortFields, &chats)
  if err != nil {
    return chats, err
  }

	return chats, nil
}
