package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/kvietelaitis/eneba-internship-task/handlers"
	"github.com/kvietelaitis/eneba-internship-task/initializers"
	"github.com/kvietelaitis/eneba-internship-task/repositories"
	"github.com/kvietelaitis/eneba-internship-task/routes"
	"github.com/kvietelaitis/eneba-internship-task/services"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDatabase()
	initializers.SyncDatabase()
	initializers.SeedGames()
}

func main() {
	app := fiber.New()

	allowOrigins := os.Getenv("FRONTEND_URL")

	app.Use(cors.New(cors.Config{
		AllowOrigins:     allowOrigins,
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS",
		AllowCredentials: true,
	}))

	gameRepo := repositories.NewGameRepository(initializers.DB)
	gameService := services.NewGameService(gameRepo)
	gameHandler := handlers.NewGameHandler(gameService)

	routes.GameRoutes(app, gameHandler)

	app.Listen(":" + os.Getenv("PORT"))
}
