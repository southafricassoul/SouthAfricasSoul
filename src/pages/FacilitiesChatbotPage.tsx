import React from 'react';
import PageLayout from './PageLayout';

const FacilitiesChatbotPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="flex flex-col h-[calc(100vh-16rem)] min-h-[600px] bg-white dark:bg-stone-800 rounded-2xl shadow-xl overflow-hidden border border-stone-200 dark:border-stone-700">
        <div className="p-6 border-b border-stone-100 dark:border-stone-700 bg-emerald-50/50 dark:bg-stone-900/50">
          <h1 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">Facilities Chatbot</h1>
          <p className="text-stone-600 dark:text-stone-400 mt-1">FM Assist — Your facilities management assistant</p>
        </div>
        <div className="flex-1">
          <iframe
            src="/embed.html"
            className="w-full h-full border-none"
            title="Facilities Chatbot"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default FacilitiesChatbotPage;
