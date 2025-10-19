import React from 'react';

export function FeaturesSection() {
  const features = [
    {
      icon: '🧠',
      title: 'AI That Thinks Like Buffett',
      description: 'Stop guessing what matters. Our AI was trained on 10,000+ successful value investments. It knows exactly how legends like Buffett and Munger evaluate stocks - and tears apart your picks like an investing pro would.',
      bgColor: 'bg-pink-100'
    },
    {
      icon: '💀',
      title: 'Real Problems That Broke Portfolios',
      description: 'Practice with the stocks that crushed retail investors. 127+ real fundamentals from companies that looked amazing... until they weren\'t. These aren\'t textbook examples - these are the career-killers.',
      bgColor: 'bg-green-100'
    },
    {
      icon: '📊',
      title: 'See Your Blind Spots Get Destroyed',
      description: 'No more wondering what went wrong. Detailed analytics show exactly why you\'re failing: poor cash flow analysis, missing red flags, or just FOMOing without structure.',
      bgColor: 'bg-purple-100'
    },
    {
      icon: '⏰',
      title: 'Master the 30-Minute Analysis',
      description: 'Time management separates winners from losers. Learn to spot value and red flags in under 30 minutes - the difference between catching opportunities and watching them pass by.',
      bgColor: 'bg-red-100'
    },
    {
      icon: '🎯',
      title: 'Real-Stock Level Brutality',
      description: 'We don\'t sugarcoat feedback. Our evaluation criteria match the ruthless standards of top hedge funds - because that\'s who you\'re competing against.',
      bgColor: 'bg-orange-100'
    },
    {
      icon: '💪',
      title: 'Build Unbreakable Confidence',
      description: 'Never freeze again. Structured learning makes you trust your analysis. Know exactly why you\'re buying or passing - no more second-guessing yourself after market opens.',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <section id="features" className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-4">
            Why Your Portfolio Is Stuck (And How We Fix It)
          </h2>
          <p className="text-xl text-gray-500">
            Everything you ACTUALLY need to stop losing money
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">{feature.description.split('.')[0]}.</span> {feature.description.split('.').slice(1).join('.').trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
