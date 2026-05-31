import React from 'react';
import PageLayout from './PageLayout';

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">About Us</h1>
      <p className="mt-4 text-lg text-stone-700 leading-relaxed">
        SouthAfrica's Soul is dedicated to reconnecting you with the healing power of our land.
        We honor South African heritage by bringing traditional indigenous knowledge into modern wellness,
        ensuring that every remedy we offer is rooted in authenticity and respect for nature.
      </p>
    </PageLayout>
  );
};

export default AboutPage;