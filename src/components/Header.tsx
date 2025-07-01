
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { MenuItem } from '../types/menu';
import Cart from './Cart';

interface HeaderProps {
  cartItemsCount?: number;
  cartItems?: MenuItem[];
}

const Header = ({ cartItemsCount = 0, cartItems = [] }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Sabores Únicos</h1>
              <p className="text-xs text-gray-500">Restaurante</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cardapio" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Cardápio
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contato
            </a>
            <Cart cartItems={cartItems}>
              <button className="relative bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full font-medium transition-colors">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Cart>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#cardapio" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Cardápio
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Contato
              </a>
              <Cart cartItems={cartItems}>
                <button className="relative bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full font-medium transition-colors w-fit flex items-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>Carrinho</span>
                  {cartItemsCount > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
              </Cart>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
