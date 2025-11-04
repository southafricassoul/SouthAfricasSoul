import { ShoppingCart, Menu, Leaf } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export default function Header({ cartCount, onCartClick, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-24">
          {/* Left Section: Menu Button */}
          <div className="flex justify-start items-center">
            <button
              onClick={onMenuClick}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center Section: Logo and Site Title */}
          {/* Mobile Logo */}
          <div className="flex flex-col items-center sm:hidden cursor-pointer" onClick={() => (window.location.href = '/')}>
            <div className="text-center">
              <h1 className="text-base font-bold text-emerald-900">SouthAfrica's Soul</h1>
              <p className="text-xs text-amber-700 italic">Reconnect. Heal. Root Yourself.</p>
            </div>
          </div>
          {/* Desktop Logo */}
          <div className="hidden sm:flex justify-center">
            <div className="flex items-start gap-2 cursor-pointer" onClick={() => (window.location.href = '/')}>
              <Leaf className="w-8 h-8 text-emerald-700" />
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-2xl font-bold text-emerald-900">SouthAfrica's Soul</h1>
                  <p className="text-xs text-amber-700 italic">Reconnect. Heal. Root Yourself.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Cart Button */}
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
