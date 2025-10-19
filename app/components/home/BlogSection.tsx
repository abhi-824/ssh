import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function BlogSection() {
  const caseStudies = [
    {
      title: 'How I Lost $50K on Tesla and What I Learned',
      excerpt: 'A deep dive into the fundamental analysis mistakes that cost me big on TSLA. Learn the red flags I missed and how to avoid them.',
      readTime: '8 min read',
      category: 'Case Study',
      mediumUrl: '#', // Placeholder for Medium link
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'The GameStop Saga: A Fundamental Analysis Perspective',
      excerpt: 'Why traditional value investing principles failed during the meme stock craze and what it teaches us about market psychology.',
      readTime: '12 min read',
      category: 'Market Analysis',
      mediumUrl: '#', // Placeholder for Medium link
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'From FOMO to Fortune: My $100K Portfolio Turnaround',
      excerpt: 'How I went from emotional trading to systematic value investing. The exact framework that saved my portfolio.',
      readTime: '15 min read',
      category: 'Success Story',
      mediumUrl: '#', // Placeholder for Medium link
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Why I Sold Apple at $150 (And Why I Regret It)',
      excerpt: 'A brutal honest look at my biggest investing mistake. The psychological traps that led to selling too early.',
      readTime: '6 min read',
      category: 'Lessons Learned',
      mediumUrl: '#', // Placeholder for Medium link
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'The Crypto Crash: What Value Investors Saw Coming',
      excerpt: 'How fundamental analysis principles predicted the crypto winter. Why traditional metrics still matter in new markets.',
      readTime: '10 min read',
      category: 'Crypto Analysis',
      mediumUrl: '#', // Placeholder for Medium link
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Building a $500K Portfolio with $10K: The Math',
      excerpt: 'The exact calculations and timeline for turning $10K into $500K through value investing. Real numbers, real strategy.',
      readTime: '20 min read',
      category: 'Strategy',
      mediumUrl: '#', // Placeholder for Medium link
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section id="blog" className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-4">
            Real Stories from Real Investors
          </h2>
          <p className="text-xl text-gray-500">
            Case studies that will change how you think about investing
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((post, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${post.borderColor} hover:scale-105`}>
              {/* Category Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${post.bgColor} text-gray-700`}>
                {post.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>

              {/* Read More Button */}
              <a 
                href={post.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Read on Medium
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-colors mx-auto">
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
