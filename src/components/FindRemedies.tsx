import { Heart, Brain, Shield, Sparkles } from 'lucide-react';

interface FindRemediesProps {
  onNavigate: (section: string) => void;
}

export default function FindRemedies({ onNavigate }: FindRemediesProps) {
  const ailments = [
    { name: 'Digestive Health', icon: Heart, section: 'ailment-digestive' },
    { name: 'Sleep Support', icon: Brain, section: 'ailment-sleep' },
    { name: 'Skin Health', icon: Sparkles, section: 'ailment-skin' },
    { name: 'Immunity', icon: Shield, section: 'ailment-immunity' },
  ];

  return (
    <section id="find-remedies" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Find Your Remedy
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover natural healing solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ailments.map((ailment) => (
            <button
              key={ailment.section}
              onClick={() => onNavigate(ailment.section)}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <ailment.icon className="w-12 h-12 text-emerald-700 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-stone-800 group-hover:text-emerald-700 transition-colors">
                {ailment.name}
              </h3>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('remedies-ailment')}
            className="text-emerald-700 hover:text-emerald-800 font-semibold text-lg"
          >
            View All Ailments →
          </button>
        </div>
      </div>
    </section>
  );
}
