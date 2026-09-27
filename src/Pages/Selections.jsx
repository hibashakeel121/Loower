import React, { useState } from 'react';
import { ShoppingBag, Check, Sparkles } from 'lucide-react';

export default function Selections({ addToCart }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [addedId, setAddedId] = useState(null);

  const catalog = [
    // 🌟 1. The Power Focals (High-Value Premium Stars)
    { id: 1, name: "Standard Cut Roses", group: "Power Focals", price: 45, image: "https://i.pinimg.com/736x/e8/32/a5/e832a52a692df141408d55ccdb951827.jpg", desc: "The absolute commercial gold standard; essential for romance and anniversary menus." },
    { id: 2, name: "Garden Roses", group: "Power Focals", price: 55, image: "https://i.pinimg.com/736x/72/cd/1a/72cd1ad983c420651db593926f35d162.jpg", desc: "Multi-petaled, fragrant luxury alternatives to standard roses that cater to higher-end shoppers." },
    { id: 3, name: "Peonies", group: "Power Focals", price: 70, image: "https://i.pinimg.com/736x/b7/9d/3a/b79d3aed30275ff5ed0e94c399fd873e.jpg", desc: "Fluffy, ultra-premium spring favorites that draw massive online traffic during peak season." },
    { id: 4, name: "Hydrangeas", group: "Power Focals", price: 50, image: "https://i.pinimg.com/1200x/c8/72/53/c87253410e3405d181ed882401fdcd05.jpg", desc: "Massive bloom heads that fill large design gaps instantly, creating immediate perceived value." },
    { id: 5, name: "Dahlias", group: "Power Focals", price: 60, image: "https://i.pinimg.com/736x/ce/5d/b9/ce5db90791111e3da4be6abc4d247643.jpg", desc: "Striking, geometrically perfect focal points that thrive in late-summer and autumn catalogs." },
    { id: 6, name: "Anemones", group: "Power Focals", price: 52, image: "https://i.pinimg.com/1200x/d3/34/e3/d334e3febddde935da10a7055c8e1b67.jpg", desc: "Striking, dark-centered blooms that add a modern, fashion-forward flair to editorial bouquets." },
    { id: 7, name: "Phalaenopsis Orchids", group: "Power Focals", price: 85, image: "https://i.pinimg.com/736x/5e/82/cb/5e82cb2e3d1cbf27e945f38348d184e8.jpg", desc: "Elegant and architectural; excellent for contemporary statement arrangements or high-end corporate menus." },
    
    // 🌿 2. The Core Volume Fillers (Texture & Color Density)
    { id: 8, name: "Lisianthus", group: "Volume Fillers", price: 40, image: "https://i.pinimg.com/1200x/83/8a/39/838a390a6334161845f843e3d457e856.jpg", desc: "Delicately ruffled heads that look like soft roses but offer multiple blooms per stem." },
    { id: 9, name: "Spray Roses", group: "Volume Fillers", price: 38, image: "https://i.pinimg.com/1200x/98/7d/02/987d02e77f30aedd2e2e7529b915a4c0.jpg", desc: "Miniature rose clusters that add depth, intricate layers, and detailed texturing." },
    { id: 10, name: "Carnations", group: "Volume Fillers", price: 25, image: "https://i.pinimg.com/736x/9a/54/db/9a54db79b19b4bc316bd5990a39e943a.jpg", desc: "Incredibly durable, cost-effective blooms with ruffled heads and a massive color palette." },
    { id: 11, name: "Gerbera Daisies", group: "Volume Fillers", price: 30, image: "https://i.pinimg.com/736x/97/16/37/971637c7eed435e44ef778860dad02ae.jpg", desc: "Flat-profile, cheerful blooms that provide a bold, flat surface pop of clean color." },
    { id: 12, name: "Alstroemeria", group: "Volume Fillers", price: 28, image: "https://i.pinimg.com/1200x/f0/f4/a1/f0f4a12f6b472fe63e43663da9164b63.jpg", desc: "Extremely long-lasting trumpet clusters that provide reliable budget density." },
    { id: 13, name: "Chrysanthemums (Mums)", group: "Volume Fillers", price: 26, image: "https://i.pinimg.com/736x/0d/2a/6d/0d2a6dacb9a8d6fc6754316474892572.jpg", desc: "A commercial workhorse available in pompon, spider, or cushion varieties." },
    { id: 14, name: "Ranunculus", group: "Volume Fillers", price: 48, image: "https://i.pinimg.com/736x/65/4d/70/654d7055ca062cbe51a5d9f020bf68b5.jpg", desc: "Intricate, paper-thin layered whorls highly desired for high-fashion wedding and gift work." },
    { id: 15, name: "Tulips", group: "Volume Fillers", price: 32, image: "https://i.pinimg.com/736x/b6/92/b2/b692b2f8dc31461cfe6125c7dfec7928.jpg", desc: "Sleek, iconic spring bulbs that work beautifully in single-variety clean bunches." },
    { id: 16, name: "Oriental Lilies", group: "Volume Fillers", price: 46, image: "https://i.pinimg.com/736x/a0/c9/cf/a0c9cf739547f84ecb63b7aac762b191.jpg", desc: "Large, highly aromatic star-shaped blossoms that signify premium sympathy or formal arrangements." },
    { id: 17, name: "Calla Lilies", group: "Volume Fillers", price: 50, image: "https://i.pinimg.com/736x/69/a9/ba/69a9baf2466802a9263b27b1158b11b6.jpg", desc: "Sleek, trumpet-shaped modern classics ideal for clean, trumpet-line floral presentations." },
 
    // 🌾 3. Accent, Architecture & Line Flowers (Shape & Height)
    { id: 18, name: "Snapdragons", group: "Line Flowers", price: 35, image: "https://i.pinimg.com/736x/38/aa/0d/38aa0dd48d0b8f6449a5413dd5573f24.jpg", desc: "Tall, vertical spires with snapping florets that establish vertical height guidelines." },
    { id: 19, name: "Delphinium", group: "Line Flowers", price: 42, image: "https://i.pinimg.com/736x/18/ae/4a/18ae4ae0d1b77db966a11a98f3cc4211.jpg", desc: "Striking, tall spikes that introduce rare, dramatic blue tones to standard garden designs." },
    { id: 20, name: "Stock (Matthiola)", group: "Line Flowers", price: 36, image: "https://i.pinimg.com/736x/1c/7a/74/1c7a7451d3b1b0aa36359c81e182eac0.jpg", desc: "Heavily clustered, highly fragrant spikes that add deep visual volume and luxury scent." },
    { id: 21, name: "Larkspur", group: "Line Flowers", price: 34, image: "https://i.pinimg.com/1200x/55/03/f3/5503f35b41b3d4ff21c78532930bbf45.jpg", desc: "An elegant, airy line stem that lends a rustic, cottage-meadow movement to loose bouquets." },
    { id: 22, name: "Baby's Breath (Gypsophila)", group: "Line Flowers", price: 24, image: "https://i.pinimg.com/736x/88/46/ac/8846ac0d4706f186d629427b78282ff3.jpg", desc: "Delicate clouds of tiny white flowers used for classic lace volume or modern cloud clouds." },
    { id: 23, name: "Limonium (Statice)", group: "Line Flowers", price: 25, image: "https://i.pinimg.com/1200x/a7/32/76/a73276299e17b28d7276d1b65eafe4e8.jpg", desc: "Rigid, highly paper-textured filler clusters that practically never wilt." },
    { id: 24, name: "Celosia", group: "Line Flowers", price: 38, image: "https://i.pinimg.com/736x/1d/5a/2b/1d5a2bffd86604bda16dc07c5fbd9b78.jpg", desc: "Fascinating, velvety brain-like or plumed textures that elevate bohemian design palettes." },
    { id: 25, name: "Eucalyptus Greens", group: "Line Flowers", price: 22, image: "https://i.pinimg.com/736x/a5/5e/1e/a55e1e58b0c47f3a465a940ff2a9be12.jpg", desc: "The top commercial foliage variety required to give bouquets a luxurious, draped framework." },

    // Romance & Anniversary Collection
    { id: 26, name: "The Parisian Romance", group: "Romance", price: 68, image: "https://i.pinimg.com/736x/2d/31/06/2d3106c428d08e3110bdef6b7c955c6d.jpg", desc: "Deep red Explorer roses, pink garden roses, and white waxflower." },
    { id: 27, name: "The Velvet Heartbeat", group: "Romance", price: 82, image: "https://i.pinimg.com/736x/1e/f6/79/1ef679a63a983c9f3d1d7777ad47fb4d.jpg", desc: "Dark maroon dahlias, red spray roses, and burgundy foliage." },
    { id: 28, name: "The Sweet Devotion", group: "Romance", price: 75, image: "https://i.pinimg.com/1200x/77/44/bc/7744bca986d4854413e9a19c673ac037.jpg", desc: "Pink Mondial roses, white lisianthus, and silver dollar eucalyptus." },
    { id: 29, name: "The Crimson Peony Symphony", group: "Romance", price: 95, image: "https://i.pinimg.com/1200x/90/b4/47/90b447d1efc2dd63f20def0052147dd4.jpg", desc: "Fluffy premium peonies, standard roses, and delicate ranunculus." },

    // Whimsical & Bright Birthday Collection
    { id: 30, name: "The Tuscan Meadow", group: "Whimsical", price: 65, image: "https://i.pinimg.com/1200x/36/9b/96/369b96b1b8d9d8bc242112fd427e830a.jpg", desc: "Sunflowers, yellow gerbera daisies, chamomile, and loose eucalyptus." },
    { id: 31, name: "The Cotton Candy Dream", group: "Whimsical", price: 70, image: "https://i.pinimg.com/736x/ea/36/a8/ea36a8e859a809ab52085e2699d21ad6.jpg", desc: "Pink peonies, light purple carnations, and voluminous baby's breath." },
    { id: 32, name: "The Sunshine Splash", group: "Whimsical", price: 72, image: "https://i.pinimg.com/736x/b8/13/79/b81379b723578b62da912fa5ae30f078.jpg", desc: "Orange spray roses, purple delphiniums, and yellow tulips." },
    { id: 33, name: "The Spring Anemone Burst", group: "Whimsical", price: 78, image: "https://i.pinimg.com/1200x/46/d2/18/46d218e9af734f88dee84d226d7036d3.jpg", desc: "Striking dark-centered anemones, stock matthiola, and spring tulips." },

    // Modern Interior & Luxury Collection
    { id: 34, name: "The Cream & Cashmere", group: "Modern Luxury", price: 85, image: "https://i.pinimg.com/736x/4b/af/01/4baf01a3289b599a91ccfeb6afece951.jpg", desc: "White hydrangeas, cream Vendela roses, and white ranunculus." },
    { id: 35, name: "The Emerald Elegance", group: "Modern Luxury", price: 90, image: "https://i.pinimg.com/736x/b7/56/22/b7562244575cb9037485ea1d2c84b856.jpg", desc: "White calla lilies, green hypericum, and oversized monstera leaves." },
    { id: 36, name: "The Bohemian Breeze", group: "Modern Luxury", price: 78, image: "https://i.pinimg.com/736x/53/54/a0/5354a03410aa7f119e19f41ea765688e.jpg", desc: "Cream spray roses, dried pampas grass, and white limonium." },
    { id: 37, name: "The Orchid Statement", group: "Modern Luxury", price: 110, image: "https://i.pinimg.com/1200x/c1/4d/f0/c14df0f4ef2d0c617b0fa22b78380b78.jpg", desc: "Elegant architectural phalaenopsis orchids and silver dollar eucalyptus." }
  ];

  const filters = ['All', 'Romance', 'Whimsical', 'Modern Luxury', 'Power Focals', 'Volume Fillers', 'Line Flowers'];

  const filteredItems = selectedFilter === 'All' 
    ? catalog 
    : catalog.filter(item => item.group === selectedFilter);

  const handleAdd = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-floower-darkWine border border-floower-rose/30 text-floower-amber text-sm shadow-md mb-3">
          <Sparkles className="w-4 h-4" />
          <span>Curated Collections</span>
        </div>
        <h1 className="text-4xl font-serif text-floower-cream mt-1 mb-3">Our Signature Catalog</h1>
        <p className="text-floower-cream/70 text-sm max-w-xl mb-8">
          Explore our signature thematic arrangements and individual commercial stems categorized by style and function.
        </p>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((fil) => (
            <button
              key={fil}
              onClick={() => setSelectedFilter(fil)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 border ${
                selectedFilter === fil
                  ? 'bg-floower-cream text-floower-deepWine border-floower-cream font-medium shadow-md'
                  : 'bg-floower-darkWine/60 text-floower-cream/80 border-floower-rose/30 hover:border-floower-amber'
              }`}
            >
              {fil}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-floower-darkWine rounded-3xl overflow-hidden border border-floower-rose/35 shadow-xl flex flex-col group">
            <div className="h-72 overflow-hidden relative">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-floower-deepWine/80 backdrop-blur-md border border-floower-rose/30 text-floower-amber text-xs font-medium uppercase tracking-wider">
                {item.group}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl text-floower-cream">{item.name}</h3>
                <p className="text-floower-cream/70 text-xs mt-2 leading-relaxed">{item.desc}</p>
                <div className="text-floower-amber font-semibold text-lg mt-3">${item.price}</div>
              </div>
              
              <button 
                onClick={() => handleAdd(item)}
                className={`w-full py-3 rounded-xl border transition flex items-center justify-center gap-2 ${
                  addedId === item.id 
                    ? 'bg-emerald-800 text-white border-emerald-600' 
                    : 'bg-floower-deepWine border-floower-rose/30 text-floower-cream hover:bg-floower-rose/20 shadow-md text-sm font-medium'
                }`}
              >
                {addedId === item.id ? (
                  <> <Check className="w-4 h-4 text-white" /> Added to Bag </>
                ) : (
                  <> <ShoppingBag className="w-4 h-4 text-floower-amber" /> Add to Bag </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}