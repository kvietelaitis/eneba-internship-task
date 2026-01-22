import { Globe, Heart, ShoppingCart, User } from 'lucide-react';
import SearchBox from '../ui/search_box';

type HeaderProp = {
    onSearch: (searchTerm: string) => void
}

function Header({onSearch}: HeaderProp) {
    return (
        <div className='flex items-center justify-between text-white py-4 px-6 gap-4'>
            <div className='flex items-center gap-4 flex-1'>
                <img className='h-12 md:h-16 lg:h-20 flex-shrink-0' src="/Eneba-Logo-2447154143.png" alt="Eneba logo"/>
                <div className='flex-1 max-w-2xl'>
                    <SearchBox onSearch={onSearch} />
                </div>
            </div>

            <nav className="flex items-center gap-4 md:gap-6">
                {/* Language */}
                <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <Globe size={20} className="flex-shrink-0" />
                    <span className="hidden lg:inline text-sm font-medium">EN/EUR</span>
                </a>

                {/* Favourites */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                    <Heart size={20} className="flex-shrink-0" />
                </a>

                {/* Cart */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors relative">
                    <ShoppingCart size={20} className="flex-shrink-0" />
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                        0
                    </span>
                </a>

                {/* Profile */}
                <a href="#" className="flex items-center hover:text-purple-400 transition-colors">
                    <User size={20} className="flex-shrink-0" />
                </a>
            </nav>
        </div>
    )
}

export default Header