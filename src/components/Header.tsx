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
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl md:text-2xl font-bold text-emerald-900 truncate">SouthAfrica's Soul</h1>
              <p className="text-[10px] sm:text-xs text-amber-700 italic hidden xs:block">Reconnect. Heal. Root Yourself.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <button onClick={() => scrollToSection('home')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium text-sm lg:text-base">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium text-sm lg:text-base">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium text-sm lg:text-base">
              Products
            </button>
            <button onClick={() => scrollToSection('workshops')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium text-sm lg:text-base">
              Workshops
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium text-sm lg:text-base">
              Knowledge
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-emerald-700 transition-colors font-medium text-sm lg:text-base">
              Contact
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-2 sm:gap-4">
            <button
              onClick={onCartClick}
              className="relative p-1.5 sm:p-2 text-emerald-700"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-emerald-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <nav className="flex flex-col p-3 sm:p-4 gap-1 sm:gap-2">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 px-3 sm:px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors text-sm sm:text-base">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-3 sm:px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors text-sm sm:text-base">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-left py-2 px-3 sm:px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors text-sm sm:text-base">
              Products
            </button>
            <button onClick={() => scrollToSection('workshops')} className="text-left py-2 px-3 sm:px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors text-sm sm:text-base">
              Workshops
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-left py-2 px-3 sm:px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors text-sm sm:text-base">
              Knowledge
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-3 sm:px-4 text-stone-700 hover:bg-emerald-50 rounded transition-colors text-sm sm:text-base">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
