import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FindRemedies from './components/FindRemedies';
import FeaturedShop from './components/FeaturedShop';
import PlantLibrarySection from './components/PlantLibrarySection';
import EducationHub from './components/EducationHub';
import About from './components/About';
import Products from './components/Products';
import Workshops from './components/Workshops';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import type { CartItem, Product } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);

    const sectionMap: Record<string, string> = {
      'home': 'home',
      'shop-powders-teas': 'products',
      'shop-oils': 'products',
      'shop-kits': 'products',
      'shop-beauty': 'products',
      'shop-ebooks': 'products',
      'shop-gifts': 'products',
      'community-events': 'workshops',
      'blog-african-healing': 'blog',
      'blog-folklore': 'blog',
      'blog-seasonal': 'blog',
      'contact-form': 'contact',
      'contact-consultation': 'contact',
    };

    const targetId = sectionMap[section] || 'home';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    handleNavigate('find-remedies');
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-50">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <Hero
          onShopClick={() => handleNavigate('shop-powders-teas')}
          onSearch={handleSearch}
        />
        <FindRemedies onNavigate={handleNavigate} />
        <FeaturedShop onNavigate={handleNavigate} />
        <About />
        <PlantLibrarySection onNavigate={handleNavigate} />
        <EducationHub onNavigate={handleNavigate} />
        <Products onAddToCart={handleAddToCart} />
        <Workshops />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
    </div>
  );
}

export default App;
