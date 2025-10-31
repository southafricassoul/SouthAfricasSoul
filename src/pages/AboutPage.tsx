import PageLayout from './PageLayout';

const AboutPage = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">About Us</h1>
      <p className="mt-4 text-lg text-stone-700">
        This is the About page. Information about our story, mission, and philosophy will go here.
      </p>
    </PageLayout>
  );
};
import React from 'react';

const AboutPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">About</h1>
    <p>This is the page for About.</p>
  </div>
);

export default AboutPage;
