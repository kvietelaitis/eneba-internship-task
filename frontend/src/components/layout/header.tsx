import { Globe, Heart, ShoppingCart, User } from 'lucide-react';
import SearchBox from '../ui/search_box';
import ShoppingCartModal from "../ui/shopping_cart";

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

interface HeaderProp {
    onSearch: (searchTerm: string) => void;
    cartItems: Game[];
    onRemove: (id: number) => void;
    isCartOpen: boolean;
    setCartOpen: (open: boolean) => void;
}

function Header({onSearch, cartItems, onRemove, isCartOpen, setCartOpen}: HeaderProp) {
    return (
        <div className='flex items-center justify-between text-white py-4 px-6 gap-4'>
            <div className='flex items-center gap-4 flex-1'>
                <img className='h-12 md:h-16 lg:h-20 flex-shrink-0' src="/Eneba-Logo-2447154143.png" alt="Eneba logo"/>
                <div className='flex-1 max-w-2xl'>
                    <SearchBox onSearch={onSearch} />
                </div>
                <nav>
                    <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                        <Globe size={20} className="flex-shrink-0 w-6 h-6" />
                        <span className="hidden lg:inline text-md font-medium">EN/EUR</span>
                    </a>
                </nav>
            </div>

            <nav className="flex items-center gap-4 md:gap-6 w- h-8">
                {/* Favourites */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                    <Heart size={20} className="flex-shrink-0 w-7 h-7" />
                </a>

                {/* Cart */}
                <div className="relative"> 
                    <button 
                        onClick={() => setCartOpen(!isCartOpen)}
                        className="flex items-center hover:text-purple-400 transition-colors relative cursor-pointer"
                    >
                        <ShoppingCart size={20} className="flex-shrink-0 w-7 h-7" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                                {cartItems.length}
                            </span>
                        )}
                    </button>

                    {/* Popover Cart */}
                    <ShoppingCartModal 
                        isOpen={isCartOpen} 
                        onClose={() => setCartOpen(false)} 
                        cartItems={cartItems} 
                        onRemove={onRemove} 
                    />
                </div>

                {/* Profile */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                    <User size={20} className="flex-shrink-0 w-7 h-7" />
                </a>
            </nav>
        </div>
    )
}

export default Header