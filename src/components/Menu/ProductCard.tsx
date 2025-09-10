import { useState } from 'react';
import ProductModal from '../ProductModal';
import ImageZoomModal from '../ImageZoomModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsImageZoomOpen(true);
  };

  return (
    <>
      <div 
        onClick={handleCardClick}
        className="artisanal-card p-4 cursor-pointer"
      >
        <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        <div className="flex justify-center my-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 object-contain cursor-zoom-in hover:scale-105 transition-transform duration-200"
            onClick={handleImageClick}
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
          <span className="font-bold text-primary text-lg">{product.price}</span>
        </div>
      </div>

      <ProductModal
        item={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ImageZoomModal
        isOpen={isImageZoomOpen}
        onClose={() => setIsImageZoomOpen(false)}
        imageSrc={product.image}
        imageAlt={product.name}
      />
    </>
  )
}