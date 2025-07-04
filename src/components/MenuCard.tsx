
import { useState } from 'react';
import { Heart, Plus } from 'lucide-react';
import { MenuItem } from '../types/menu';
import ProductModal from './ProductModal';

interface MenuCardProps {
  item: MenuItem;
  delay?: number;
  onAddToCart?: (item: MenuItem) => void;
}

const MenuCard = ({ item, delay = 0, onAddToCart }: MenuCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        onClick={handleCardClick}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in group cursor-pointer hover:scale-105 border-2 border-[#009639]"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Image */}
        <div className="relative h-48 bg-red-100 overflow-hidden">
          {!imageError && item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain"
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
            className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-md border border-[#009639]"
          >
            <Heart
              size={20}
              className={`transition-colors ${
                isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`}
            />
          </button>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-[#009639]">
            {item.categoryName}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
              {item.name}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">
                R$ {item.price.toFixed(2)}
              </div>
              {item.originalPrice && (
                <div className="text-sm text-gray-400 line-through">
                  R$ {item.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-red-100 transition-colors duration-300 border border-[#009639]"
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
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg hover:scale-105 transform hover:shadow-2xl hover:shadow-red-500/20 border-2 border-[#009639]"
          >
            <Plus size={20} />
            <span>Adicionar ao Pedido</span>
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
