import PageLayout from './PageLayout';

const ShopPage = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">Shop (Marketplace)</h1>
      <p className="mt-4 text-lg text-stone-700">
        Welcome to our shop. This is where you will find all of our products.
      </p>
    </PageLayout>
  );
};
import React from 'react';

const ShopPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">Shop</h1>
    <p>This is the page for Shop.</p>
  </div>
);

export default ShopPage;
