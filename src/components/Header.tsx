import { ShoppingCart, Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuOptions } from '../lib/menuOptions';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const MenuItem = ({ item, mobile, closeMenu, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  const handleMobileClick = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      closeMenu();
    }
  };

  const handleMouseEnter = () => {
    if (!mobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!mobile) setIsOpen(false);
  };

  const desktopSubMenuPosition = level === 0 ? 'left-0 mt-1' : 'left-full top-0 ml-1';

  const commonClasses = `flex items-center justify-between w-full p-2 rounded-md text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
    item.disabled ? 'cursor-not-allowed opacity-50' : ''
  }`;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasDropdown ? (
        <button
          onClick={mobile ? handleMobileClick : undefined}
          className={commonClasses}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="truncate">{item.label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      ) : (
        <Link
          to={item.href || '#'}
          onClick={mobile ? handleMobileClick : undefined}
          className={commonClasses}
          aria-disabled={item.disabled}
        >
          <span className="truncate">{item.label}</span>
        </Link>
      )}
      {hasDropdown && isOpen && (
        <div className={mobile ? 'pl-4' : `absolute ${desktopSubMenuPosition} w-64 bg-white border border-stone-200 rounded-md shadow-lg z-20`}>
          <div className="flex flex-col p-1">
            {item.dropdown.map(subItem => (
              <MenuItem key={subItem.label} item={subItem} mobile={mobile} closeMenu={closeMenu} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MenuComponent = ({ mobile, closeMenu }) => (
  <nav aria-label="Main navigation" data-testid="main-nav" className={`flex ${mobile ? 'flex-col gap-2 p-4' : 'items-center gap-2'}`}>
    {menuOptions.map(item => (
      <MenuItem key={item.label} item={item} mobile={mobile} closeMenu={closeMenu} />
    ))}
  </nav>
);

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <Leaf className="w-8 h-8 text-emerald-700" />
            <div>
              <h1 className="text-2xl font-bold text-emerald-900">SouthAfrica's Soul</h1>
              <p className="text-xs text-amber-700 italic">Reconnect. Heal. Root Yourself.</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <MenuComponent mobile={false} closeMenu={closeMobileMenu} />
            <button
              onClick={onCartClick}
              className="relative p-2 text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors ml-4"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

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
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 overflow-y-auto">
          <MenuComponent mobile={true} closeMenu={closeMobileMenu} />
        </div>
      )}
    </header>
  );
}
