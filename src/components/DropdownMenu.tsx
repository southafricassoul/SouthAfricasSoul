import { NavItem } from '@/lib/navigation';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface DropdownMenuProps {
  item: NavItem;
  level?: number;
}

export default function DropdownMenu({ item, level = 0 }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (item.href) {
      e.preventDefault();
      scrollToSection(item.href);
      setIsOpen(false);
    } else if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={handleClick}
        className="flex items-center gap-1 text-stone-700 hover:text-emerald-700 transition-colors font-medium w-full text-left"
      >
        {item.label}
        {hasChildren && <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && hasChildren && (
        <div
          className={`absolute ${
            level === 0 ? 'left-0' : 'left-full top-0'
          } mt-2 bg-white border border-stone-200 rounded-md shadow-lg z-10`}
        >
          <div className="py-1">
            {item.children?.map((child) => (
              <DropdownMenu key={child.label} item={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
