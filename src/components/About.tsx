import { Heart, Leaf, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import sanityClient from '../lib/sanityClient';

interface AboutUsContent {
  title: string;
  content: string;
}

export default function About() {
  const [aboutUsContent, setAboutUsContent] = useState<AboutUsContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "staticPage" && slug.current == "about-us"][0]`
        );
        setAboutUsContent(data);
      } catch {
        setError('Failed to fetch content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="about" className="py-24 bg-cream-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 dark:text-cream-50 mb-4">
            {aboutUsContent?.title || 'Our Story'}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-emerald-900 dark:text-amber-400">
              Honoring South African Heritage
            </h3>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              {aboutUsContent?.content}
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-amber-800 flex items-center justify-center">
              <Leaf className="w-48 h-48 text-white/20" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-stone-800 rounded-lg p-8 shadow-lg border border-emerald-100 dark:border-stone-700 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold text-emerald-900 dark:text-cream-50 mb-3">Natural & Pure</h4>
            <p className="text-stone-600 dark:text-stone-300">
              We use only organic, sustainably harvested indigenous plants, ensuring the highest quality and purity in every product.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-lg p-8 shadow-lg border border-emerald-100 dark:border-stone-700 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-amber-700 dark:text-amber-400" />
            </div>
            <h4 className="text-xl font-bold text-emerald-900 dark:text-cream-50 mb-3">Made with Love</h4>
            <p className="text-stone-600 dark:text-stone-300">
              Each remedy is crafted with care, honoring traditional methods while meeting modern standards of excellence.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-lg p-8 shadow-lg border border-emerald-100 dark:border-stone-700 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold text-emerald-900 dark:text-cream-50 mb-3">Community First</h4>
            <p className="text-stone-600 dark:text-stone-300">
              We support local growers and herbalists, building a community that values and preserves indigenous knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}