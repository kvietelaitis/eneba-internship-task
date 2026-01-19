package repositories

import (
	"github.com/kvietelaitis/eneba-internship-task/models"
	"gorm.io/gorm"
)

type GameRepository interface {
	GetAllGames() ([]models.Game, error)
	CreateGame(game models.Game) (models.Game, error)
}

type gameRepository struct {
	db *gorm.DB
}

func NewGameRepository(db *gorm.DB) GameRepository {
	return &gameRepository{db: db}
}

func (r *gameRepository) GetAllGames() ([]models.Game, error) {
	var games []models.Game
	result := r.db.Find(&games)
	return games, result.Error
}

func (r *gameRepository) CreateGame(game models.Game) (models.Game, error) {
	result := r.db.Create(&game)
	return game, result.Error
}
