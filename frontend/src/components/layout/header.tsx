import { Globe, Heart, ShoppingCart, User, Search, ArrowLeft } from 'lucide-react'; // Added Search and ArrowLeft
import { useState } from 'react';
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
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

    return (
        <div className='flex items-center justify-between text-white py-3 px-4 sm:px-6 md:px-8 lg:px-12 gap-2 sm:gap-4'>
            
            {/* Mobile Search Overlay */}
            {isSearchOverlayOpen && (
                <div className="absolute inset-0 bg-eneba z-50 flex items-center px-4 md:hidden">
                    <button onClick={() => setIsSearchOverlayOpen(false)} className="mr-3 p-2">
                        <ArrowLeft size={20} className="w-6 h-6" /> {/* Updated size */}
                    </button>
                    <div className="flex-1">
                        <SearchBox onSearch={onSearch} />
                    </div>
                </div>
            )}

            {/* Left Section: Logo */}
            <div className='flex items-center gap-2 sm:gap-4 flex-shrink-0'>
                <img 
                    className='h-8 sm:h-10 md:h-12 lg:h-16 flex-shrink-0' 
                    src="/Eneba-Logo-2447154143.png" 
                    alt="Eneba logo"
                />
            </div>

            {/* Center Section: Desktop Search */}
            <div className='hidden md:flex items-center flex-1 max-w-lg lg:max-w-xl px-4 gap-4'>
                <div className="flex-1">
                    <SearchBox onSearch={onSearch} />
                </div>
                <nav className="hidden lg:flex flex-shrink-0">
                    <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                        <Globe size={20} className="w-6 h-6 md:w-7 md:h-7" />
                        <span className="text-sm font-medium">EN/EUR</span>
                    </a>
                </nav>
            </div>

            <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto">

                {/* Mobile Search Button */}
                <button 
                    onClick={() => setIsSearchOverlayOpen(true)}
                    className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <Search size={20} className="w-6 h-6" /> {/* Updated size */}
                </button>

                {/* Favourites - Changed hidden xs:flex to flex */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                    <Heart size={20} className="w-6 h-6 md:w-7 md:h-7" />
                </a>

                {/* Cart */}
                <div className="relative"> 
                    <button 
                        onClick={() => setCartOpen(!isCartOpen)}
                        className="flex items-center hover:text-purple-400 transition-colors relative cursor-pointer"
                    >
                        <ShoppingCart size={20} className="w-6 h-6 md:w-7 md:h-7" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-[10px] md:text-xs text-white rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center font-bold">
                                {cartItems.length}
                            </span>
                        )}
                    </button>

                    <ShoppingCartModal 
                        isOpen={isCartOpen} 
                        onClose={() => setCartOpen(false)} 
                        cartItems={cartItems} 
                        onRemove={onRemove} 
                    />
                </div>

                {/* Profile */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                    <User size={20} className="w-6 h-6 md:w-7 md:h-7" />
                </a>
            </nav>
        </div>
    )
}

export default Header