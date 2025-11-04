import { ShoppingBag, Filter } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rooibos Healing Tea',
    description: 'Premium organic rooibos with natural antioxidants',
    price: 89,
    category: 'teas',
    image: 'tea',
    inStock: true,
  },
  {
    id: '2',
    name: 'Buchu Detox Blend',
    description: 'Traditional buchu leaves for cleansing and wellness',
    price: 120,
    category: 'teas',
    image: 'tea',
    inStock: true,
  },
  {
    id: '3',
    name: 'Honeybush Calm',
    description: 'Soothing honeybush tea for relaxation',
    price: 95,
    category: 'teas',
    image: 'tea',
    inStock: true,
  },
  {
    id: '4',
    name: 'African Potato Tonic',
    description: 'Immune-boosting tonic with African potato extract',
    price: 165,
    category: 'tonics',
    image: 'tonic',
    inStock: true,
  },
  {
    id: '5',
    name: 'Moringa Energy Elixir',
    description: 'Energizing moringa supplement for vitality',
    price: 145,
    category: 'tonics',
    image: 'tonic',
    inStock: true,
  },
  {
    id: '6',
    name: 'Sutherlandia Wellness',
    description: 'Traditional cancer bush tonic for overall health',
    price: 180,
    category: 'tonics',
    image: 'tonic',
    inStock: true,
  },
  {
    id: '7',
    name: 'Marula Oil Face Serum',
    description: 'Nourishing face serum with pure marula oil',
    price: 220,
    category: 'skincare',
    image: 'skincare',
    inStock: true,
  },
  {
    id: '8',
    name: 'Aloe & Rooibos Moisturizer',
    description: 'Hydrating daily moisturizer with aloe and rooibos',
    price: 195,
    category: 'skincare',
    image: 'skincare',
    inStock: true,
  },
  {
    id: '9',
    name: 'Baobab Body Butter',
    description: 'Rich body butter infused with baobab oil',
    price: 210,
    category: 'skincare',
    image: 'skincare',
    inStock: true,
  },
  {
    id: '10',
    name: 'Pelargonium Plant',
    description: 'Live pelargonium plant for home cultivation',
    price: 135,
    category: 'plants',
    image: 'plant',
    inStock: true,
  },
  {
    id: '11',
    name: 'Medicinal Herb Kit',
    description: 'Starter kit with 5 indigenous medicinal herbs',
    price: 285,
    category: 'plants',
    image: 'plant',
    inStock: true,
  },
  {
    id: '12',
    name: 'Wild Garlic Seeds',
    description: 'Organic wild garlic seeds for planting',
    price: 55,
    category: 'plants',
    image: 'plant',
    inStock: true,
  },
];

export default function Products({ onAddToCart }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'teas', label: 'Teas' },
    { id: 'tonics', label: 'Tonics' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'plants', label: 'Plants & Seeds' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? mockProducts
    : mockProducts.filter(p => p.category === selectedCategory);

  const getProductGradient = (category: string) => {
    switch (category) {
      case 'teas': return 'from-amber-500 to-orange-600';
      case 'tonics': return 'from-emerald-600 to-teal-700';
      case 'skincare': return 'from-rose-400 to-pink-600';
      case 'plants': return 'from-green-600 to-emerald-700';
      default: return 'from-stone-500 to-stone-700';
    }
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 dark:text-cream-50 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Explore our curated collection of indigenous remedies, organic skincare, and plants for your wellness journey
          </p>
        </div>

        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
          <Filter className="w-5 h-5 text-stone-600 dark:text-stone-400 flex-shrink-0" />
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white dark:bg-stone-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-200 dark:border-stone-700"
            >
              <div className={`h-48 bg-gradient-to-br ${getProductGradient(product.category)} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
                <ShoppingBag className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 dark:text-cream-50 mb-2 group-hover:text-emerald-700 dark:group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-700 dark:text-amber-500">
                    R{product.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
