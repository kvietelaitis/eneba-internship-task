package initializers

import (
	"log"

	"github.com/kvietelaitis/eneba-internship-task/models"
)

func SeedGames() {
	games := []models.Game{
		{Name: "Game1 - Xbox", OriginalPrice: 100, Discount: 30, Type: "Global", Store: "Xbox Live", Favourites: 0, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=0aceaced3c4d5d1c4ead154173bb98a89f0a5f3ab2031f40ad1036186c08a6fc"},
		{Name: "Game2 - Xbox", OriginalPrice: 200, Discount: 20, Type: "Europa", Store: "Xbox Live", Favourites: 0, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=0aceaced3c4d5d1c4ead154173bb98a89f0a5f3ab2031f40ad1036186c08a6fc"},
		{Name: "Game2 - Playstation", OriginalPrice: 200, Discount: 20, Type: "Global", Store: "PSN", Favourites: 0, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=0aceaced3c4d5d1c4ead154173bb98a89f0a5f3ab2031f40ad1036186c08a6fc"},
	}

	for i := range games {
		err := DB.Where(models.Game{Name: games[i].Name}).FirstOrCreate(&games[i]).Error
		if err != nil {
			log.Printf("Could not seed game %s: %v", games[i].Name, err)
		}
	}
}
