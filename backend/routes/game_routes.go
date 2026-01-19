package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kvietelaitis/eneba-internship-task/handlers"
)

func GameRoutes(app *fiber.App, handler *handlers.GameHandler) {
	app.Get("/list", handler.GetAllGames)
}
