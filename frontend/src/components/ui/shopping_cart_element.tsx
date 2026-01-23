import { Trash2 } from "lucide-react"

type Game = {
  ID: number
  Name: string
  Type: string
  Store: string
  OriginalPrice: number
  Discount: number
  Favourites: number
  ImageURL: string
}

interface ShoppingCartElementProps {
    game: Game
    onRemove: (id: number) => void
}

function ShoppingCartElement({game, onRemove}: ShoppingCartElementProps) {
    const currentPrice = (game.OriginalPrice * (1 - game.Discount / 100)).toFixed(2);

    return (
        <div className="flex items-center gap-4 py-4 border-b border-white/5 group">
            {/* Thumbnail */}
            <div className="w-16 h-20 flex-shrink-0 overflow-hidden rounded bg-gray-800">
                <img 
                    src={game.ImageURL} 
                    alt={game.Name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Game Info */}
            <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-sm line-clamp-2 leading-tight group-hover:text-purple-400 transition-colors">
                    {game.Name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 px-1.5 py-0.5 rounded">
                        {game.Store}
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase">{game.Type}</span>
                </div>
            </div>

            {/* Price & Remove Button */}
            <div className="flex flex-col items-end justify-between self-stretch py-1">
                <span className="text-white font-bold text-base">
                    €{currentPrice}
                </span>
                <button 
                    onClick={() => onRemove(game.ID)}
                    className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Remove item"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
}

export default ShoppingCartElement