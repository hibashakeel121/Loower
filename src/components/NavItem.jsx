import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavItem({ to, icon: Icon, title }) {
  return (
    <NavLink
      to={to}
      title={title}
      className={({ isActive }) =>
        `p-2.5 rounded-full transition-all duration-200 ${
          isActive 
            ? 'bg-floower-cream text-floower-deepWine shadow-md' 
            : 'text-floower-cream/70 hover:text-floower-cream hover:bg-floower-deepWine/50'
        }`
      }
    >
      <Icon className="w-4 h-4" />
    </NavLink>
  );
}