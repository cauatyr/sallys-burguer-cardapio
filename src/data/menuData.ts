
import { MenuItem } from '../types/menu';

export const menuData: MenuItem[] = [
  // Pratos Principais
  {
    id: '1',
    name: 'Salmão Grelhado',
    description: 'Salmão fresco grelhado com ervas finas, acompanhado de legumes salteados e arroz integral.',
    price: 42.90,
    originalPrice: 48.90,
    emoji: '🐟',
    category: 'pratos',
    categoryName: 'Pratos Principais',
    tags: ['Saudável', 'Rico em Ômega 3'],
    isPopular: true
  },
  {
    id: '2',
    name: 'Picanha na Brasa',
    description: 'Suculenta picanha grelhada no ponto, servida com farofa especial, vinagrete e batata rústica.',
    price: 52.90,
    emoji: '🥩',
    category: 'pratos',
    categoryName: 'Pratos Principais',
    tags: ['Churrasco', 'Premium'],
    isPopular: true
  },
  {
    id: '3',
    name: 'Risotto de Camarão',
    description: 'Cremoso risotto de camarão com açafrão, finalizado com queijo parmesão e ervas frescas.',
    price: 38.90,
    emoji: '🍤',
    category: 'pratos',
    categoryName: 'Pratos Principais',
    tags: ['Frutos do Mar', 'Italiano']
  },
  {
    id: '4',
    name: 'Frango à Parmegiana',
    description: 'Peito de frango empanado, molho de tomate especial, mussarela derretida e batata frita.',
    price: 32.90,
    emoji: '🍗',
    category: 'pratos',
    categoryName: 'Pratos Principais',
    tags: ['Clássico', 'Familiar']
  },

  // Entradas
  {
    id: '5',
    name: 'Bruschetta Italiana',
    description: 'Pão italiano tostado com tomate, manjericão, alho e azeite extra virgem.',
    price: 18.90,
    emoji: '🍞',
    category: 'entradas',
    categoryName: 'Entradas',
    tags: ['Vegetariano', 'Italiano']
  },
  {
    id: '6',
    name: 'Carpaccio de Salmão',
    description: 'Fatias finas de salmão fresco, alcaparras, rúcula e molho de mostarda.',
    price: 28.90,
    emoji: '🐟',
    category: 'entradas',
    categoryName: 'Entradas',
    tags: ['Premium', 'Frutos do Mar'],
    isNew: true
  },
  {
    id: '7',
    name: 'Pastéis Variados',
    description: 'Seleção de pastéis crocantes: queijo, carne, camarão e palmito.',
    price: 22.90,
    emoji: '🥟',
    category: 'entradas',
    categoryName: 'Entradas',
    tags: ['Brasileiro', 'Compartilhar']
  },

  // Bebidas
  {
    id: '8',
    name: 'Caipirinha Premium',
    description: 'Cachaça artesanal, limão tahiti, açúcar orgânico e gelo.',
    price: 16.90,
    emoji: '🍹',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Alcoólica', 'Brasileiro']
  },
  {
    id: '9',
    name: 'Suco Natural Detox',
    description: 'Couve, maçã verde, gengibre, limão e água de coco.',
    price: 12.90,
    emoji: '🥤',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Natural', 'Saudável', 'Detox']
  },
  {
    id: '10',
    name: 'Vinho Tinto Reserva',
    description: 'Vinho tinto encorpado, notas frutadas, ideal para carnes vermelhas.',
    price: 85.90,
    emoji: '🍷',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Alcoólica', 'Premium', 'Importado']
  },
  {
    id: '11',
    name: 'Água Saborizada',
    description: 'Água com gás saborizada com limão siciliano e hortelã.',
    price: 8.90,
    emoji: '💧',
    category: 'bebidas',
    categoryName: 'Bebidas',
    tags: ['Refrescante', 'Zero Açúcar']
  },

  // Sobremesas
  {
    id: '12',
    name: 'Petit Gâteau',
    description: 'Bolinho de chocolate quente com sorvete de baunilha e calda especial.',
    price: 19.90,
    emoji: '🍰',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Chocolate', 'Quente'],
    isPopular: true
  },
  {
    id: '13',
    name: 'Tiramisù Tradicional',
    description: 'Sobremesa italiana com café, mascarpone, ladyfingers e cacau.',
    price: 16.90,
    emoji: '🎂',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Italiano', 'Café', 'Clássico']
  },
  {
    id: '14',
    name: 'Pudim de Leite',
    description: 'Pudim cremoso da casa com calda de caramelo e chantilly.',
    price: 14.90,
    emoji: '🍮',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Brasileiro', 'Cremoso', 'Tradicional']
  },
  {
    id: '15',
    name: 'Mousse de Maracujá',
    description: 'Mousse aerado de maracujá com cobertura de chocolate branco.',
    price: 15.90,
    emoji: '🥭',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tags: ['Tropical', 'Leve', 'Refrescante'],
    isNew: true
  }
];
