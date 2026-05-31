import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from './PageLayout';
import { navigationData, NavigationItem } from '../lib/navigation';

const SubItemPage: React.FC = () => {
  const location = useLocation();

  // Find the item in navigationData that matches the current path
  const findItemByPath = (items: NavigationItem[], targetPath: string): NavigationItem | null => {
    for (const item of items) {
      if (item.href === targetPath) return item;
      if (item.children) {
        const found = findItemByPath(item.children, targetPath);
        if (found) return found;
      }
    }
    return null;
  };

  const item = findItemByPath(navigationData, location.pathname);

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-emerald-900 dark:text-cream-50 mb-6">
          {item ? item.name.replace(/^[^\w\s]+\s*/, '') : 'Page Not Found'}
        </h1>
        <div className="w-24 h-1 bg-amber-600 rounded-full mb-8" />

        <div className="prose prose-emerald lg:prose-xl dark:prose-invert">
          <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            Welcome to the <strong>{item ? item.name : 'requested'}</strong> section.
            We are currently updating our database with detailed information, remedies, and traditional knowledge for this category.
          </p>
          <p className="mt-4 text-stone-600 dark:text-stone-400">
            Check back soon for curated content from SouthAfrica's Soul.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubItemPage;
