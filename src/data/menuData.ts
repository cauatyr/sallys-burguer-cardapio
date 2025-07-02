
import { MenuItem } from '../types/menu';

export const menuData: MenuItem[] = [
  // Pratos Principais - Hamburgers
  {
    id: '1',
    name: 'Sally\'s Classic Burger',
    description: 'Hambúrguer artesanal de 150g, queijo cheddar, alface, tomate, cebola e molho especial.',
    price: 28.90,
    originalPrice: 32.90,
    emoji: '🍔',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Clássico', 'Artesanal'],
    isPopular: true
  },
  {
    id: '2',
    name: 'Bacon Cheese Burger',
    description: 'Hambúrguer duplo com bacon crocante, queijo cheddar derretido e molho barbecue.',
    price: 34.90,
    emoji: '🥓',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Bacon', 'Premium'],
    isPopular: true
  },
  {
    id: '24',
    name: 'Duplo Smash Burger',
    description: 'Dois hambúrgueres smash com queijo derretido, alface, tomate e molho especial no pão brioche.',
    price: 38.90,
    image: '/lovable-uploads/39958822-168b-417f-8f91-f8e0dd1acb08.png',
    emoji: '🍔',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Duplo', 'Smash'],
    isNew: true
  },
  {
    id: '3',
    name: 'Chicken Crispy',
    description: 'Peito de frango empanado crocante, maionese, alface e tomate no pão brioche.',
    price: 26.90,
    emoji: '🍗',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Frango', 'Crocante']
  },
  {
    id: '4',
    name: 'Veggie Burger',
    description: 'Hambúrguer vegano de grão-de-bico, rúcula, tomate seco e molho de tahine.',
    price: 24.90,
    emoji: '🥬',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Vegano', 'Saudável'],
    isNew: true
  },

  // Entradas - Entradas
  {
    id: '5',
    name: 'Batata Frita com Molho Caseiro',
    description: 'Batatas rústicas fritas com temperos especiais e molho caseiro.',
    price: 16.90,
    image: '/lovable-uploads/bfb4249b-a2b3-419a-b67f-8ccb95bcabee.png',
    emoji: '🍟',
    category: 'entradas',
    categoryName: 'Entradas',
    tags: ['Compartilhar', 'Clássico']
  },
  {
    id: '6',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados e fritos, servidos com molho ranch.',
    price: 18.90,
    image: '/lovable-uploads/2db6c5a6-8ecf-4f5f-9e05-45c4cdb907a7.png',
    emoji: '🧅',
    category: 'entradas',
    categoryName: 'Entradas',
    tags: ['Crocante', 'Especial']
  },
  {
    id: '25',
    name: 'Tábua de Frios',
    description: 'Seleção especial de queijos, embutidos, azeitonas e pães artesanais.',
    price: 32.90,
    image: '/lovable-uploads/d9b055e4-ead1-4eac-a3cc-8f47c175ec64.png',
    emoji: '🧀',
    category: 'entradas',
    categoryName: 'Entradas',
    tags: ['Gourmet', 'Compartilhar'],
    isNew: true
  },

  // Bebidas Não Alcoólicas
  {
    id: '8',
    name: 'Água com Gás',
    description: 'Água mineral com gás gelada.',
    price: 4.90,
    image: '/lovable-uploads/85031767-eace-4e9a-85c9-341006743eed.png',
    emoji: '💧',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Refrescante', 'Natural']
  },
  {
    id: '9',
    name: 'Água sem Gás',
    description: 'Água mineral natural gelada.',
    price: 3.90,
    emoji: '💦',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Natural', 'Hidratante']
  },
  {
    id: '10',
    name: 'Coca-Cola Lata',
    description: 'Coca-Cola tradicional em lata 350ml.',
    price: 6.90,
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Refrigerante', 'Clássico']
  },
  {
    id: '11',
    name: 'Coca-Cola Zero Lata',
    description: 'Coca-Cola Zero açúcar em lata 350ml.',
    price: 6.90,
    image: '/lovable-uploads/a6a27cca-f69c-4646-8b01-853a9f88be09.png',
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Zero Açúcar', 'Refrigerante']
  },
  {
    id: '12',
    name: 'Coca-Cola 2L',
    description: 'Coca-Cola tradicional garrafa 2 litros.',
    price: 12.90,
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Família', 'Refrigerante']
  },
  {
    id: '13',
    name: 'Pepsi',
    description: 'Pepsi gelada em lata 350ml.',
    price: 6.90,
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Refrigerante', 'Refrescante']
  },
  {
    id: '14',
    name: 'Guaraná',
    description: 'Guaraná Antarctica gelado em lata 350ml.',
    price: 6.90,
    image: '/lovable-uploads/3bed842b-822c-4be2-b696-838c80ba713c.png',
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Brasileiro', 'Refrigerante']
  },
  {
    id: '15',
    name: 'Energético',
    description: 'Red Bull energy drink 250ml.',
    price: 12.90,
    emoji: '⚡',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Energia', 'Premium']
  },

  // Bebidas Alcoólicas
  {
    id: '16',
    name: 'Cerveja Heineken',
    description: 'Cerveja Heineken long neck 330ml gelada.',
    price: 8.90,
    image: '/lovable-uploads/1ebd6bfa-93ed-4a50-9df2-13610bbc5284.png',
    emoji: '🍺',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Cerveja', 'Importada']
  },
  {
    id: '17',
    name: 'Cerveja Skol',
    description: 'Cerveja Skol lata 350ml gelada.',
    price: 5.90,
    emoji: '🍺',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Cerveja', 'Nacional']
  },
  {
    id: '18',
    name: 'Caipirinha',
    description: 'Caipirinha tradicional com cachaça, limão e açúcar.',
    price: 16.90,
    emoji: '🍹',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Cachaça', 'Brasileiro']
  },
  {
    id: '19',
    name: 'Whisky Dose',
    description: 'Dose de whisky nacional com gelo.',
    price: 18.90,
    emoji: '🥃',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Whisky', 'Premium']
  },
  {
    id: '20',
    name: 'Vodka com Energético',
    description: 'Vodka premium com energético Red Bull.',
    price: 24.90,
    emoji: '🍸',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Vodka', 'Energético']
  },

  // Sobremesas
  {
    id: '21',
    name: 'Milk Shake de Chocolate',
    description: 'Milk shake cremoso de chocolate com chantilly e cereja.',
    price: 16.90,
    image: '/lovable-uploads/e3294489-7b66-4be2-9bdc-31885a6d6b82.png',
    emoji: '🥤',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Chocolate', 'Cremoso'],
    isPopular: true
  },
  {
    id: '26',
    name: 'Petit Gateau',
    description: 'Delicioso bolinho de chocolate quente com recheio cremoso, acompanhado de sorvete de baunilha e calda especial.',
    price: 22.90,
    image: '/lovable-uploads/4a911ec9-55e9-4c4f-a3fb-126c80119300.png',
    emoji: '🍰',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Chocolate', 'Quente', 'Premium']
  },
  {
    id: '23',
    name: 'Torta de Limão',
    description: 'Fatia de torta de limão com merengue queimado.',
    price: 14.90,
    emoji: '🍋',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Cítrico', 'Refrescante']
  }
];
