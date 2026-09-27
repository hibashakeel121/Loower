import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function CartConfirmation({ onReturn }) {
  return (
    <div className="w-full max-w-lg mx-auto px-6 py-16 flex flex-col items-center">
      <div className="w-full bg-floower-darkWine rounded-3xl p-10 border border-floower-rose/35 shadow-2xl flex flex-col items-center text-center space-y-6">
        
        {/* Shield / Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-floower-deepWine border border-floower-rose/30 flex items-center justify-center text-floower-amber shadow-md">
          <ShieldCheck className="w-7 h-7" />
        </div>

        {/* Main Heading */}
        <div className="space-y-2">
          <h1 className="font-serif text-3xl text-floower-cream tracking-wide">
            ADDED TO VASE
          </h1>
          <p className="text-floower-amber text-xs uppercase tracking-widest font-medium">
            Order Confirmed
          </p>
        </div>

        {/* Descriptive Text */}
        <p className="text-floower-cream/80 text-sm leading-relaxed max-w-sm">
          Thanks for your purchase. Your magical bouquet is arranged with love.
        </p>

        {/* Sub-quote */}
        <div className="pt-2 pb-2 border-t border-b border-floower-rose/20 w-full">
          <p className="text-floower-cream/60 text-xs italic">
            “A lovely bouquet, for a great start”
          </p>
        </div>

        {/* Return Button */}
        <button
          onClick={onReturn}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-floower-deepWine border border-floower-rose/30 text-floower-cream hover:border-floower-amber transition-all duration-300 shadow-md text-sm font-medium group"
        >
          <Sparkles className="w-4 h-4 text-floower-amber group-hover:scale-110 transition-transform" />
          <span>Back to Loower</span>
        </button>

      </div>
    </div>
  );
}