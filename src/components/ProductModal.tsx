
import { useState } from 'react';
import { X, Plus, Heart } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { Button } from './ui/button';

interface ProductModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (item: MenuItem) => void;
}

const ProductModal = ({ item, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card text-card-foreground rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-enter">
        {/* Header */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-all duration-300 hover:scale-110 shadow-md"
          >
            <X size={20} className="text-muted-foreground" />
          </button>

          {/* Image */}
          <div className="relative h-80 bg-muted overflow-hidden rounded-t-2xl">
            {!imageError && item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain animate-enter"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl">{item.emoji}</span>
              </div>
            )}
            
            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
            >
              <Heart
                size={20}
                className={`transition-colors ${
                  isFavorite ? 'text-primary fill-primary' : 'text-gray-400'
                }`}
              />
            </button>

            {/* Category Badge */}
            <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {item.categoryName}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold text-foreground">
              {item.name}
            </h2>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">
                R$ {item.price.toFixed(2)}
              </div>
              {item.originalPrice && (
                <div className="text-lg text-muted-foreground line-through">
                  R$ {item.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-accent transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105 transform hover:shadow-primary/20 text-lg"
          >
            <Plus size={24} />
            <span>Adicionar ao Pedido</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
