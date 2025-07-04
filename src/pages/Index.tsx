import { useState } from 'react';
import Header from '../components/Header';
import MenuCategory from '../components/MenuCategory';
import { menuData } from '../data/menuData';
import { MenuItem } from '../types/menu';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🍽️' },
    { id: 'pratos', name: 'Hamburgers', icon: '🍔' },
    { id: 'entradas', name: 'Entradas', icon: '🍟' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
    { id: 'bebidas-alcoolicas', name: 'Bebidas Alcoólicas', icon: '🍺' },
    { id: 'sobremesas', name: 'Sobremesas', icon: '🍰' }
  ];

  const filteredItems = activeCategory === 'todos' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => [...prev, item]);
    console.log('Item adicionado ao carrinho:', item.name);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prev => {
      const itemIndex = prev.findIndex(item => item.id === itemId);
      if (itemIndex > -1) {
        const newCart = [...prev];
        newCart.splice(itemIndex, 1);
        return newCart;
      }
      return prev;
    });
    console.log('Item removido do carrinho');
  };

  return (
    <div className="min-h-screen bg-red-50">
      <Header 
        cartItemsCount={cartItems.length} 
        cartItems={cartItems} 
        onRemoveFromCart={handleRemoveFromCart}
      />
      
      {/* Hero Section com Banner - Responsivo com duas resoluções */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile: altura menor com object-cover */}
        <div className="block md:hidden h-48 sm:h-64">
          <img
            src="/lovable-uploads/ae42da5f-24e1-457f-bcec-d2de3534ba58.png"
            alt="Sally's Burger Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop: altura maior com object-cover para preencher sem espaços em branco */}
        <div className="hidden md:block h-80 lg:h-96 xl:h-[500px]">
          <img
            src="/lovable-uploads/ae42da5f-24e1-457f-bcec-d2de3534ba58.png"
            alt="Sally's Burger Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform shadow-md ${
                  activeCategory === category.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:shadow-lg'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <MenuCategory items={filteredItems} onAddToCart={handleAddToCart} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sally's Burguer</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2">📍</span>
                Endereço
              </h4>
              <p className="text-gray-300">Rua dos Hamburgers, 456<br />Centro - São Paulo</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2">📞</span>
                Contato
              </h4>
              <p className="text-gray-300">(11) 8888-8888<br />contato@sallysburguer.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2">🕒</span>
                Horário
              </h4>
              <p className="text-gray-300">Seg - Dom<br />18:00 às 02:00</p>
            </div>
          </div>
          <p className="text-gray-400">© 2024 Sally's Burguer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
