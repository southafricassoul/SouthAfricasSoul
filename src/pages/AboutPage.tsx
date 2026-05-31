import React from 'react';
import PageLayout from './PageLayout';

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">About Us</h1>
      <p className="mt-4 text-lg text-stone-700">
        This is the About page. Information about our story, mission, and philosophy will go here.
      </p>
    </PageLayout>
  );
};

export default AboutPage;