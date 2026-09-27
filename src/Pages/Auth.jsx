import React, { useState } from 'react';
import { Sparkles, User, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Auth({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate successful authentication/registration
    const actionText = isLogin ? "Welcome back" : "Account created successfully";
    setSuccessMessage(`${actionText}, ${formData.name || formData.email}!`);

    // Save user info locally or trigger parent callback after a short beat
    setTimeout(() => {
      if (onAuthSuccess) {
        onAuthSuccess(formData);
      }
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-12">
      <div className="bg-floower-darkWine rounded-3xl p-8 sm:p-10 border border-floower-rose/35 shadow-2xl flex flex-col space-y-6 relative overflow-hidden">
        
        {successMessage ? (
          <div className="flex flex-col items-center text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-floower-deepWine border border-floower-rose/30 flex items-center justify-center text-floower-amber shadow-md animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl text-floower-cream">{successMessage}</h2>
            <p className="text-floower-cream/70 text-xs">Redirecting you to your garden...</p>
          </div>
        ) : (
          <>
            {/* Header Badge */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-floower-deepWine border border-floower-rose/30 text-floower-amber text-xs shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isLogin ? "Welcome Back" : "Join the Garden"}</span>
              </div>
              <h1 className="font-serif text-3xl text-floower-cream">
                {isLogin ? "Sign In to Loower" : "Create Account"}
              </h1>
              <p className="text-floower-cream/70 text-xs">
                {isLogin 
                  ? "Access your saved bouquets and active orders." 
                  : "Register to start curating your botanical collection."}
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 bg-floower-deepWine/50 p-1 rounded-xl border border-floower-rose/20">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`py-2 rounded-lg text-xs font-medium transition-all ${
                  isLogin 
                    ? 'bg-floower-darkWine text-floower-amber border border-floower-rose/30 shadow-sm' 
                    : 'text-floower-cream/60 hover:text-floower-cream'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`py-2 rounded-lg text-xs font-medium transition-all ${
                  !isLogin 
                    ? 'bg-floower-darkWine text-floower-amber border border-floower-rose/30 shadow-sm' 
                    : 'text-floower-cream/60 hover:text-floower-cream'
                }`}
              >
                Register
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs text-floower-cream/70 mb-1">Full Name</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                    <input 
                      type="text" 
                      name="name"
                      required={!isLogin}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs text-floower-cream/70 mb-1">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-floower-cream/70 mb-1">Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3 w-4 h-4 text-floower-amber/60" />
                  <input 
                    type="password" 
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-floower-deepWine/60 border border-floower-rose/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-floower-cream placeholder-floower-cream/40 focus:outline-none focus:border-floower-amber"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3 bg-floower-deepWine text-floower-cream font-medium rounded-xl border border-floower-rose/30 hover:border-floower-amber transition-all shadow-lg text-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
                <ArrowRight className="w-4 h-4 text-floower-amber group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}