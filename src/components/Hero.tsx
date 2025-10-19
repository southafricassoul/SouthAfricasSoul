import { ArrowRight, Leaf } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onLearnClick: () => void;
}

export default function Hero({ onShopClick, onLearnClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-800 pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-amber-500 animate-pulse" />
            <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 absolute top-2 right-0 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-4 sm:mb-6 leading-tight px-2">
          Reconnect with<br />
          <span className="text-amber-400">Your Roots</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-cream-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          At SouthAfrica's Soul, we celebrate the power of our land. Discover herbal remedies, natural wellness, and the magic of reconnecting with our roots.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-8 sm:mb-12">
          <button
            onClick={onShopClick}
            className="group bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl w-full sm:w-auto justify-center"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onLearnClick}
            className="bg-transparent border-2 border-cream-100 hover:bg-white/10 text-cream-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-1 sm:mb-2">100+</h3>
            <p className="text-cream-100 text-sm sm:text-base">Indigenous Remedies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-1 sm:mb-2">Organic</h3>
            <p className="text-cream-100 text-sm sm:text-base">Sustainably Sourced</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-1 sm:mb-2">Heritage</h3>
            <p className="text-cream-100 text-sm sm:text-base">Traditional Knowledge</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
