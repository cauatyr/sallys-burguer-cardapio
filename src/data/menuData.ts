import { MenuItem } from '../types/menu';

export const menuData: MenuItem[] = [
  // Pratos Principais - Hamburgers
  {
    id: '1',
    name: 'Sally\'s Classic Burger',
    description: 'Hambúrguer artesanal de 150g, queijo cheddar, alface, tomate, cebola e molho especial.',
    price: 28.90,
    originalPrice: 32.90,
    image: '/lovable-uploads/49c0a859-5a21-4194-81bb-49836074cdd7.png',
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
    image: '/lovable-uploads/8496b13d-82ff-49b3-b98a-3e626ef3f3e5.png',
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
    description: 'Lanche de peito de frango empanado crocante, maionese, alface e tomate no pão brioche.',
    price: 26.90,
    image: '/lovable-uploads/44a49dca-6401-4a28-befc-3b82ff179321.png',
    emoji: '🍗',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Frango', 'Crocante']
  },
  {
    id: '27',
    name: 'Cachorro Quente',
    description: 'Cachorro quente tradicional com salsicha, molho especial, queijo ralado e batata palha.',
    price: 15.90,
    image: '/lovable-uploads/f05d4b77-f2fc-4e40-b4b8-678b45aff76d.png',
    emoji: '🌭',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Tradicional', 'Rápido'],
    isNew: true
  },
  {
    id: '28',
    name: 'X-Tudo',
    description: 'Hambúrguer completo com carne, presunto, queijo, ovo, bacon, alface, tomate e molho especial.',
    price: 32.90,
    image: '/lovable-uploads/c22325d7-02cc-4b1c-affb-b46604a957fa.png',
    emoji: '🍔',
    category: 'pratos',
    categoryName: 'Hamburgers',
    tags: ['Completo', 'Premium'],
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

  // Bebidas Não Alcoólicas - Updated images
  {
    id: '8',
    name: 'Água com Gás',
    description: 'Água mineral com gás gelada.',
    price: 4.90,
    image: '/lovable-uploads/24f175b9-69e6-49eb-bac5-670aae3e7947.png',
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
    image: '/lovable-uploads/fd66bcde-4d29-49a0-abb9-1a1e8c547de5.png',
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
    image: '/lovable-uploads/d8fa8808-184b-4aba-a2f9-489d5a6b4d55.png',
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
    image: '/lovable-uploads/8cff91ed-f69b-4806-abb1-a832ccc407b1.png',
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
    image: '/lovable-uploads/4518f270-c040-4563-b921-6073b0231c5b.png',
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
    image: '/lovable-uploads/ccb8a645-783c-42f0-be40-6dd47731c6aa.png',
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Brasileiro', 'Refrigerante']
  },
  {
    id: '15',
    name: 'Energético',
    description: 'TNT Energy drink 473ml.',
    price: 12.90,
    image: '/lovable-uploads/62e12f86-93ba-4921-a71b-62bc96c03533.png',
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
    id: '29',
    name: 'Cerveja Budweiser Lata',
    description: 'Cerveja Budweiser lata 350ml gelada.',
    price: 7.90,
    image: '/lovable-uploads/d8b1437e-03ed-4321-9b21-24e72154a0cb.png',
    emoji: '🍺',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Cerveja', 'Importada'],
    isNew: true
  },
  {
    id: '30',
    name: 'Cerveja Brahma Lata',
    description: 'Cerveja Brahma lata 350ml gelada.',
    price: 5.90,
    image: '/lovable-uploads/1fa5c119-bece-4346-ba28-8bb2d77283db.png',
    emoji: '🍺',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Cerveja', 'Nacional'],
    isNew: true
  },
  {
    id: '31',
    name: 'Cerveja Antarctica',
    description: 'Cerveja Antarctica lata 350ml gelada.',
    price: 5.90,
    image: '/lovable-uploads/04ce927c-a9f0-424f-aad3-10d35284c542.png',
    emoji: '🍺',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Cerveja', 'Nacional'],
    isNew: true
  },
  {
    id: '18',
    name: 'Caipirinha',
    description: 'Caipirinha tradicional com cachaça, limão e açúcar.',
    price: 16.90,
    image: '/lovable-uploads/83a45f58-b79b-45b4-90f0-c02acfd45132.png',
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
    image: '/lovable-uploads/0543b3ef-25bb-4eb5-8801-68ce9758c156.png',
    emoji: '🥃',
    category: 'bebidas-alcoolicas',
    categoryName: 'Bebidas Alcoólicas',
    tags: ['Whisky', 'Premium']
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
    image: '/lovable-uploads/42a09fee-3056-4a42-8959-ab8c9909b4a0.png',
    emoji: '🍋',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Cítrico', 'Refrescante']
  }
];
