import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your existing page components
import Home from '../Pages/Home';
import Occasions from '../Pages/Occasions';
import Selections from '../Pages/Selections';
import About from '../Pages/About';
import Cart from '../Pages/Cart';

// Import your newly created Auth page
import Auth from '../Pages/Auth';

export default function AppRoutes({ cart, addToCart, updateQuantity, removeFromCart, clearCart }) {
  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path="/occasions" element={<Occasions addToCart={addToCart} />} />
      <Route path="/selections" element={<Selections addToCart={addToCart} />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />} />
      
      {/* This makes your login/register page accessible at /auth */}
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}