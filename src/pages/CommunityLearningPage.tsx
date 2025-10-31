import PageLayout from './PageLayout';

const CommunityLearningPage = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-emerald-800">Community & Learning</h1>
      <p className="mt-4 text-lg text-stone-700">
        Join our community forum, watch tutorials, and find out about events.
      </p>
    </PageLayout>
  );
};
import React from 'react';

const CommunityLearningPage: React.FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">Community & Learning</h1>
    <p>This is the page for Community & Learning.</p>
  </div>
);

export default CommunityLearningPage;
