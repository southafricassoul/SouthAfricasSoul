import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Workshops from '../components/Workshops';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import type { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
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
      <Products onAddToCart={onAddToCart} />
      <Workshops />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;