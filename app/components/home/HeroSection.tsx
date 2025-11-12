import React from 'react';
import { useNavigate } from 'react-router';
import { Zap, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="pt-32 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Subtle star pattern background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full"></div>
          </div>

          {/* Beautiful Glow Orb Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 opacity-20">
              <div className="w-full h-full rounded-full bg-gradient-radial from-white via-gray-300 to-transparent animate-pulse-slow"></div>
            </div>
            <div className="absolute -top-16 -left-16 w-64 h-64 opacity-15">
              <div className="w-full h-full rounded-full bg-gradient-radial from-emerald-400 via-emerald-600 to-transparent animate-float"></div>
            </div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 opacity-10">
              <div className="w-full h-full rounded-full bg-gradient-radial from-blue-400 via-blue-600 to-transparent animate-glow"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-8">
              Stop Losing Money on Bad Stock Picks 📉
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
              Master fundamental analysis with AI that thinks like Warren Buffett.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
              Join 15,000+ investors who went from FOMO trades to $500K+ portfolios.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <button onClick={()=>{navigate("/signup")}} className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all transform hover:scale-105">
                <Zap className="w-5 h-5" />
                STOP THE LOSSES - START FREE ANALYSIS
              </button>
              <button onClick={()=>{navigate("/signin")}} className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-colors">
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <p className="text-3xl font-bold text-white">47 bad picks later...</p>
                </div>
                <p className="text-gray-400">Investors Analyzing: 15,247</p>
              </div>
              
              <div>
                <p className="text-3xl font-bold text-white mb-2">+$127,000</p>
                <p className="text-gray-400">Average Portfolio Growth</p>
              </div>
              
              <div>
                <p className="text-3xl font-bold text-white mb-2">94.7%</p>
                <p className="text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
