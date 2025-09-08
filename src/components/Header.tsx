
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types/menu';
import Cart from './Cart';

interface HeaderProps {
  cartItemsCount?: number;
  cartItems?: MenuItem[];
  onRemoveFromCart?: (itemId: string) => void;
}

const Header = ({ cartItemsCount = 0, cartItems = [], onRemoveFromCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-card shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <div className="text-primary-foreground font-bold text-lg">
                🍔
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-artisanal font-bold text-foreground">Sally's Burguer</h1>
              <p className="text-xs text-muted-foreground">Artisanal Burgers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#cardapio" className="text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105">
              Cardápio
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105">
              Sobre
            </Link>
            <Link to="/contato" className="text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105">
              Contato
            </Link>
            <Cart cartItems={cartItems} onRemoveItem={onRemoveFromCart}>
              <button className="relative bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg transform">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium">
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
              <button className="relative bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full font-medium transition-all duration-300 hover:scale-110">
                <ShoppingCart size={18} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-medium">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Cart>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-105"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/#cardapio" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105"
              >
                Cardápio
              </Link>
              <Link 
                to="/sobre" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105"
              >
                Sobre
              </Link>
              <Link 
                to="/contato" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105"
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
