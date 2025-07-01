
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  emoji: string;
  category: string;
  categoryName: string;
  tags?: string[];
  isPopular?: boolean;
  isNew?: boolean;
}
