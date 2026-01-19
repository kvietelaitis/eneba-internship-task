package models

import (
	"gorm.io/gorm"
)

type Game struct {
	gorm.Model
	Name          string  `gorm:"not null"`
	OriginalPrice float64 `gorm:"not null"`
	Discount      uint    `gorm:"not null"`
	Type          string  `gorm:"not null"`
	Favourites    uint    `gorm:"not null"`
}
