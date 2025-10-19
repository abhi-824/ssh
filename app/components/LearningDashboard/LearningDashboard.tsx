import React from 'react';
import { ArrowRight, FileText, PieChart, TrendingDown, Briefcase, DollarSign, BarChart3 } from 'lucide-react';
import { DashboardLayout } from '../shared/DashboardLayout';

export default function LearningCenter() {
  const learningModules = [
    {
      icon: FileText,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Cash Flow Statements',
      description: 'Learn to analyze operating, investing, and financing cash flows for true business health.',
      topics: ['Operating Cash Flow', 'Free Cash Flow', 'Cash Flow Analysis', '+2 more']
    },
    {
      icon: PieChart,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Valuation Ratios',
      description: 'Master P/E, P/B, P/S ratios and understand when stocks are overvalued or undervalued.',
      topics: ['P/E Ratio', 'P/B Ratio', 'Price-to-Sales', '+2 more']
    },
    {
      icon: BarChart3,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Financial Statements',
      description: 'Deep dive into balance sheets, income statements, and their interconnections.',
      topics: ['Balance Sheet', 'Income Statement', 'Statement Analysis', '+2 more']
    },
    {
      icon: TrendingDown,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Cyclical Stocks',
      description: 'Understand sector rotation, economic cycles, and timing cyclical investments.',
      topics: ['Economic Cycles', 'Sector Rotation', 'Timing Entry/Exit', '+2 more']
    },
    {
      icon: Briefcase,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Sector Analysis',
      description: 'Master sector-specific metrics and understand what matters in each industry.',
      topics: ['Tech Metrics', 'Banking Ratios', 'Healthcare Analysis', '+2 more']
    },
    {
      icon: DollarSign,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      title: 'Profitability Metrics',
      description: 'Learn about margins, ROE, ROA, and what truly indicates a profitable business.',
      topics: ['Gross Margin', 'ROE/ROA', 'Operating Margin', '+2 more']
    },
    {
      icon: BarChart3,
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      title: 'Growth Analysis',
      description: 'Identify sustainable growth through revenue trends, market expansion, and competitive advantages.',
      topics: ['Revenue Growth', 'Market Share', 'Competitive Moat', '+2 more']
    },
    {
      icon: BarChart3,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Debt & Leverage',
      description: 'Understand debt ratios, interest coverage, and when leverage helps or hurts.',
      topics: ['Debt-to-Equity', 'Interest Coverage', 'Credit Risk', '+2 more']
    },
    {
      icon: PieChart,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Dividend Analysis',
      description: 'Master dividend yield, payout ratios, and sustainability for income investing.',
      topics: ['Dividend Yield', 'Payout Ratio', 'Dividend Growth', '+2 more']
    }
  ];

  return (
    <DashboardLayout activeSection="learning">
      <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">
              Learning Center
            </h1>
            <p className="text-lg text-gray-600">
              Master fundamental analysis with comprehensive guides and real-world examples
            </p>
          </div>

          {/* Learning Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningModules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${module.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <module.icon className={`w-7 h-7 ${module.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Key Topics */}
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-3">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          idx === module.topics.length - 1
                            ? 'bg-gray-100 text-gray-600'
                            : 'bg-gray-50 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="w-full bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to Master Stock Analysis?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Upgrade to Pro and get unlimited access to all learning modules, advanced AI coaching, and priority support.
            </p>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2 transition-colors">
              Upgrade to Pro
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
    </DashboardLayout>
  );
}