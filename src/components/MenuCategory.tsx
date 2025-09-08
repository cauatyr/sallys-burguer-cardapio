
import MenuCard from './MenuCard';
import { MenuItem } from '../types/menu';

interface MenuCategoryProps {
  items: MenuItem[];
  onAddToCart?: (item: MenuItem) => void;
}

const MenuCategory = ({ items, onAddToCart }: MenuCategoryProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🍽️</div>
        <h3 className="text-xl font-artisanal text-muted-foreground">Nenhum item encontrado nesta categoria</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <MenuCard
          key={item.id}
          item={item}
          delay={index * 0.1}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default MenuCategory;
