import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Workshops from '../components/Workshops';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import type { Product } from '../types';

interface AppOutletContext {
  handleAddToCart: (product: Product) => void;
}

export default function HomePage() {
  const { handleAddToCart } = useOutletContext<AppOutletContext>();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero
        onShopClick={() => scrollToSection('products')}
        onLearnClick={() => scrollToSection('about')}
      />
      <About />
      <Products onAddToCart={handleAddToCart} />
      <Workshops />
      <Blog />
      <Contact />
    </>
  );
}
