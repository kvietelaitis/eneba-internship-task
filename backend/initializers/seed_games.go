package initializers

import (
	"log"

	"github.com/kvietelaitis/eneba-internship-task/models"
)

func SeedGames() {
	games := []models.Game{
		{Name: "Game1 - Xbox", OriginalPrice: 100, Discount: 30, Type: "Global", Favourites: 0, ImageURL: ""},
		{Name: "Game2 - Xbox", OriginalPrice: 200, Discount: 20, Type: "Europa", Favourites: 0, ImageURL: ""},
		{Name: "Game2 - Playstation", OriginalPrice: 200, Discount: 20, Type: "Global", Favourites: 0, ImageURL: ""},
	}

	for _, game := range games {
		var existing models.Game
		if err := DB.Where("Name = ?").First(&existing).Error; err != nil {
			if err := DB.Create(&game).Error; err != nil {
				log.Printf("Failed to create sector %s: %v", game.Name, err)
			} else {
				log.Printf("Created sector: %s", game.Name)
			}
		}
	}
}
