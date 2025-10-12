export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'teas' | 'tonics' | 'skincare' | 'plants';
  image: string;
  inStock: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  price: number;
  spots: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
