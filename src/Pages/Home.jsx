import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-floower-darkWine border border-floower-rose/30 text-floower-amber text-sm shadow-md">
            <Sparkles className="w-4 h-4" />
            <span>Bespoke Hand-Tied Bouquets</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-floower-cream leading-tight">
            Bringing Timeless <span className="italic text-floower-rose">Joy</span> Into Every Room
          </h1>

          <p className="text-floower-cream/80 text-lg max-w-xl">
            Transform your living space or brighten your office desk with fresh, aromatic floral bouquets designed to spark daily happiness and warmth.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <Link 
              to="/selections" 
              className="px-8 py-3.5 rounded-full bg-floower-amber text-floower-deepWine font-medium hover:bg-amber-600 transition shadow-xl flex items-center gap-2 group"
            >
              Explore Selections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-floower-rose/20 max-w-lg">
            <div className="flex items-center gap-2 text-xs text-floower-cream/80">
              <ShieldCheck className="w-4 h-4 text-floower-amber shrink-0" />
              <span>100% Fresh Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-floower-cream/80">
              <Clock className="w-4 h-4 text-floower-amber shrink-0" />
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-floower-cream/80">
              <Award className="w-4 h-4 text-floower-amber shrink-0" />
              <span>Artisan Crafted</span>
            </div>
          </div>

        </div>

        {/* Hero Image: Bouquet in living room setting */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="relative rounded-3xl overflow-hidden border border-floower-rose/30 shadow-2xl group">
            <img 
              src="https://i.pinimg.com/736x/a1/bd/55/a1bd55120ca901b27792170fab8b5579.jpg" 
              alt="Luxury Bouquet in Home Setting" 
              className="w-full h-[440px] object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-floower-deepWine/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-floower-darkWine/80 backdrop-blur-md border border-floower-rose/30 flex items-center justify-between">
              <div>
                <p className="text-xs text-floower-amber uppercase tracking-wider">Brought to Your Living Space</p>
                <h4 className="font-serif text-floower-cream text-lg">Elegance That Inspires Joy</h4>
              </div>
              <Heart className="w-5 h-5 text-floower-rose fill-floower-rose" />
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Lifestyle Showcase with context-matched images */}
      <section className="w-full max-w-7xl px-6 py-16 text-center">
        <span className="text-floower-amber text-sm tracking-widest uppercase">Everyday Moments</span>
        <h2 className="text-3xl font-serif text-floower-cream mt-1 mb-10">Styled for Your Home & Workspace</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Living Room */}
          <div className="relative rounded-2xl overflow-hidden h-80 group border border-floower-rose/20">
            <img src="https://i.pinimg.com/736x/9b/6d/97/9b6d973cd392b264eaec662d408261f2.jpg" alt="Living Room Ambiance" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-floower-darkWine/90 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
              <h3 className="font-serif text-xl text-floower-darkwine">Living Room Ambiance</h3>
              <p className="text-xs text-floower-deepwine/70 mt-1">Soft petals that breathe warmth into your gathering spaces.</p>
            </div>
          </div>
          {/* Office Desk */}
          <div className="relative rounded-2xl overflow-hidden h-80 group border border-floower-rose/20">
            <img src="https://i.pinimg.com/736x/66/0d/08/660d08f2c28ac22240b48683276b3c62.jpg" alt="The Inspiring Desk" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-floower-darkWine/90 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
              <h3 className="font-serif text-xl text-floower-darkwine">The Inspiring Desk</h3>
              <p className="text-xs text-floower-deepwine/70 mt-1">Boost creativity and bring a smile to your workday routine.</p>
            </div>
          </div>
          {/* Bedside Table */}
          {/* Bedside Table */}
          <div className="relative rounded-2xl overflow-hidden h-80 group border border-floower-rose/20">
            <img src="https://i.pinimg.com/736x/10/c9/31/10c931f9d94897f37be3284afddd4d98.jpg" alt="Bedside Serenity" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-floower-darkWine/90 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
              <h3 className="font-serif text-xl text-floower-deepwine">Bedside Serenity</h3>
              <p className="text-xs text-floower-deepwine/70 mt-1">Gentle fragrances to welcome your mornings with joy.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}