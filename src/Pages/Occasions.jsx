import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, Heart, Sun } from 'lucide-react';

export default function Occasions() {
  const occasionSections = [
    {
      category: "Celebrations & Achievements",
      icon: Sparkles,
      subtitle: "Bright, vibrant arrangements to match high-energy, happy milestones.",
      items: [
        {
          title: "Life Milestones",
          description: "Honoring major achievements like graduations, promotions, purchasing a new home, or retirement.",
          image: "https://i.pinimg.com/736x/52/c7/3d/52c73d9b276c7932ce2ad57bbfc1a550.jpg",
          tag: "Milestones"
        },
        {
          title: "Relationship Landmarks",
          description: "Marking time passed together, such as wedding anniversaries, dating milestones, or vow renewals.",
          image: "https://i.pinimg.com/1200x/2e/e2/7a/2ee27a2cf7f145e89550feac358164e1.jpg",
          tag: "Anniversaries"
        },
        {
          title: "Welcoming New Beginnings",
          description: "Celebrating a new baby, a happy engagement, or welcoming a new neighbor to the area.",
          image: "https://i.pinimg.com/736x/45/b9/b1/45b9b194bf8bf993911839e9b77fd98f.jpg",
          tag: "New Beginnings"
        }
      ]
    },
    {
      category: "Empathy & Comfort",
      icon: Heart,
      subtitle: "Soft, muted, or white tones shown to offer solidarity, quiet respect, and care.",
      items: [
        {
          title: "Grief and Mourning",
          description: "Expressing heartfelt condolences at memorials or sending comforting arrangements to a grieving family.",
          image: "https://i.pinimg.com/736x/f4/ba/97/f4ba973c225100469994851c20630c1d.jpg",
          tag: "Condolences"
        },
        {
          title: "Recovery and Health",
          description: "Wishing someone a smooth recovery after surgery, a long illness, or a tough medical stay.",
          image: "https://i.pinimg.com/1200x/fd/1e/ae/fd1eae4641535c88dff5d0934c0cdf10.jpg",
          tag: "Get Well"
        },
        {
          title: "Reconciliation",
          description: "Serving as a tangible peace offering when making a sincere apology or repairing a bond.",
          image: "https://i.pinimg.com/736x/35/28/79/352879c3d6ffa9179330e34d8df08f47.jpg",
          tag: "Peace Offering"
        }
      ]
    },
    {
      category: "Spontaneous & Everyday Connection",
      icon: Sun,
      subtitle: "Impactful bouquets given without a calendar holiday to maintain personal bonds.",
      items: [
        {
          title: "Gratitude & Thanks",
          description: "Saying a meaningful thank you to a host, a helpful coworker, or a supportive friend.",
          image: "https://i.pinimg.com/1200x/df/13/c9/df13c9a6b7d89562d87129979fa4b676.jpg",
          tag: "Appreciation"
        },
        {
          title: "Thinking of You",
          description: "Bridging the distance to let a loved one know they are on your mind today.",
          image: "https://i.pinimg.com/736x/2d/ba/6a/2dba6a53f5534bd750e4f18f9b374d44.jpg",
          tag: "Just Because"
        },
        {
          title: "Self-Care & Home",
          description: "Buying a fresh bunch for yourself to decorate your space, boost your mood, and bring nature indoors.",
          image: "https://i.pinimg.com/1200x/09/88/90/098890a991844252f6cc15b10f4ef2de.jpg",
          tag: "Self-Care"
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-floower-darkWine border border-floower-rose/30 text-floower-amber text-sm shadow-md mb-4">
          <Calendar className="w-4 h-4" />
          <span>Thoughtful Curation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-floower-cream mt-1 mb-4">
          Curated Collections & <span className="italic text-floower-rose">Occasions</span>
        </h1>
        <p className="text-floower-cream/70 text-base max-w-2xl">
          Flowers serve as a universal language to communicate emotions. Explore bespoke arrangements designed for celebration, emotional support, and everyday connection.
        </p>
      </div>

      {/* Occasion Sections */}
      {occasionSections.map((section, idx) => {
        const SectionIcon = section.icon;
        return (
          <div key={idx} className="space-y-6">
            <div className="border-b border-floower-rose/20 pb-4">
              <div className="flex items-center gap-2 text-floower-amber mb-1">
                <SectionIcon className="w-5 h-5" />
                <h2 className="text-2xl md:text-3xl font-serif text-floower-cream">{section.category}</h2>
              </div>
              <p className="text-floower-cream/70 text-sm">{section.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-floower-darkWine rounded-3xl overflow-hidden border border-floower-rose/30 shadow-xl flex flex-col group"
                >
                  <div className="h-60 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-floower-darkWine via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-floower-deepWine/80 backdrop-blur-md border border-floower-rose/30 text-floower-amber text-xs font-medium uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                    <div>
                      <h3 className="text-xl font-serif text-floower-cream mb-2">{item.title}</h3>
                      <p className="text-floower-cream/75 text-xs leading-relaxed">{item.description}</p>
                    </div>

                    <div>
                      <Link 
                        to="/selections" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-floower-deepWine border border-floower-rose/30 text-floower-cream hover:bg-floower-rose/20 transition shadow-md group/btn text-xs font-medium"
                      >
                        Explore Curation <ArrowRight className="w-3.5 h-3.5 text-floower-amber group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

    </div>
  );
}