import { ShoppingBag, Filter } from 'lucide-react';
import { useEffect, useState } from 'react';
import sanityClient from '../lib/sanityClient';
import type { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

interface SanityCategory {
  _id: string;
  name: string;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<SanityCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productData = await sanityClient.fetch(`*[_type == "product"]{
          "id": _id,
          name,
          description,
          price,
          "category": category->name,
          image,
          inStock
        }`);
        const categoryData = await sanityClient.fetch(`*[_type == "category"]{
          "_id": _id,
          "name": name
        }`);
        setProducts(productData);
        setCategories([{ _id: 'all', name: 'All Products' }, ...categoryData]);
      } catch {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === categories.find(c => c._id === selectedCategory)?.name);

  const getProductGradient = (category: string) => {
    switch (category) {
      case 'Teas':
        return 'from-amber-500 to-orange-600';
      case 'Tonics':
        return 'from-emerald-600 to-teal-700';
      case 'Skincare':
        return 'from-rose-400 to-pink-600';
      case 'Plants & Seeds':
        return 'from-green-600 to-emerald-700';
      default:
        return 'from-stone-500 to-stone-700';
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
              key={cat._id}
              onClick={() => setSelectedCategory(cat._id)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat._id
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-white dark:bg-stone-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-200 dark:border-stone-700"
            >
              <div
                className={`h-48 bg-gradient-to-br ${getProductGradient(
                  product.category
                )} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
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