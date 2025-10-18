import { Search, Leaf } from 'lucide-react';
import { useState } from 'react';

interface PlantLibrarySectionProps {
  onNavigate: (section: string) => void;
}

export default function PlantLibrarySection({ onNavigate }: PlantLibrarySectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const plantParts = [
    { name: 'Leaves', section: 'plants-leaves', color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Roots', section: 'plants-roots', color: 'bg-amber-100 text-amber-800' },
    { name: 'Seeds', section: 'plants-seeds', color: 'bg-stone-100 text-stone-800' },
    { name: 'Bark', section: 'plants-bark', color: 'bg-emerald-200 text-emerald-900' },
    { name: 'Flowers', section: 'plants-flowers', color: 'bg-amber-100 text-amber-900' },
    { name: 'Fruit', section: 'plants-fruit', color: 'bg-emerald-100 text-emerald-900' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('plants-search');
    }
  };

  return (
    <section id="plant-library" className="py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Leaf className="w-16 h-16 text-emerald-700 mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Plant Encyclopedia
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of medicinal plants
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plants by name or benefit..."
                className="w-full px-6 py-4 pl-14 rounded-full text-lg text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-400" />
            </div>
          </form>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">Browse by Plant Part</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {plantParts.map((part) => (
              <button
                key={part.section}
                onClick={() => onNavigate(part.section)}
                className={`${part.color} px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
              >
                {part.name}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('plants-az')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            View A-Z Index
          </button>
        </div>
      </div>
    </section>
  );
}
