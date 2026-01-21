import SearchBox from './components/ui/search_box'
import { useCallback, useState } from "react";
import { Globe, Heart, ShoppingCart, User } from 'lucide-react';
import GameCard from './components/ui/game_card';

type Game = {
  ID: number
  Name: string
  Type: string
  OriginalPrice: number
  Discount: number
  Favourites: number
}

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (searchTerm: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:3000/list?search=${searchTerm}`);
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

      <main className="p-8">
        {loading ? (
          <p>Searching...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {games.map((game: Game) => (
              <GameCard game={game} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
