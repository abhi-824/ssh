import React from 'react';
import { TrendingUp, BookOpen, Play, Clock, CreditCard, User, ChevronRight, Check } from 'lucide-react';
import { DashboardLayout } from '../shared/DashboardLayout';

export default function PricingPage() {
  return (
    <DashboardLayout activeSection="pricing">
      {/* Sidebar */}
        <div className="max-w-6xl mx-auto p-8">
          {/* Header */}
          <div className="mb-12 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-3">
                Stop Wasting Money on Your Portfolio
              </h1>
            </div>
            <div className="text-gray-500 lg:text-right mt-4 lg:mt-0">
              <p className="text-lg">Choose the plan that matches</p>
              <p className="text-lg">your desperation level</p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                Free Plan
              </h2>
              <p className="text-gray-600 mb-8">
                Get started with one free analysis
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-semibold text-gray-900">Free</span>
                  <span className="text-gray-600">forever</span>
                </div>
                <p className="text-sm text-gray-500">No credit card required</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gray-900" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">1 stock analysis</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gray-900" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">Basic AI feedback</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gray-900" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">300+ real stock scenarios</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gray-900" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">Email support</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                GET STARTED FREE
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden shadow-xl">
              {/* Most Popular Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-emerald-400 text-black text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </span>
              </div>

              <h2 className="text-3xl font-semibold text-white mb-2">
                Pro Plan
              </h2>
              <p className="text-gray-300 mb-8">
                For serious investors who want to win big
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-semibold text-white">$19</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-400">Get the gains</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-white">
                    <span className="font-semibold">10 stock analyses</span> per month
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-white">
                    <span className="font-semibold">Advanced AI coaching</span> (thinks like Buffett)
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-white">
                    <span className="font-semibold">300+ real stock problems</span>
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-white">
                    <span className="font-semibold">Progress analytics</span> that show your growth
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-white">
                    <span className="font-semibold">Priority support</span> when stakes are high
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-white">
                    <span className="font-semibold">Portfolio confidence guarantee</span>
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-emerald-400 text-black py-4 rounded-xl font-medium hover:bg-emerald-500 transition-colors">
                GET HIRED NOW
              </button>
            </div>
          </div>

          {/* FAQ or Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Need help choosing? Check out our{' '}
              <a href="#" className="text-black font-medium underline hover:no-underline">
                comparison guide
              </a>{' '}
              or{' '}
              <a href="#" className="text-black font-medium underline hover:no-underline">
                contact support
              </a>
            </p>
          </div>
        </div>
    </DashboardLayout>
  );
}