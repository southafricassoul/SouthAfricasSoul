import PageLayout from './PageLayout';

const FmAssistPage = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl overflow-hidden border border-stone-200 dark:border-stone-700 h-[700px] flex flex-col">
        <div className="bg-emerald-700 p-4 text-white font-bold text-center">
          FM Assist Portal
        </div>
        <div className="flex-1">
          <iframe
            src="/embed.html"
            className="w-full h-full border-none"
            title="FM Assist Chatbot"
          />
        </div>
      </div>
      <div className="mt-8 text-stone-600 dark:text-stone-400 text-center">
        <p>This is the dedicated page for the FM Assist chatbot widget.</p>
      </div>
    </PageLayout>
  );
};

export default FmAssistPage;
