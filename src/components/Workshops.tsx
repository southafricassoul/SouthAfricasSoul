import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import type { Workshop } from '../types';

const mockWorkshops: Workshop[] = [
  {
    id: '1',
    title: 'Introduction to Herbalism',
    description: 'Learn the basics of identifying, harvesting, and preparing indigenous medicinal plants.',
    date: '2025-11-15',
    duration: '4 hours',
    price: 450,
    spots: 12,
    image: 'workshop1',
  },
  {
    id: '2',
    title: 'Traditional Tea Blending',
    description: 'Master the art of creating healing tea blends using South African herbs and botanicals.',
    date: '2025-11-22',
    duration: '3 hours',
    price: 380,
    spots: 15,
    image: 'workshop2',
  },
  {
    id: '3',
    title: 'Plant Medicine & Wellness',
    description: 'Deep dive into the therapeutic properties of indigenous plants and their applications.',
    date: '2025-12-06',
    duration: '6 hours',
    price: 650,
    spots: 10,
    image: 'workshop3',
  },
  {
    id: '4',
    title: 'Home Herbal Garden',
    description: 'Everything you need to know about growing and maintaining medicinal plants at home.',
    date: '2025-12-13',
    duration: '3 hours',
    price: 400,
    spots: 20,
    image: 'workshop4',
  },
];

export default function Workshops() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="workshops" className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">Workshops & Experiences</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Join us for hands-on learning experiences that connect you with traditional healing wisdom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockWorkshops.map(workshop => (
            <div
              key={workshop.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-emerald-100"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-24 h-24 text-white/60" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                  {workshop.title}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {workshop.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-stone-700">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span>{formatDate(workshop.date)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-700">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-700">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span>{workshop.spots} spots available</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-700">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span>Cape Town, South Africa</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                  <span className="text-3xl font-bold text-amber-700">
                    R{workshop.price}
                  </span>
                  <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Custom Group Workshops Available
          </h3>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            Looking for a private workshop for your group or organization? We can create custom experiences tailored to your needs.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Inquire About Custom Workshops
          </button>
        </div>
      </div>
    </section>
  );
}
