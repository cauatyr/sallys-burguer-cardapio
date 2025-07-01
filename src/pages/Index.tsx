
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
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
    { id: 'bebidas-alcoolicas', name: 'Bebidas Alcoólicas', icon: '🍺' },
    { id: 'sobremesas', name: 'Sobremesas', icon: '🍰' },
    { id: 'entradas', name: 'Aperitivos', icon: '🍟' }
  ];

  const filteredItems = activeCategory === 'todos' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => [...prev, item]);
    console.log('Item adicionado ao carrinho:', item.name);
  };

  return (
    <div className="min-h-screen bg-red-50">
      <Header cartItemsCount={cartItems.length} cartItems={cartItems} />
      
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-red-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Sally's Burguer
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            O melhor bar e lanchonete da cidade
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <span className="text-2xl">🍔</span>
            <span className="font-medium">Hamburgers artesanais e muito mais!</span>
          </div>
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
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform ${
                  activeCategory === category.id
                    ? 'bg-red-500 text-white shadow-lg animate-pulse'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-100'
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
