
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

  // Entradas - Aperitivos
  {
    id: '5',
    name: 'Batata Frita Especial',
    description: 'Batatas rústicas fritas com temperos especiais e molho de queijo.',
    price: 16.90,
    emoji: '🍟',
    category: 'entradas',
    categoryName: 'Aperitivos',
    tags: ['Compartilhar', 'Clássico']
  },
  {
    id: '6',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados e fritos, servidos com molho ranch.',
    price: 18.90,
    emoji: '🧅',
    category: 'entradas',
    categoryName: 'Aperitivos',
    tags: ['Crocante', 'Especial']
  },
  {
    id: '7',
    name: 'Nachos Supreme',
    description: 'Nachos com queijo derretido, guacamole, pico de gallo e jalapeños.',
    price: 24.90,
    emoji: '🌮',
    category: 'entradas',
    categoryName: 'Aperitivos',
    tags: ['Mexicano', 'Compartilhar'],
    isNew: true
  },

  // Bebidas Não Alcoólicas
  {
    id: '8',
    name: 'Água com Gás',
    description: 'Água mineral com gás gelada.',
    price: 4.90,
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
    emoji: '🥤',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Chocolate', 'Cremoso'],
    isPopular: true
  },
  {
    id: '22',
    name: 'Brownie com Sorvete',
    description: 'Brownie quente com sorvete de baunilha e calda de chocolate.',
    price: 18.90,
    emoji: '🍰',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Chocolate', 'Quente']
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
