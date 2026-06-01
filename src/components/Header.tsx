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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center h-28 sm:h-24">
          {/* Left Section: Menu Button */}
          <div className="absolute left-0 sm:left-4 flex items-center">
            <button
              onClick={onMenuClick}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors dark:text-emerald-400 dark:hover:bg-stone-800"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center Section: Logo, Title, and Theme Slider */}
          <div className="flex flex-col items-center px-12 sm:px-0 text-center">
            <div
              className="cursor-pointer"
              onClick={() => (window.location.href = '/')}
            >
              <div className="flex justify-center items-center gap-2">
                <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg sm:text-2xl font-bold text-emerald-900 dark:text-emerald-50 whitespace-nowrap">
                    SouthAfrica's Soul
                  </h1>
                  <p className="text-[10px] sm:text-xs text-amber-700 italic dark:text-amber-400 mt-0.5 sm:mt-1">
                    Reconnect. Heal. Root Yourself.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-1 sm:mt-2">
              <ThemeSlider />
            </div>
          </div>

          {/* Right Section: Search and Cart Button */}
          <div className="absolute right-0 sm:right-4 flex items-center gap-1 sm:gap-4">
            <Search />
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
