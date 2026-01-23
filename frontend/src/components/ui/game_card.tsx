import { Heart, Info, Plus } from "lucide-react";

type Game = {
  ID: number;
  Name: string;
  Type: string;
  OriginalPrice: number;
  Discount: number;
  Favourites: number;
  ImageURL: string;
};

type GameProp = {
  game: Game;
};

function GameCard({ game }: GameProp) {
  const currentPrice = (game.OriginalPrice * (1 - game.Discount / 100)).toFixed(2);
  const cashback = (parseFloat(currentPrice) * 0.11).toFixed(2);

  return (
    <div className="group relative w-[280px] h-[540px] bg-gametile border-2 border-gametileborder transition-all duration-300 rounded-sm overflow-hidden flex flex-col cursor-pointer shadow-2xl">
      
      <div className="absolute top-0 left-0 w-full h-max">
        <img
          src={game.ImageURL}
          alt={game.Name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-[#1c0533] transition-transform duration-300 ease-out transform translate-y-[125px] group-hover:translate-y-0">
        
        <div className="absolute -top-10 left-0 z-20 bg-[#53f3c3] text-[#003d2b] px-3 py-1.5 flex items-center gap-1 font-black text-[13px] rounded-r-sm shadow-lg">
          <Plus size={14} strokeWidth={4} />
          <span>CASHBACK</span>
        </div>

        <div className="bg-[#110224]/90 backdrop-blur-md py-2 px-4 flex items-center gap-2 border-b border-white/5">
          <div className="w-4 h-4 bg-[#107c10] rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 border-[1.5px] border-white rounded-full opacity-80"></div>
          </div>
          <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">Xbox Live</span>
        </div>

        <div className="p-4 flex flex-col h-[340px]">
          <h2 className="font-bold text-white text-[15px] leading-tight mb-1 line-clamp-2 min-h-[38px]">
            {game.Name}
          </h2>

          <p className="text-[#ff3399] font-black text-[11px] mb-3 tracking-widest uppercase">
            {game.Type}
          </p>

          <div className="text-gray-400 text-[13px] font-medium mb-1">
            From <del className="mr-1">€{game.OriginalPrice.toFixed(2).replace('.', ',')}</del> 
            <span className="text-[#a3e635] font-bold">-{game.Discount}%</span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <span className="text-white text-3xl font-black">{currentPrice.replace('.', ',')} €</span>
            <Info size={18} className="text-gray-500 hover:text-white cursor-help" />
          </div>

          <div className="text-[#a3e635] font-bold text-[13px]">
            Cashback: {cashback.replace('.', ',')} €
          </div>

          <div className="flex items-center gap-1.5 text-gray-400 text-sm mt-3 mb-6">
            <Heart size={16} />
            <span className="font-bold">{game.Favourites}</span>
          </div>

          <div className="space-y-2 mt-auto pb-4">
            <button className="w-full bg-[#ffcc00] hover:bg-[#ffdb4d] text-[#1c0533] font-bold py-3 rounded-sm transition-colors text-[16px] tracking-tighter">
              Add to cart
            </button>
            <button className="w-full border-2 border-white/40 text-white font-bold py-2 rounded-sm hover:bg-white/10 transition-colors text-[14px]">
              Other deals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;