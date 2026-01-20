package services

import (
	"github.com/kvietelaitis/eneba-internship-task/models"
	"github.com/kvietelaitis/eneba-internship-task/repositories"
)

type GameService interface {
	GetAllGames(gameName string) ([]models.Game, error)
	CreateGame(game models.Game) (models.Game, error)
}

type gameService struct {
	repo repositories.GameRepository
}

func NewGameService(repo repositories.GameRepository) GameService {
	return &gameService{repo: repo}
}

func (s *gameService) GetAllGames(gameName string) ([]models.Game, error) {
	return s.repo.GetAllGames(gameName)
}

func (s *gameService) CreateGame(user models.Game) (models.Game, error) {
	return s.repo.CreateGame(user)
}
