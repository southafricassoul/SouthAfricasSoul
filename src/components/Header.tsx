import { ShoppingCart, Menu, Leaf } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void; // This will be used to toggle the sidebar
}

export default function Header({ cartCount, onCartClick, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Site Title */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => (window.location.href = '/')}>
            <Leaf className="w-8 h-8 text-emerald-700" />
            <div>
              <h1 className="text-2xl font-bold text-emerald-900">SouthAfrica's Soul</h1>
              <p className="text-xs text-amber-700 italic">Reconnect. Heal. Root Yourself.</p>
            </div>
          </div>

          {/* Right-side controls */}
          <div className="flex items-center gap-2">
            {/* Cart Button */}
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

            {/* Menu Button (for sidebar) */}
            <button
              onClick={onMenuClick}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
