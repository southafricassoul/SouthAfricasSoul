import { ShoppingCart, Menu, Leaf } from 'lucide-react';
import ThemeSlider from './ThemeSlider';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export default function Header({ cartCount, onCartClick, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 dark:bg-stone-900/95 dark:shadow-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-24">
          {/* Left Section: Menu Button */}
          <div className="flex justify-start items-center">
            <button
              onClick={onMenuClick}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center Section: Logo, Title, and Theme Slider */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center cursor-pointer" onClick={() => (window.location.href = '/')}>
              <div className="flex items-center gap-2">
                <Leaf className="w-7 h-7 text-emerald-700 dark:text-emerald-400" />
                <h1 className="text-xl sm:text-2xl font-bold text-emerald-900 dark:text-emerald-50">SouthAfrica's Soul</h1>
              </div>
              <p className="text-xs text-amber-700 italic dark:text-amber-400 mt-1">Reconnect. Heal. Root Yourself.</p>
              <div className="mt-2">
                <ThemeSlider />
              </div>
            </div>
          </div>

          {/* Right Section: Cart Button */}
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center dark:bg-amber-500 dark:text-stone-900">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
