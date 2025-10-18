import { BookOpen, Heart, Leaf, Sparkles } from 'lucide-react';

interface EducationHubProps {
  onNavigate: (section: string) => void;
}

export default function EducationHub({ onNavigate }: EducationHubProps) {
  const topics = [
    {
      title: 'Alternative Medicine',
      description: 'Herbalism, Aromatherapy, Homeopathy, TCM',
      icon: Leaf,
      section: 'edu-alternative',
    },
    {
      title: 'Nutrition & Dietetics',
      description: 'Superfoods, Detox, Gut Health',
      icon: Heart,
      section: 'edu-nutrition',
    },
    {
      title: 'Holistic Wellness',
      description: 'Meditation, Yoga, Energy Healing',
      icon: Sparkles,
      section: 'edu-holistic',
    },
    {
      title: 'African Traditions',
      description: 'Indigenous healing wisdom',
      icon: BookOpen,
      section: 'edu-african',
    },
  ];

  return (
    <section id="education-hub" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BookOpen className="w-16 h-16 text-emerald-700 mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Education Hub
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Learn about traditional healing practices and modern wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <button
              key={topic.section}
              onClick={() => onNavigate(topic.section)}
              className="group bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <topic.icon className="w-12 h-12 text-emerald-700 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-stone-600">
                {topic.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-lg mb-8 text-cream-100">
            Access our comprehensive guides and courses
          </p>
          <button
            onClick={() => onNavigate('edu-alternative')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
}
