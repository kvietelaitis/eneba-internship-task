package initializers

import (
	"log"

	"github.com/kvietelaitis/eneba-internship-task/models"
)

func SeedGames() {
	games := []models.Game{
		{Name: "FIFA 23 - Xbox", OriginalPrice: 70, Discount: 60, Type: "Global", Store: "Xbox Live", Favourites: 15, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffifauteam.com%2Fimages%2Fcovers%2Ffifa23%2Fsmall%2Fstandard-cg.webp&f=1&nofb=1&ipt=5ce3c29820aec1d2d2a8447f8deb740fa90e76bdb836ee03d8bbd713c82851eb"},
		{Name: "FIFA 23 - PlayStation", OriginalPrice: 70, Discount: 55, Type: "Europa", Store: "PSN", Favourites: 8, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffifauteam.com%2Fimages%2Fcovers%2Ffifa23%2Fsmall%2Fstandard-cg.webp&f=1&nofb=1&ipt=5ce3c29820aec1d2d2a8447f8deb740fa90e76bdb836ee03d8bbd713c82851eb"},
		{Name: "FIFA 23 - PC", OriginalPrice: 60, Discount: 70, Type: "Global", Store: "Steam", Favourites: 22, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffifauteam.com%2Fimages%2Fcovers%2Ffifa23%2Fsmall%2Fstandard-cg.webp&f=1&nofb=1&ipt=5ce3c29820aec1d2d2a8447f8deb740fa90e76bdb836ee03d8bbd713c82851eb"},
		{Name: "FIFA 23 - Xbox", OriginalPrice: 70, Discount: 10, Type: "USA", Store: "Xbox Live", Favourites: 3, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffifauteam.com%2Fimages%2Fcovers%2Ffifa23%2Fsmall%2Fstandard-cg.webp&f=1&nofb=1&ipt=5ce3c29820aec1d2d2a8447f8deb740fa90e76bdb836ee03d8bbd713c82851eb"},

		{Name: "Red Dead Redemption 2 - Xbox", OriginalPrice: 60, Discount: 67, Type: "Global", Store: "Xbox Live", Favourites: 120, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=01fe847b41edc1521b43cb5e343316e37388ff1294aae86d7aae311ac549511d"},
		{Name: "Red Dead Redemption 2 - PlayStation", OriginalPrice: 60, Discount: 50, Type: "Global", Store: "PSN", Favourites: 85, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=01fe847b41edc1521b43cb5e343316e37388ff1294aae86d7aae311ac549511d"},
		{Name: "Red Dead Redemption 2 - PC", OriginalPrice: 60, Discount: 75, Type: "Europa", Store: "Steam", Favourites: 210, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=01fe847b41edc1521b43cb5e343316e37388ff1294aae86d7aae311ac549511d"},
		{Name: "Red Dead Redemption 2 - PC", OriginalPrice: 60, Discount: 60, Type: "Global", Store: "Epic Games", Favourites: 42, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vg247.com%2Fcurrent%2F2018%2F05%2Fred_dead_redemption_2_cover_art_1.jpg&f=1&nofb=1&ipt=01fe847b41edc1521b43cb5e343316e37388ff1294aae86d7aae311ac549511d"},

		{Name: "Split Fiction - PC", OriginalPrice: 30, Discount: 20, Type: "Global", Store: "Steam", Favourites: 12, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.speedrun.com%2Fstatic%2Fgame%2Fy65rj741%2Fcover.png%3Fv%3D82b835b&f=1&nofb=1&ipt=41f9e94cb6898efa6a8030017bebd096b8f0a0f1259e3618dd7643ed195bdc37"},
		{Name: "Split Fiction - Xbox", OriginalPrice: 35, Discount: 15, Type: "USA", Store: "Xbox Live", Favourites: 5, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.speedrun.com%2Fstatic%2Fgame%2Fy65rj741%2Fcover.png%3Fv%3D82b835b&f=1&nofb=1&ipt=41f9e94cb6898efa6a8030017bebd096b8f0a0f1259e3618dd7643ed195bdc37"},
		{Name: "Split Fiction - PlayStation", OriginalPrice: 35, Discount: 40, Type: "Global", Store: "PSN", Favourites: 19, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.speedrun.com%2Fstatic%2Fgame%2Fy65rj741%2Fcover.png%3Fv%3D82b835b&f=1&nofb=1&ipt=41f9e94cb6898efa6a8030017bebd096b8f0a0f1259e3618dd7643ed195bdc37"},
		{Name: "Split Fiction - Switch", OriginalPrice: 30, Discount: 10, Type: "Europa", Store: "Nintendo eShop", Favourites: 31, ImageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.speedrun.com%2Fstatic%2Fgame%2Fy65rj741%2Fcover.png%3Fv%3D82b835b&f=1&nofb=1&ipt=41f9e94cb6898efa6a8030017bebd096b8f0a0f1259e3618dd7643ed195bdc37"},
	}

	for i := range games {
		err := DB.Where(models.Game{Name: games[i].Name}).FirstOrCreate(&games[i]).Error
		if err != nil {
			log.Printf("Could not seed game %s: %v", games[i].Name, err)
		}
	}
}
