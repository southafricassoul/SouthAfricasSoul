import { BookOpen, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Healing Powers of Rooibos',
    excerpt: 'Discover why rooibos tea has been a staple in South African wellness for centuries and its modern health benefits.',
    content: '',
    image: 'blog1',
    date: '2025-10-01',
    category: 'Herbs',
  },
  {
    id: '2',
    title: 'Growing Your Own Medicinal Garden',
    excerpt: 'A complete guide to starting your home apothecary with indigenous South African plants.',
    content: '',
    image: 'blog2',
    date: '2025-09-28',
    category: 'Gardening',
  },
  {
    id: '3',
    title: 'Traditional Zulu Healing Practices',
    excerpt: 'Exploring the ancient wisdom of traditional healers and their connection to the land.',
    content: '',
    image: 'blog3',
    date: '2025-09-15',
    category: 'Culture',
  },
  {
    id: '4',
    title: 'African Potato: Nature\'s Immune Booster',
    excerpt: 'Understanding the powerful immune-supporting properties of this indigenous superfood.',
    content: '',
    image: 'blog4',
    date: '2025-09-10',
    category: 'Wellness',
  },
];

export default function Blog() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="blog" className="py-24 bg-cream-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 dark:text-cream-50 mb-4">Knowledge & Stories</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Explore articles about indigenous herbs, traditional recipes, plant care, and wellness wisdom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mockPosts.map(post => (
            <article
              key={post.id}
              className="bg-white dark:bg-stone-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-stone-200 dark:border-stone-700"
            >
              <div className="h-56 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-white/70 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm text-stone-500 dark:text-stone-400 mb-3">{formatDate(post.date)}</div>
                <h3 className="text-2xl font-bold text-emerald-900 dark:text-cream-50 mb-3 group-hover:text-emerald-700 dark:group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 dark:text-amber-500 dark:hover:text-amber-400 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
