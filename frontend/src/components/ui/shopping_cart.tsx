import { X } from "lucide-react";
import ShoppingCartElement from "./shopping_cart_element";

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

interface ShoppingCartProps {
    cartItems: Game[]
    isOpen: boolean
    onClose: () => void
    onRemove: (id: number) => void
}

function ShoppingCartModal({isOpen, onClose, onRemove, cartItems}: ShoppingCartProps) {
    if (!isOpen) return null;

    const total = cartItems.reduce((acc, game) => acc + (game.OriginalPrice * (1 - game.Discount / 100)), 0).toFixed(2);

    return (
        <>
            {/* Invisible backdrop to close when clicking outside */}
            <div className="fixed inset-0 z-40" onClick={onClose} />

            {/* Dropdown Card */}
            <div className="absolute right-0 top-full mt-4 w-96 bg-gametile border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                
                {/* Little Arrow pointing to the button */}
                <div className="absolute -top-2 right-4 w-4 h-4 bg-gametile border-l border-t border-white/10 rotate-45" />

                <div className="p-4 border-b border-white/10">
                    <h2 className="text-lg font-bold text-white">Shopping Cart</h2>
                </div>

                <div className="max-h-[400px] overflow-y-auto p-4 custom-scrollbar">
                    {cartItems.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {cartItems.map((game: Game) => (
                                <ShoppingCartElement key={game.ID} game={game} onRemove={onRemove}/>
                            ))}
                        </div>
                    ) : (
                        <div className="py-8 text-center">
                            <p className="text-gray-400 text-sm">Your cart is empty.</p>
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-4 bg-[#1c0533] border-t border-white/10">
                        <div className="flex justify-between text-white mb-4 font-bold">
                            <span>Total</span>
                            <span>€{total}</span>
                        </div>
                        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                            View Cart & Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ShoppingCartModal
