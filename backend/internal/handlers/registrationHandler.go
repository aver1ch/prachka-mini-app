package handlers

import (
	"backend/internal/db"
	"context"
	"encoding/json"
	"log/slog"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
)

func RegistrationHandler(w http.ResponseWriter, r *http.Request) {
	slog.Debug("Check is request is POST in RegistrationHandler function")
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var credentials credentials

	slog.Debug("Pull login and password from request in RegistrationHandler function")
	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
		http.Error(w, "invalid json", http.StatusBadRequest)
		return
	}

	collection := db.Client.Database("prachka").Collection("users")

	// проверяем, есть ли уже такой логин
	count, _ := collection.CountDocuments(context.Background(), bson.M{"login": credentials.Login})
	if count > 0 {
		http.Error(w, "login exists", http.StatusBadRequest)
		return
	}

	// добавляем пользователя
	_, err := collection.InsertOne(context.Background(), credentials)
	if err != nil {
		http.Error(w, "db error", http.StatusInternalServerError)
		return
	}

	slog.Debug("Login and password is valid\n Adding to database")

	slog.Debug("Cooking response")
	response := map[string]string{"token": "good"}

	slog.Debug("Sending response")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

	return
}
