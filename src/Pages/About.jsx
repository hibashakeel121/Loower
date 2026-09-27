import React from 'react';
import { Sparkles, Heart, Leaf, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-floower-amber" />,
      title: "Archival Inspiration",
      desc: "Every arrangement is thoughtfully composed to capture the classic, romantic detail found in vintage natural history illustrations."
    },
    {
      icon: <Heart className="w-6 h-6 text-floower-amber" />,
      title: "Artisanal Craftsmanship",
      desc: "Hand-selected and styled by master florists, our collections balance structural line work, rich volume fillers, and stunning focal blooms."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-floower-amber" />,
      title: "Sustainably Sourced",
      desc: "We collaborate exclusively with eco-conscious growers who honor the earth, ensuring each stem retains peak vitality and organic charm."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-floower-darkWine border border-floower-rose/30 text-floower-amber text-sm shadow-md mb-3">
          <Sparkles className="w-4 h-4" />
          <span>Our Philosophy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-floower-cream mt-1 mb-4">About Loower</h1>
        <p className="text-floower-cream/80 text-base max-w-2xl leading-relaxed italic">
          “Like a page turned from a century-old botanical manuscript, our philosophy is rooted in the timeless elegance of nature.”
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-floower-darkWine rounded-3xl p-8 sm:p-12 border border-floower-rose/35 shadow-xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-floower-cream">Rooted in Botanical Poetry</h2>
          <p className="text-floower-cream/70 text-sm leading-relaxed">
            Welcome to Loower, where traditional botanical artistry meets modern floral design. We believe that flowers are more than just arrangements—they are living pieces of art, carrying quiet stories of growth, texture, and natural beauty.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-floower-deepWine border border-floower-rose/30 flex items-center justify-center text-floower-amber">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-floower-cream/60">Active Hub</div>
              <div className="text-sm font-medium text-floower-cream">New York, NY (Default)</div>
            </div>
          </div>
        </div>
        <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-floower-rose/30 shadow-md">
          <img 
            src="https://i.pinimg.com/736x/a9/62/1a/a9621a76d62b0da1eedca1e2e1335917.jpg" 
            alt="Botanical floral arrangement studio" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {values.map((val, idx) => (
          <div key={idx} className="bg-floower-darkWine rounded-3xl p-8 border border-floower-rose/35 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-floower-deepWine border border-floower-rose/30 flex items-center justify-center mb-6 shadow-md">
                {val.icon}
              </div>
              
              {/* Inner boxed border container for the title */}
              <div className="border border-floower-rose/40 rounded-xl p-4 mb-4 text-center bg-floower-deepWine/30">
                <h3 className="font-serif text-lg text-floower-cream">{val.title}</h3>
              </div>

              <p className="text-floower-cream/70 text-xs leading-relaxed text-center">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
