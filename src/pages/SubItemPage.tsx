import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from './PageLayout';
import { navigationData, NavigationItem } from '../lib/navigation';

const SubItemPage: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const findItemByHref = (items: NavigationItem[], href: string): NavigationItem | null => {
    for (const item of items) {
      if (item.href === href) return item;
      if (item.children) {
        const found = findItemByHref(item.children, href);
        if (found) return found;
      }
    }
    return null;
  };

  const item = findItemByHref(navigationData, currentPath);
  const title = item ? item.name : 'Page Not Found';

  return (
    <PageLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 dark:text-emerald-50 mb-6">
          {title}
        </h1>
        <div className="w-20 h-1.5 bg-amber-600 rounded-full mb-8" />
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl border border-emerald-100 dark:border-stone-700">
          <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            Welcome to the <strong>{title}</strong> section of SouthAfrica's Soul.
            We are currently curating the most authentic and effective knowledge and products for this category.
          </p>
          <div className="mt-8 flex items-center gap-4 text-emerald-700 dark:text-emerald-400">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
              <span className="text-xl">🌿</span>
            </div>
            <p className="font-medium italic">More content coming soon...</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubItemPage;
