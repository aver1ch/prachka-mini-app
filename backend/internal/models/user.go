package models

type User struct {
	Login    string `bson:"login"`
	Password string `bson:"password"`
}
