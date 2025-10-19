import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      step: 'STEP 1',
      icon: '▶️',
      title: 'Pick Your Portfolio Killer',
      description: 'Choose from our collection of real stocks and scenarios that have destroyed thousands of portfolios. Time to turn your nightmare into your strength.',
      bgColor: 'bg-blue-100'
    },
    {
      step: 'STEP 2',
      icon: '💬',
      title: 'Analyze Like Your Money Depends On It',
      description: 'Use our interactive analysis board while our AI coach dissects every decision you make. Feel the pressure, make the mistakes, then fix them before it costs you real money.',
      bgColor: 'bg-green-100'
    },
    {
      step: 'STEP 3',
      icon: '📈',
      title: 'Get Feedback That Actually Matters',
      description: 'Receive the brutal, honest feedback you\'d never get from a YouTuber. Know exactly why you failed and how to never fail again.',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section id="how-it-works" className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-4">
            How We Transform Losing Trades Into Winning Portfolios
          </h2>
          <p className="text-xl text-gray-500">
            Three steps from red flags to $400K gains
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-sm text-gray-500 mb-6">{step.step}</div>
              
              <div className={`w-14 h-14 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-3xl">{step.icon}</span>
              </div>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
