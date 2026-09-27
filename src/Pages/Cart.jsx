import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Trash2, Plus, Minus, MapPin, CreditCard, User, Home, Phone } from 'lucide-react';

export default function Cart({ cart = [], updateQuantity, removeFromCart, clearCart }) {
  const [isOrdered, setIsOrdered] = useState(false);
  
  // Checkout form state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    walletNumber: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const deliveryFee = subtotal > 0 ? 15.00 : 0;
  const total = subtotal + deliveryFee;

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  // If the order has been successfully placed, display your custom confirmation screen
  if (isOrdered) {
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
            Thanks for your purchase, {formData.name || 'valued customer'}. Your magical bouquet is arranged with love.
          </p>

          {/* Sub-quote */}
          <div className="pt-2 pb-2 border-t border-b border-floower-rose/20 w-full">
            <p className="text-floower-cream/60 text-xs italic">
              “A lovely bouquet, for a great start”
            </p>
          </div>

          {/* Return Button */}
          <button
            onClick={() => {
              if (clearCart) clearCart();
              setIsOrdered(false);
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-floower-deepWine border border-floower-rose/30 text-floower-cream hover:border-floower-amber transition-all duration-300 shadow-md text-sm font-medium group"
          >
            <Sparkles className="w-4 h-4 text-floower-amber group-hover:scale-110 transition-transform" />
            <span>Back to Loower</span>
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif text-floower-cream mb-8">Your Flower Basket</h1>

      {cart.length === 0 ? (
        <div className="bg-floower-darkWine rounded-3xl p-12 border border-floower-rose/35 shadow-xl text-center space-y-4">
          <p className="text-floower-cream/80 text-sm">Your basket is feeling light and empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="bg-floower-darkWine p-5 rounded-2xl border border-floower-rose/35 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-floower-rose/30" />
                  )}
                  <div>
                    <h3 className="font-serif text-floower-cream text-base">{item.name}</h3>
                    <p className="text-floower-amber text-xs">${item.price}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {updateQuantity && (
                    <div className="flex items-center gap-2 bg-floower-deepWine px-3 py-1.5 rounded-xl border border-floower-rose/30">
                      <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)} className="text-floower-cream/70 hover:text-floower-cream">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-floower-cream text-xs font-medium">{item.quantity || 1}</span>
                      <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} className="text-floower-cream/70 hover:text-floower-cream">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                  {removeFromCart && (
                    <button onClick={() => removeFromCart(item.id)} className="text-floower-rose hover:text-floower-cream p-2">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary & Checkout Sidebar with Input Form */}
          <form onSubmit={handleCompleteOrder} className="bg-floower-darkWine p-6 rounded-3xl border border-floower-rose/35 shadow-xl space-y-5 h-fit">
            <h2 className="font-serif text-xl text-floower-cream pb-2 border-b border-floower-rose/20">Checkout Details</h2>
            
            {/* Delivery Location Info */}
            <div className="flex items-center gap-3 bg-floower-deepWine/40 p-3 rounded-xl border border-floower-rose/20">
              <MapPin className="w-4 h-4 text-floower-amber shrink-0" />
              <div>
                <div className="text-[10px] text-floower-cream/60 uppercase tracking-wider">Delivery Hub</div>
                <div className="text-xs font-medium text-floower-cream">New York, NY (Default)</div>
              </div>
            </div>

            {/* Input Fields for Name, Address, Phone, Wallet */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-floower-cream/70 mb-1">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-floower-cream/70 mb-1">Delivery Address</label>
                <div className="relative flex items-center">
                  <Home className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                  <input 
                    type="text" 
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter street address"
                    className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-floower-cream/70 mb-1">Phone Number</label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-floower-cream/70 mb-1">Wallet / Payment Number</label>
                <div className="relative flex items-center">
                  <CreditCard className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                  <input 
                    type="text" 
                    name="walletNumber"
                    required
                    value={formData.walletNumber}
                    onChange={handleInputChange}
                    placeholder="Enter wallet account number"
                    className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                  />
                </div>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="space-y-2 text-sm pt-2 border-t border-floower-rose/20">
              <div className="flex justify-between text-floower-cream/70 text-xs">
                <span>Subtotal</span>
                <span className="text-floower-cream">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-floower-cream/70 text-xs">
                <span>Delivery Fee</span>
                <span className="text-floower-cream">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-serif text-base text-floower-cream pt-2 border-t border-floower-rose/20">
                <span>Total</span>
                <span className="text-floower-amber">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-floower-deepWine text-floower-cream font-medium rounded-xl border border-floower-rose/30 hover:border-floower-amber transition-all shadow-lg text-sm"
            >
              Complete Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}