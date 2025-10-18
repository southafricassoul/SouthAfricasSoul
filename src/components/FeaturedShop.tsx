import { Leaf, Droplets, Package, BookOpen } from 'lucide-react';

interface FeaturedShopProps {
  onNavigate: (section: string) => void;
}

export default function FeaturedShop({ onNavigate }: FeaturedShopProps) {
  const categories = [
    {
      name: 'Herbal Powders & Teas',
      description: 'Pure, organic herbal blends',
      icon: Leaf,
      section: 'shop-powders-teas',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Essential Oils',
      description: 'Premium therapeutic oils',
      icon: Droplets,
      section: 'shop-oils',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'DIY Kits',
      description: 'Everything to start your herbal journey',
      icon: Package,
      section: 'shop-kits',
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Digital Guides',
      description: 'Comprehensive herbal knowledge',
      icon: BookOpen,
      section: 'shop-ebooks',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <section id="featured-shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Quality herbal products sourced from South African traditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.section}
              onClick={() => onNavigate(category.section)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/50 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <category.icon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-cream-100">{category.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('shop-powders-teas')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
}
