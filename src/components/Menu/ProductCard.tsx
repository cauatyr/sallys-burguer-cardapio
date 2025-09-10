import { useState, useCallback } from 'react';
import ImageLightbox from '@/components/ui/ImageLightbox';

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  const openZoom = useCallback(() => {
    console.log('[ProductCard] open zoom', product?.image);
    setOpen(true);
  }, [product?.image]);

  return (
    <>
      <div 
        onClick={openZoom}
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
            onClick={openZoom}
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

      <ImageLightbox
        open={open}
        src={product.image}
        alt={product.name}
        onClose={() => setOpen(false)}
      />
    </>
  )
}