import { useState } from 'react';
import { Search, Play, Clock } from 'lucide-react';
import { DashboardLayout } from '../shared/DashboardLayout';
import { useNavigate } from 'react-router';

export default function StockDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('All Stocks');
  const navigate = useNavigate();

  const categories = [
    'All Stocks',
    'Tech Giants',
    'Banking',
    'Healthcare',
    'Energy',
    'Consumer Goods',
    'E-commerce',
    'Automotive'
  ];

  const stockCards = [
    {
      difficulty: 'Hard',
      difficultyColor: 'bg-red-100 text-red-700',
      time: '60m',
      sector: 'Technology',
      sectorColor: 'bg-blue-100 text-blue-700',
      title: 'Apple Inc. (AAPL)',
      description: 'Analyze Apple\'s financial statements, cash flow, and valuation metrics. Understanding one of the world\'s most valuable companies.',
      companies: ['Tech Giants', 'Buffett Portfolio', '+3 more'],
      price: '$178.25',
      change: '+2.4%',
      changePositive: true
    },
    {
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-700',
      time: '45m',
      sector: 'Healthcare',
      sectorColor: 'bg-green-100 text-green-700',
      title: 'Johnson & Johnson (JNJ)',
      description: 'Deep dive into a healthcare giant\'s fundamentals, dividend history, and competitive moat analysis.',
      companies: ['Healthcare', 'Dividend Aristocrats', '+3 more'],
      price: '$156.89',
      change: '+1.2%',
      changePositive: true
    },
    {
      difficulty: 'Hard',
      difficultyColor: 'bg-red-100 text-red-700',
      time: '60m',
      sector: 'Banking',
      sectorColor: 'bg-purple-100 text-purple-700',
      title: 'JPMorgan Chase (JPM)',
      description: 'Analyze banking fundamentals including capital ratios, loan portfolios, and regulatory compliance impact.',
      companies: ['Banking', 'Financial Services', '+3 more'],
      price: '$145.67',
      change: '-0.8%',
      changePositive: false
    },
    {
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-700',
      time: '45m',
      sector: 'Consumer Goods',
      sectorColor: 'bg-orange-100 text-orange-700',
      title: 'Coca-Cola (KO)',
      description: 'Study a classic value investment: brand moat, international exposure, and consistent cash flows.',
      companies: ['Consumer Goods', 'Buffett Picks', '+3 more'],
      price: '$58.32',
      change: '+0.5%',
      changePositive: true
    },
    {
      difficulty: 'Hard',
      difficultyColor: 'bg-red-100 text-red-700',
      time: '60m',
      sector: 'E-commerce',
      sectorColor: 'bg-pink-100 text-pink-700',
      title: 'Amazon (AMZN)',
      description: 'Analyze Amazon\'s complex business model, AWS profitability, and e-commerce margins.',
      companies: ['Tech Giants', 'E-commerce', '+3 more'],
      price: '$142.50',
      change: '+3.1%',
      changePositive: true
    },
    {
      difficulty: 'Medium',
      difficultyColor: 'bg-yellow-100 text-yellow-700',
      time: '45m',
      sector: 'Energy',
      sectorColor: 'bg-emerald-100 text-emerald-700',
      title: 'ExxonMobil (XOM)',
      description: 'Energy sector fundamentals: oil price sensitivity, capital expenditure, and energy transition risks.',
      companies: ['Energy', 'Oil & Gas', '+3 more'],
      price: '$102.45',
      change: '+1.8%',
      changePositive: true
    }
  ];

  return (
    <DashboardLayout activeSection="stocks">
      <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">
              Explore Stocks
            </h1>
            <p className="text-lg text-gray-600">
              Master fundamental analysis with 160 real companies from various sectors
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by company, sector, or ticker..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing all <span className="font-semibold">160</span> stocks
            </p>
          </div>

          {/* Stock Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stockCards.map((stock, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                {/* Header with badges */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${stock.difficultyColor}`}>
                      ● {stock.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {stock.time}
                    </span>
                  </div>
                </div>

                {/* Sector Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${stock.sectorColor}`}>
                    {stock.sector}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stock.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {stock.description}
                </p>

                {/* Price and Change */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{stock.price}</span>
                  <span className={`text-sm font-medium ${stock.changePositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.change}
                  </span>
                </div>

                {/* Asked at Companies */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">Similar to:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stock.companies.map((company, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          idx === stock.companies.length - 1
                            ? 'bg-gray-100 text-gray-600'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Start Analysis Button */}
                <button className="w-full bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors" onClick={()=>{navigate("/analysis")}}>
                  <Play className="w-4 h-4" />
                  Start Analysis
                </button>
              </div>
            ))}
          </div>
        </div>
    </DashboardLayout>
  );
}