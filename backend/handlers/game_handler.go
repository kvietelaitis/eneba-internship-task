package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kvietelaitis/eneba-internship-task/models"
	"github.com/kvietelaitis/eneba-internship-task/services"
)

type GameHandler struct {
	Service services.GameService
}

func NewGameHandler(service services.GameService) *GameHandler {
	return &GameHandler{Service: service}
}

func (h *GameHandler) GetAllGames(c *fiber.Ctx) error {
	gameName := c.Query("search")

	games, err := h.Service.GetAllGames(gameName)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).SendString("Error fetching games")
	}

	return c.JSON(games)
}

func (h *GameHandler) CreateGame(c *fiber.Ctx) error {
	var game models.Game
	if err := c.BodyParser(&game); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString("Invalid request")
	}

	createdGame, err := h.Service.CreateGame(game)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).SendString("Error creating game")
	}
	return c.Status(fiber.StatusCreated).JSON(createdGame)
}
