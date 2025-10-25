import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface DropdownMenuProps {
  items: Record<string, MenuItem>;
  onNavigate: () => void;
}

const DropdownMenuItem: React.FC<{ item: MenuItem; onNavigate: () => void; level?: number }> = ({ item, onNavigate, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLLIElement>(null);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current && !node.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    onNavigate();
    setIsOpen(false);
  };

  const menuPositionClass = level === 0
    ? "md:absolute md:left-0 md:top-full" // First level dropdown
    : "md:absolute md:left-full md:top-0"; // Nested dropdowns

  return (
    <li ref={node} className="relative">
      <div className="flex items-center justify-between group">
        {item.href ? (
          <Link
            to={item.href}
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 rounded-md transition-colors w-full text-left"
          >
            {item.label}
          </Link>
        ) : (
          <span className="px-3 py-2 text-sm text-stone-700 w-full text-left cursor-default">
            {item.label}
          </span>
        )}
        {hasChildren && (
          <button
            onClick={handleToggle}
            className="p-1 text-stone-500 hover:bg-stone-100 rounded-md"
            data-testid={`menu-button-${item.label}`}
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <ul className={`mt-1 w-56 bg-white shadow-lg rounded-md border border-stone-200 z-10 ${level === 0 ? '' : 'ml-1'}`}>
          {item.children?.map((child) => (
            <DropdownMenuItem key={child.label} item={child} onNavigate={onNavigate} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onNavigate }) => {
  return (
    <nav className="hidden md:flex items-center gap-1">
       {Object.values(items).map((item) => (
         <DropdownMenuItem key={item.label} item={item} onNavigate={onNavigate} />
       ))}
    </nav>
  );
};

export default DropdownMenu;
