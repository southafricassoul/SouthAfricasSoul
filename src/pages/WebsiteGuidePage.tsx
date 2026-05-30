import PageLayout from './PageLayout';
import { Home, Info, Mail, MessageSquare, Briefcase } from 'lucide-react';

const WebsiteGuidePage = () => {
  const structure = [
    { url: 'southafricassoul.co.za', page: 'Home/Landing page', desc: 'Your main digital entrance.', icon: <Home className="w-5 h-5 text-emerald-700" /> },
    { url: 'southafricassoul.co.za/about', page: 'About page', desc: 'Our story, mission, and philosophy.', icon: <Info className="w-5 h-5 text-emerald-700" /> },
    { url: 'southafricassoul.co.za/contact', page: 'Contact page', desc: 'Get in touch with us.', icon: <Mail className="w-5 h-5 text-emerald-700" /> },
    { url: 'southafricassoul.co.za/fm-assist', page: 'FM chatbot widget page', desc: 'The dedicated portal for FM Assist.', icon: <MessageSquare className="w-5 h-5 text-emerald-700" /> },
    { url: 'southafricassoul.co.za/services', page: 'Services page', desc: 'What we offer to our community.', icon: <Briefcase className="w-5 h-5 text-emerald-700" /> },
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 dark:text-emerald-50 mb-4">Website Guide</h1>
          <div className="bg-emerald-50 dark:bg-stone-800 p-6 rounded-2xl border-l-4 border-emerald-700">
            <p className="text-lg text-emerald-900 dark:text-emerald-50 font-medium">
              Your domain <span className="font-bold">southafricassoul.co.za</span> is just an address.
              It points to wherever your website is hosted.
            </p>
          </div>
        </header>

        <section className="mb-16 space-y-8">
          <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
            <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-2">
              The Simplest Way to Think About It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-cream-50 dark:bg-stone-900 rounded-xl border border-amber-100 dark:border-amber-900/30">
                <p className="text-sm font-bold text-amber-800 dark:text-amber-500 uppercase tracking-wider mb-2">The Address</p>
                <p className="text-stone-700 dark:text-stone-300">Your <span className="font-bold">domain</span> is the street address.</p>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-stone-900 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                <p className="text-sm font-bold text-emerald-800 dark:text-emerald-500 uppercase tracking-wider mb-2">The Building</p>
                <p className="text-stone-700 dark:text-stone-300">Your <span className="font-bold">hosting</span> (Vercel) is the building.</p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-stone-900 rounded-xl border border-amber-100 dark:border-amber-900/30">
                <p className="text-sm font-bold text-amber-800 dark:text-amber-500 uppercase tracking-wider mb-2">The Rooms</p>
                <p className="text-stone-700 dark:text-stone-300">Each <span className="font-bold">page</span> is a room. You can have as many as you want.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white dark:bg-stone-800 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700">
            <div className="bg-emerald-900 p-4 text-white font-bold px-8">
              Site Structure Overview
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 dark:bg-stone-900 border-b border-stone-100 dark:border-stone-700">
                    <th className="py-4 px-8 text-sm font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider">URL</th>
                    <th className="py-4 px-8 text-sm font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider">What's there</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-700">
                  {structure.map((item, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors">
                      <td className="py-6 px-8">
                        <div className="font-mono text-sm text-emerald-700 dark:text-emerald-400 font-bold">{item.url}</div>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-bold text-stone-800 dark:text-stone-200">{item.page}</div>
                            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{item.desc}</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <footer className="bg-stone-100 dark:bg-stone-800 p-8 rounded-2xl text-center">
          <p className="text-stone-600 dark:text-stone-400 italic">
            "You create each page simply by adding a new file to your project. On Vercel, anything you put in the public folder becomes a page automatically — public/about.html becomes /about."
          </p>
        </footer>
      </div>
    </PageLayout>
  );
};

export default WebsiteGuidePage;
