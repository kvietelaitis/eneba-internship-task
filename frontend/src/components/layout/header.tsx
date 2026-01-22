import { Globe, Heart, ShoppingCart, User } from 'lucide-react';
import SearchBox from '../ui/search_box';

type HeaderProp = {
    onSearch: (searchTerm: string) => void
}

function Header({onSearch}: HeaderProp) {
    return (
        <div className='flex justify-between text-white p-6'>
            <div className='flex items-center'>
                <img className='h-20' src="/Eneba-Logo-2447154143.png" alt="Eneba logo"/>
                <SearchBox onSearch={onSearch} />
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
        </div>
    )
}

export default Header