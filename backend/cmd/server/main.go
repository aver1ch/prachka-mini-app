package main

import (
	"backend/internal/db"
	"backend/internal/handlers"
	"log/slog"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	slog.Info("Server starts")
	slog.Info("Connection to database")
	db.Connect()
	distDir := "../frontend/dist"
	fs := http.FileServer(http.Dir(distDir))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := filepath.Join(distDir, r.URL.Path)

		_, err := os.Stat(path)

		if os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
			return
		}

		fs.ServeHTTP(w, r)
	})

	http.HandleFunc("/auth", handlers.LoginHandler)
	http.HandleFunc("/reg", handlers.RegistrationHandler)

	http.ListenAndServe(":8080", nil)
}
