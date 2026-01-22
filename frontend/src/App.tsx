import { useCallback, useState } from "react";
import GameCard from './components/ui/game_card';
import { Oval } from 'react-loader-spinner'
import Header from "./components/layout/header";

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
      <header>
        <Header onSearch={handleSearch}/>        
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
