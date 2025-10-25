import { X, ChevronLeft } from 'lucide-react';
import { navigationData, NavigationItem } from '../lib/navigation';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [history, setHistory] = useState<NavigationItem[][]>([navigationData]);

  const currentLevelItems = history[history.length - 1];
  const canGoBack = history.length > 1;

  const handleNextLevel = (items: NavigationItem[]) => {
    setHistory([...history, items]);
  };

  const handleBack = () => {
    setHistory(history.slice(0, -1));
  };

  const handleNavigate = () => {
    onClose();
    // Reset history for next open
    setTimeout(() => setHistory([navigationData]), 300);
  };

  const renderMenuItem = (item: NavigationItem) => (
    <li key={item.name} className="border-b border-stone-200">
      {item.children ? (
        <button
          onClick={() => handleNextLevel(item.children!)}
          className="w-full flex justify-between items-center p-4 text-lg text-stone-800 hover:bg-stone-100 transition-colors"
        >
          {item.name}
          <span>&rarr;</span>
        </button>
      ) : (
        <Link
          to={item.href || '#'}
          onClick={handleNavigate}
          className="block p-4 text-lg text-stone-800 hover:bg-stone-100 transition-colors"
        >
          {item.name}
        </Link>
      )}
    </li>
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-stone-300">
          {canGoBack ? (
            <button onClick={handleBack} className="p-2 text-stone-600 hover:text-black">
              <ChevronLeft className="w-6 h-6" />
            </button>
          ) : (
            <div /> // Placeholder for alignment
          )}
          <h2 className="text-xl font-semibold text-stone-800">Menu</h2>
          <button onClick={onClose} className="p-2 text-stone-600 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-65px)]">
          <ul className="divide-y divide-stone-200">
            {currentLevelItems.map(renderMenuItem)}
          </ul>
        </div>
      </div>
    </>
  );
}
