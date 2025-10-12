import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      />

      <main>
        <Hero
          onShopClick={() => scrollToSection('products')}
          onLearnClick={() => scrollToSection('about')}
        />
        <About />
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
