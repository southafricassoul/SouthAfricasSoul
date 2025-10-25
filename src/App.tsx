import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import RegionAndTraditionsPage from './pages/RegionAndTraditionsPage';
import GlobalHomeopathyAyurvedaPage from './pages/GlobalHomeopathyAyurvedaPage';
import NaturalIngredientsOilsPage from './pages/NaturalIngredientsOilsPage';
import AromatherapyMassagePage from './pages/AromatherapyMassagePage';
import BenefitsPage from './pages/BenefitsPage';
import DiyRecipesPage from './pages/DiyRecipesPage';
import EducationHubPage from './pages/EducationHubPage';
import NutritionWellnessPage from './pages/NutritionWellnessPage';
import MindSpiritPage from './pages/MindSpiritPage';
import CommunityLearningPage from './pages/CommunityLearningPage';
import type { CartItem, Product } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the new sidebar

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

  useEffect(() => {
    const handlePopState = () => {
      // Any popstate event should close the menu if it's open.
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      // Add a custom state to the history when the menu opens, so the back button works.
      window.history.pushState({ menu: 'open' }, '');
      window.addEventListener('popstate', handlePopState);
    } else {
      // If the menu is closed manually, and our custom state is still in history, go back.
      if (window.history.state?.menu === 'open') {
        window.history.back();
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
      />

      <Sidebar
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
      />

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/region-and-traditions" element={<RegionAndTraditionsPage />} />
        <Route path="/global-homeopathy-ayurveda" element={<GlobalHomeopathyAyurvedaPage />} />
        <Route path="/natural-ingredients-oils" element={<NaturalIngredientsOilsPage />} />
        <Route path="/aromatherapy-massage" element={<AromatherapyMassagePage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/diy-recipes" element={<DiyRecipesPage />} />
        <Route path="/education-hub" element={<EducationHubPage />} />
        <Route path="/nutrition-wellness" element={<NutritionWellnessPage />} />
        <Route path="/mind-spirit" element={<MindSpiritPage />} />
        <Route path="/community-learning" element={<CommunityLearningPage />} />
      </Routes>

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
