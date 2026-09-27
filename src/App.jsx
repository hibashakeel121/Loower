

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { MapPin, X } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('New York, NY (Default)');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const availableLocations = [
    'Manhattan Boutique, NY',
    'Brooklyn Botanical Hub, NY',
    'Beverly Hills Studio, CA',
    'Downtown Floral Atelier, IL'
  ];

  // Function to add items or increase quantity if they already exist
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // Calculate total badge count for the navbar bag icon
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-floower-deepWine text-floower-cream flex flex-col font-serif selection:bg-floower-rose selection:text-floower-cream relative">
        
        {/* Navigation Bar */}
        <Navbar 
          cartCount={totalCartCount} 
          onOpenLocation={() => setIsLocationModalOpen(true)} 
        />

        {/* Location Indicator Bar */}
        <div className="bg-floower-darkWine/40 border-b border-floower-rose/10 py-1.5 px-6 text-xs flex items-center justify-center gap-2 text-floower-cream/75">
          <MapPin className="w-3.5 h-3.5 text-floower-amber" />
          <span>Delivery Hub: <strong className="text-floower-cream">{currentLocation}</strong></span>
        </div>

        {/* Main Routed Content */}
        <main className="grow">
          <AppRoutes 
            cart={cart} 
            addToCart={addToCart} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart} 
            clearCart={clearCart} 
          />
        </main>

        {/* Location Selector Modal */}
        {isLocationModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-floower-darkWine border border-floower-rose/30 w-full max-w-md p-6 rounded-3xl shadow-2xl relative space-y-4">
              <button 
                onClick={() => setIsLocationModalOpen(false)}
                className="absolute top-4 right-4 text-floower-cream/60 hover:text-floower-cream"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-serif text-floower-cream">Select Delivery Location</h3>
              <p className="text-xs text-floower-cream/70">Choose your nearest studio hub to manage regional delivery.</p>

              <div className="space-y-2 pt-2">
                {availableLocations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentLocation(loc);
                      setIsLocationModalOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition text-sm flex items-center justify-between ${
                      currentLocation === loc 
                        ? 'bg-floower-cream text-floower-deepWine border-floower-cream font-medium' 
                        : 'bg-floower-deepWine text-floower-cream/90 border-floower-rose/20 hover:border-floower-amber'
                    }`}
                  >
                    <span>{loc}</span>
                    <MapPin className="w-4 h-4 text-floower-amber" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </Router>
  );
}