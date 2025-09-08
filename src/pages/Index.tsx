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
    <div className="min-h-screen bg-background animate-fade-in-up">
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
      <section className="py-8 px-4 bg-card shadow-sm sticky top-16 z-10 border-b border-border">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-2">
            <div className="flex space-x-3 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`artisanal-badge flex items-center space-x-2 px-4 py-2 whitespace-nowrap ${
                    activeCategory === category.id ? 'active' : ''
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered flex wrap */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`artisanal-badge flex items-center space-x-2 px-6 py-3 ${
                  activeCategory === category.id ? 'active' : ''
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
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
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-artisanal font-bold mb-4">Sally's Burguer</h3>
          <p className="text-accent mb-8">Artisanal Burgers & Craft Experience</p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2">📍</span>
                Endereço
              </h4>
              <p className="text-primary-foreground/80">Rua dos Hamburgers, 456<br />Centro - São Paulo</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2">📞</span>
                Contato
              </h4>
              <p className="text-primary-foreground/80">(11) 8888-8888<br />contato@sallysburguer.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2">🕒</span>
                Horário
              </h4>
              <p className="text-primary-foreground/80">Seg - Dom<br />18:00 às 02:00</p>
            </div>
          </div>
          <p className="text-primary-foreground/60">© 2024 Sally's Burguer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
