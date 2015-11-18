package chat

import (
	"fmt"
	"github.com/greensolutionsonly/fishhub/backend/fishhub"
	"gopkg.in/mgo.v2/bson"
	"mime/multipart"
	"path/filepath"
	"time"
)

type Chat struct {
	Id          bson.ObjectId         `json:"_id" bson:"_id,omitempty" form:"-"`
	FromUid     string                `json:"fromuid" form:"from_uid"`
	ToUid       string                `json:"touid" form:"to_uid"`
	Message     string                `json:"message" form:"message"`
	MessageType string                `json:"messagetype" form:"message_type"`
	MimeUrl     string                `json:"mimeurl" form:"-"`
	MimeFile    *multipart.FileHeader `json:"-" bson:"-" form:"mime"`
	SendAt      time.Time             `json:"sendat" form:"-"`
	ReceivedAt  time.Time             `json:"receivedat" form:"-"`
	IsRead      bool                  `json:"isread" form:"-"`
	IsDelivered bool                  `json:isdelivered form:"-"`
	ReadAt      time.Time             `json:"readat"`
	Db          *fishhub.DBService    `json:"-" bson:"-" form:"-"`
}

func (c *Chat) InsertMime() error {
	mimeFile, err := c.MimeFile.Open()
	if err != nil {
		return err
	}

	defer mimeFile.Close()

	fileExtension := filepath.Ext(c.MimeFile.Filename)
	filePath := fmt.Sprintf("tmp/%s%s", bson.NewObjectId().Hex(), fileExtension)

	id, err := c.Db.DB.UpsertFile("chats", filePath, mimeFile)
	if err != nil {
		return err
	}

	c.MimeUrl = fmt.Sprintf("chats/content/%s", id.String())
	db := c.Db.DB.Copy()
	defer db.Close()

	err = db.Insert("chats", c)

	return err
}

func (c Chat) Update() {

}

func (c *Chat) Insert() error {
	db := c.Db.DB.Copy()
	defer db.Close()
	c.SendAt = time.Now()
	if c.MessageType == "text" {
		err := db.Insert("chats", c)
		return err
	}
	c.MessageType = "mime"

	return c.InsertMime()
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

func (c Chat) GetChats() ([]Chat, error) {
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
