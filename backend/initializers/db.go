package initializers

import (
	"os"

	"github.com/kvietelaitis/eneba-internship-task/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDatabase() {
	var err error
	dsn := os.Getenv("DB_URL")
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database.")
	}
}

func SyncDatabase() {
	DB.AutoMigrate(
		&models.Game{},
	)
}
