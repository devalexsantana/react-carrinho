import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContex";

export function Header() {
    const { cartAmount } = useContext(CartContext)
    return (
        <header className="w-full px-1 bg-slate-200">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
                <Link to="/" className="font-bold text-2xl">
                    Dev Shop
                </Link>

                <Link to="/cart" className="relative">
                    <FiShoppingCart size={24} color="#121212" />
                    {cartAmount > 0 && (
                        <span className="absolute -top-3 -right-3 px-2.5 bg-red-500 rounded-full w-6 g-6 flex items-center justify-center text-white">
                            {cartAmount}
                        </span>

                    )}

                </Link>
            </nav>
        </header>
    )
}