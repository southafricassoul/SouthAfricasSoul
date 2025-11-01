import React from 'react';
import PageLayout from './PageLayout';

const DiyRecipesPage: React.FC = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">DIY & Recipes</h1>
      <p className="mt-4 text-lg text-stone-700">
        Find recipes and tutorials for making your own herbal remedies.
      </p>
    </PageLayout>
  );
};

export default DiyRecipesPage;