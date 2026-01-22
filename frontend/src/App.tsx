import SearchBox from './components/ui/search_box'
import { useCallback, useState } from "react";
import { Globe, Heart, ShoppingCart, User } from 'lucide-react';
import GameCard from './components/ui/game_card';
import { Oval } from 'react-loader-spinner'

type Game = {
  ID: number
  Name: string
  Type: string
  OriginalPrice: number
  Discount: number
  Favourites: number
  ImageURL: string
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSearch = useCallback(async (searchTerm: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}list?search=${searchTerm}`);
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-eneba flex flex-col">
      <header className='flex justify-between text-white p-6'>
        <div className='flex items-center'>
          <img className='h-20' src="/Eneba-Logo-2447154143.png" alt="Eneba logo"/>
          <SearchBox onSearch={handleSearch} />
        </div>

        <div className='flex items-center justify-end'>
          <nav className="flex gap-2 md:gap-6">
            {/* Language */}
            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors group">
              <Globe size={20} />
              <span className="hidden lg:inline text-sm font-medium">EN/EUR</span>
            </a>

            {/* Favourites */}
            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors group">
              <Heart size={20} />
            </a>

            {/* Cart */}
            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors group relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </a>

            {/* Profile */}
            <a href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors group">
              <User size={20} />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-16 flex flex-col">
        {loading ? (
          <div className='flex-grow flex items-center justify-center'>
            <Oval visible={true}/>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4">
            {games.length > 0 ? (
              <>
                <div className="text-white py-6 flex items-center gap-2">
                  <span>Results found:</span>
                  <span className="font-bold text-white">{games.length}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {games.map((game: Game) => (
                    <GameCard key={game.ID} game={game} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No games found. Try a different search term.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
