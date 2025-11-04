import { ArrowRight, Leaf } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onLearnClick: () => void;
}

export default function Hero({ onShopClick, onLearnClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Leaf className="w-20 h-20 text-amber-500 animate-pulse" />
            <Leaf className="w-12 h-12 text-emerald-400 absolute top-2 right-0 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 leading-tight">
          Reconnect with<br />
          <span className="text-amber-400">Your Roots</span>
        </h1>

        <p className="text-xl sm:text-2xl text-cream-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          At SouthAfrica's Soul, we celebrate the power of our land. Discover herbal remedies, natural wellness, and the magic of reconnecting with our roots.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onShopClick}
            className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onLearnClick}
            className="bg-transparent border-2 border-cream-100 hover:bg-white/10 text-cream-100 px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">100+</h3>
            <p className="text-cream-100">Indigenous Remedies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Organic</h3>
            <p className="text-cream-100">Sustainably Sourced</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Heritage</h3>
            <p className="text-cream-100">Traditional Knowledge</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent dark:from-stone-900" />
    </section>
  );
}
