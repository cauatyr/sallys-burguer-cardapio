
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { MenuItem } from '../types/menu';
import Cart from './Cart';

interface HeaderProps {
  cartItemsCount?: number;
  cartItems?: MenuItem[];
  onRemoveFromCart?: (itemId: string) => void;
}

const Header = ({ cartItemsCount = 0, cartItems = [], onRemoveFromCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-lg">
                🍔
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Sally's Burguer</h1>
              <p className="text-xs text-gray-500">Bar & Lanchonete</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cardapio" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">
              Cardápio
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">
              Contato
            </a>
            <Cart cartItems={cartItems} onRemoveItem={onRemoveFromCart}>
              <button className="relative bg-red-600 hover:bg-red-700 text-white p-3 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg transform">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Cart>
          </nav>

          {/* Mobile Navigation - Cart and Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Cart Button - Outside of hamburger menu */}
            <Cart cartItems={cartItems} onRemoveItem={onRemoveFromCart}>
              <button className="relative bg-red-600 hover:bg-red-700 text-white p-2 rounded-full font-medium transition-all duration-300 hover:scale-110">
                <ShoppingCart size={18} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[10px]">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Cart>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#cardapio" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">
                Cardápio
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
