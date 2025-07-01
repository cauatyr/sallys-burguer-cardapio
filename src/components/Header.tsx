
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Fazer Pedido
            </button>
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors w-fit">
                Fazer Pedido
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
