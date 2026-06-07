import { ShoppingCart, Menu, Leaf } from 'lucide-react';
import ThemeSlider from './ThemeSlider';
import Search from './Search';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export default function Header({ cartCount, onCartClick, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 dark:bg-stone-900/95 dark:shadow-stone-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-24 gap-1">
          {/* Left Section: Menu Button */}
          <div className="flex items-center justify-start">
            <button
              onClick={onMenuClick}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 h-6" />
            </button>
          </div>

          {/* Center Section: Logo, Title, and Theme Slider */}
          <div className="flex flex-col items-center min-w-0">
            <div
              className="cursor-pointer"
              onClick={() => (window.location.href = '/')}
            >
              <div className="flex justify-center items-center gap-1 sm:gap-2">
                <Leaf className="w-5 h-5 sm:w-7 h-7 flex-shrink-0 text-emerald-700 dark:text-emerald-400" />
                <div className="flex flex-col items-start min-w-0">
                  <h1 className="text-sm sm:text-2xl font-bold text-emerald-900 dark:text-emerald-50 truncate">
                    SouthAfrica's Soul
                  </h1>
                  <p className="hidden xs:block text-[10px] sm:text-xs text-amber-700 italic dark:text-amber-400 mt-0.5 sm:mt-1 truncate">
                    Reconnect. Heal. Root Yourself.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-1 sm:mt-2 scale-75 sm:scale-100">
              <ThemeSlider />
            </div>
          </div>

          {/* Right Section: Search and Cart Button */}
          <div className="flex items-center justify-end gap-1 sm:gap-4">
            <Search />
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 h-5 rounded-full flex items-center justify-center dark:bg-amber-500 dark:text-stone-900">
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
