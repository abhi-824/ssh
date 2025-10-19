import React from 'react';
import { ArrowRight } from 'lucide-react';

export function PricingSection() {
  const freeFeatures = [
    '1 stock analysis',
    'Basic AI feedback',
    '300+ real stock problems',
    'Email support'
  ];

  const proFeatures = [
    { text: '10 stock analyses', highlight: 'per month' },
    { text: 'Advanced AI coaching', highlight: '(thinks like Buffett)' },
    { text: '300+ real stock problems', highlight: '' },
    { text: 'Progress analytics', highlight: 'that show your growth' },
    { text: 'Priority support', highlight: 'when stakes are high' },
    { text: 'Investing confidence guarantee', highlight: '' }
  ];

  return (
    <section id="pricing" className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-4">
            Stop Wasting Money on Your Portfolio
          </h2>
          <p className="text-xl text-gray-500">
            Choose the plan that matches your desperation level
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-3xl font-semibold text-gray-900 mb-2">
              Free Plan
            </h3>
            <p className="text-gray-600 mb-6">
              Get started with one free analysis
            </p>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">Free</span>
                <span className="text-gray-600">forever</span>
              </div>
              <p className="text-gray-500">No credit card required</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-medium transition-colors">
              GET STARTED FREE
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
            {/* Most Popular Badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-emerald-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>

            <h3 className="text-3xl font-semibold text-white mb-2">
              Pro Plan
            </h3>
            <p className="text-gray-300 mb-6">
              For serious investors who want to win
            </p>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$19</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">Get the gains</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-white">
                    <span className="font-semibold">{feature.text}</span> {feature.highlight && <span className="text-gray-300">{feature.highlight}</span>}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-black py-4 rounded-xl font-medium transition-colors">
              GET HIRED NOW
            </button>
          </div>
        </div>

        {/* Compare Link */}
        <div className="text-center mt-8">
          <button className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2">
            Compare All Features - See What You're Missing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
