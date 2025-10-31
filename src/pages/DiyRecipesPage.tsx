import PageLayout from './PageLayout';

const DiyRecipesPage = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">DIY & Recipes</h1>
      <p className="mt-4 text-lg text-stone-700">
        Find recipes and tutorials for making your own herbal remedies.
      </p>
    </PageLayout>
  );
};
import React from 'react';

const DiyRecipesPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">DIY & Recipes</h1>
    <p>This is the page for DIY & Recipes.</p>
  </div>
);

export default DiyRecipesPage;
