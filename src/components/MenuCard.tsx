
import { useState } from 'react';
import { Heart, Plus, Check } from 'lucide-react';
import { MenuItem } from '../types/menu';
import ProductModal from './ProductModal';
import { useToast } from '@/hooks/use-toast';

interface MenuCardProps {
  item: MenuItem;
  delay?: number;
  onAddToCart?: (item: MenuItem) => void;
}

const MenuCard = ({ item, delay = 0, onAddToCart }: MenuCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    if (onAddToCart) {
      onAddToCart(item);
    }

    // Mostrar toast de sucesso
    toast({
      title: "Item adicionado!",
      description: `${item.name} foi adicionado ao carrinho`,
      duration: 2000,
    });

    // Reset do estado após a animação
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        onClick={handleCardClick}
        className="artisanal-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in-up group cursor-pointer hover:scale-105"
        style={{ 
          animationDelay: `${delay}s`
        }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {!imageError && item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain cursor-zoom-in"
              onError={() => setImageError(true)}
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl">{item.emoji}</span>
            </div>
          )}
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-all duration-300 hover:scale-110 shadow-md"
          >
            <Heart
              size={20}
              className={`transition-colors ${
                isFavorite ? 'text-primary fill-primary' : 'text-muted-foreground'
              }`}
            />
          </button>

          {/* Category Badge */}
          <div 
            className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
          >
            {item.categoryName}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-artisanal font-bold text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-artisanal font-bold text-primary">
                R$ {item.price.toFixed(2)}
              </div>
              {item.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">
                  R$ {item.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Add to Cart Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            disabled={isAdding}
            className={`w-full font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg hover:scale-105 transform hover:shadow-xl ${
              isAdding 
                ? 'bg-accent text-accent-foreground scale-110' 
                : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/20'
            }`}
          >
            {isAdding ? (
              <>
                <Check size={20} className="animate-bounce" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <Plus size={20} />
                <span>Adicionar ao Pedido</span>
              </>
            )}
          </button>
        </div>
      </div>

      <ProductModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default MenuCard;
