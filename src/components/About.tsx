import { Heart, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream-50">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-3 sm:mb-4 px-2">Our Story</h2>
          <div className="w-20 sm:w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 px-2">
              Honoring South African Heritage
            </h3>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed px-2">
              SouthAfrica's Soul was born from a deep reverence for the land and the ancient wisdom passed down through generations. We believe in the healing power of indigenous plants and the importance of reconnecting with our roots.
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed px-2">
              Our journey began with a simple mission: to preserve and share the traditional knowledge of South African herbalism, making it accessible to modern seekers of natural wellness. Every product we offer is a testament to the rich botanical heritage of our land.
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed px-2">
              We source our herbs ethically, work directly with local growers, and ensure that every remedy honors both the earth and the traditions it comes from.
            </p>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl mx-2 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-amber-800 flex items-center justify-center">
              <Leaf className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white/20" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow mx-2 sm:mx-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2 sm:mb-3">Natural & Pure</h4>
            <p className="text-sm sm:text-base text-stone-600">
              We use only organic, sustainably harvested indigenous plants, ensuring the highest quality and purity in every product.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow mx-2 sm:mx-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2 sm:mb-3">Made with Love</h4>
            <p className="text-sm sm:text-base text-stone-600">
              Each remedy is crafted with care, honoring traditional methods while meeting modern standards of excellence.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow mx-2 sm:mx-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-700" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2 sm:mb-3">Community First</h4>
            <p className="text-sm sm:text-base text-stone-600">
              We support local growers and herbalists, building a community that values and preserves indigenous knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
