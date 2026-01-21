import { Heart } from "lucide-react"

type Game = {
    ID: number
    Name: string
    Type: string
    OriginalPrice: number
    Discount: number
    Favourites: number
}

type GameProp = {
    game: Game
}

function GameCard({game}: GameProp) {
    const currentPrice = game.OriginalPrice - (game.OriginalPrice*(game.Discount)/100)
    const cashback = (game.OriginalPrice*(game.Discount)/253)

    return (
        <div>
            <div key={game.ID} className="bg-gametile border-2 border-gametileborder text-white p-6">
                <h2 className="font-bold text-lg">{game.Name}</h2>
                <h3 className="font-bold py-1 pb-8 text-md text-gametileborder">{game.Type.toUpperCase()}</h3>
                <h3 className="font-semibold text-gray-400">From <del>€{game.OriginalPrice}</del> <span className="text-lime-400"> -{game.Discount}%</span></h3>
                <h1 className="font-bold text-3xl">€{currentPrice}</h1>
                <h3 className="font-semibold text-sm text-lime-400">Cashback: €{cashback.toPrecision(4)}</h3>
                <h3 className="flex text-gray-400 content-center pt-2"><Heart /> <span className="pl-2">{game.Favourites}</span></h3>
            </div>
        </div>
    )
}

export default GameCard