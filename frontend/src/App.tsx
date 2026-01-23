import { useCallback, useEffect, useState } from "react";
import GameCard from './components/ui/game_card';
import { Oval } from 'react-loader-spinner'
import Header from "./components/layout/header";

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

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<Game[]>(() => {
    const savedCart = localStorage.getItem('user-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const addToCart = (game: Game) => {
    setCartItems((prevItems) => [...prevItems, game]);
  };

  const removeFromCart = (id: number) => {
  const newCartItems = cartItems.filter(game => game.ID !== id);
    setCartItems(newCartItems)
  }

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}list`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

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

  useEffect(() => {
    localStorage.setItem('user-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="font-brand min-h-screen bg-eneba flex flex-col">
      <header className="w-full px-2 sm:px-4 md:px-8 lg:px-[120px] xl:px-[260px]">
        <Header 
          onSearch={handleSearch} 
          cartItems={cartItems} 
          isCartOpen={isCartOpen} 
          setCartOpen={setIsCartOpen}
          onRemove={removeFromCart}
        />         
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
                <div className="text-white py-6 flex items-center gap-1">
                  <span>Results found:</span>
                  <span className="font-bold text-white">{games.length}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {games.map((game: Game) => (
                    <GameCard key={game.ID} game={game} onAddToCart={addToCart} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-white text-xl font-bold">No games found. Try a different search term.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
