import React from 'react';
import { TrendingUp } from 'lucide-react';

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">StockSenseHub</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('blog')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a 
            href="/signin" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Sign In
          </a>
          <a 
            href="/signup" 
            className="bg-black text-white px-6 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Start Free Analysis
          </a>
        </div>
      </div>
    </nav>
  );
}
