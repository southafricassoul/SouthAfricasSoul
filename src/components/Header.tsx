import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Leaf className="w-8 h-8 text-emerald-700" />
            <div>
              <h1 className="text-2xl font-bold text-emerald-900">SouthAfrica's Soul</h1>
              <p className="text-xs text-amber-700 italic">Reconnect. Heal. Root Yourself.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('workshops')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">
              Workshops
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">
              Knowledge
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <nav className="flex flex-col p-4 gap-2">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('workshops')} className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors">
              Workshops
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors">
              Knowledge
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
