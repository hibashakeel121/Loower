import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, Info, ShoppingBag, Calendar, Layers, MapPin, Flower, User } from 'lucide-react';

export default function Navbar({ cartCount, onOpenLocation }) {
  const navClass = ({ isActive }) =>
    `p-2.5 rounded-full transition-all duration-200 ${
      isActive 
        ? 'bg-floower-cream text-floower-deepWine shadow-md' 
        : 'text-floower-cream/70 hover:text-floower-cream hover:bg-floower-deepWine/50'
    }`;

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-floower-deepWine text-floower-cream select-none sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      
      {/* Left: Brand Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 rounded-full bg-floower-darkWine border border-floower-rose/40 flex items-center justify-center text-floower-cream shadow-inner group-hover:scale-105 transition-transform">
          <Flower className="w-5 h-5 text-floower-cream" />
        </div>
        <span className="text-2xl tracking-wide font-medium flex items-center">
          <span className="text-floower-cream font-serif">l</span>
          <span className="text-floower-rose font-sans italic">oower</span>
        </span>
      </Link>

      {/* Center: Floating Icon Pill Menu */}
      <nav className="flex items-center gap-1 bg-floower-darkWine/80 backdrop-blur-md px-3 py-2 rounded-full border border-floower-rose/30 shadow-xl">
        <NavLink to="/" className={navClass} title="Home">
          <Home className="w-4 h-4" />
        </NavLink>
        
        <NavLink to="/occasions" className={navClass} title="Occasions">
          <Calendar className="w-4 h-4" />
        </NavLink>

        <NavLink to="/selections" className={navClass} title="Selections">
          <Layers className="w-4 h-4" />
        </NavLink>

        <NavLink to="/about" className={navClass} title="About Us">
          <Info className="w-4 h-4" />
        </NavLink>

        {/* User Account / Register / Login Icon */}
        <NavLink to="/auth" className={navClass} title="Sign In / Register">
          <User className="w-4 h-4" />
        </NavLink>

        <NavLink to="/cart" className={navClass} title="Shopping Bag">
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-floower-amber text-floower-deepWine text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </NavLink>
      </nav>

      {/* Right: Location Manager Button */}
      <div className="flex items-center">
        <button 
          onClick={onOpenLocation}
          className="p-3 rounded-2xl bg-floower-darkWine/80 backdrop-blur-md border border-floower-rose/30 text-floower-cream/80 hover:text-floower-cream hover:bg-floower-deepWine shadow-xl transition-all duration-200 flex items-center justify-center"
          title="Manage Location"
        >
          <MapPin className="w-4 h-4 text-floower-amber" />
        </button>
      </div>

    </header>
  );
}