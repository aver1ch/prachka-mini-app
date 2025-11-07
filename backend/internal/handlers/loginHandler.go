package handlers

import (
	"backend/internal/db"
	"context"
	"encoding/json"
	"log/slog"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	slog.Debug("Check is request is POST in LoginHandler function")
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var credentials credentials

	slog.Debug("Pull login and password from request in LoginHandler function")
	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
		http.Error(w, "invalid json", http.StatusBadRequest)
		return
	}

	collection := db.Client.Database("prachka").Collection("users")

	count, _ := collection.CountDocuments(context.Background(), bson.M{"login": credentials.Login, "password": credentials.Password})
	if count < 0 {
		http.Error(w, "invalid credentials", http.StatusUnauthorized)
		return
	}

	slog.Debug("Cooking response")
	response := map[string]string{
		"token": "vovan",
	}

	slog.Debug("Sending response")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

	return
}
