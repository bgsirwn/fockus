package routes

import (
	"api-fockus/handlers"

	fiber "github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {

	app.Get("/", handlers.Home)
	app.Get("/register", handlers.Register)

}
