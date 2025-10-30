import { useState, useRef, useEffect } from 'react';
import {
    X, TrendingUp, MessageSquare, Send, BarChart3, FileText,
    Lightbulb, StickyNote, Building2, Calendar, Users, Globe,
    ArrowUpRight, ArrowDownRight, Sparkles, ChevronDown, Loader2
} from 'lucide-react';

// Mock data - in real app, fetch from API
const mockCompanyData: any = {
    'AAPL': {
        name: 'Apple Inc.',
        ticker: 'AAPL',
        sector: 'Technology',
        price: 178.25,
        change: 2.4,
        marketCap: '2.8T',
        peRatio: 29.5,
        dividendYield: 0.5,
        roe: 147.3,
        debtToEquity: 1.8,
        description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.',
        ceo: 'Tim Cook',
        founded: '1976',
        employees: '164,000',
        headquarters: 'Cupertino, CA',
        news: [
            { title: 'Apple announces record Q4 earnings', date: '2024-10-28', sentiment: 'positive' },
            { title: 'New iPhone sales exceed expectations', date: '2024-10-25', sentiment: 'positive' },
            { title: 'Services revenue hits all-time high', date: '2024-10-20', sentiment: 'positive' }
        ],
        financials: {
            revenue: [365.8, 383.3, 394.3, 383.9, 391.0],
            netIncome: [94.7, 99.8, 94.3, 96.9, 93.7],
            operatingMargin: [27.5, 28.1, 29.8, 28.6, 29.1],
            freeCashFlow: [99.6, 111.4, 101.3, 108.9, 110.5],
            years: ['2020', '2021', '2022', '2023', '2024']
        },
        peers: [
            { name: 'Microsoft', pe: 35.2, roe: 38.5, debtToEquity: 0.4 },
            { name: 'Google', pe: 26.8, roe: 28.9, debtToEquity: 0.1 },
            { name: 'Amazon', pe: 45.3, roe: 17.2, debtToEquity: 0.5 }
        ]
    }
};

export default function StockWorkspace() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('snapshot');
    const [selectedCompany, setSelectedCompany] = useState('AAPL');
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi! I\'m your AI analyst assistant. Ask me anything about Apple\'s financials, competitive position, or valuation. For example: "Show me the 5-year revenue trend" or "How does Apple\'s P/E compare to peers?"' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [financialView, setFinancialView] = useState('summary');
    const messagesEndRef = useRef(null);

    const company = mockCompanyData[selectedCompany];

    useEffect(() => {
        (messagesEndRef.current as HTMLElement | null)?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = inputMessage.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInputMessage('');
        setIsThinking(true);

        // Simulate AI processing
        setTimeout(() => {
            let response = '';
            const lowerMsg = userMessage.toLowerCase();

            if (lowerMsg.includes('revenue') || lowerMsg.includes('sales')) {
                response = `Apple's revenue has shown steady growth over the past 5 years, from $365.8B in 2020 to $391.0B in 2024. The company experienced a slight dip in 2023 due to supply chain challenges but has recovered strongly. I've updated the financials view to show the revenue trend chart.`;
                setFinancialView('revenue-trend');
                setActiveTab('financials');
            } else if (lowerMsg.includes('margin') || lowerMsg.includes('profitability')) {
                response = `Apple maintains exceptional operating margins, consistently above 27%. In 2024, the operating margin is 29.1%, reflecting strong pricing power and efficient operations. Services segment (40%+ margins) is driving overall margin improvement.`;
                setFinancialView('margins');
                setActiveTab('financials');
            } else if (lowerMsg.includes('peer') || lowerMsg.includes('compar')) {
                response = `Apple's P/E ratio of 29.5 is competitive but lower than Amazon (45.3) and higher than Google (26.8). However, Apple's ROE of 147.3% is exceptional - significantly outperforming all peers. This reflects Apple's capital-efficient business model and strong brand moat.`;
                setFinancialView('peer-comparison');
                setActiveTab('snapshot');
            } else if (lowerMsg.includes('debt') || lowerMsg.includes('balance sheet')) {
                response = `Apple's debt-to-equity ratio of 1.8 is higher than tech peers but manageable given its massive cash flow generation ($110.5B FCF in 2024). The company strategically uses debt for tax-efficient capital returns while maintaining a fortress balance sheet.`;
                setFinancialView('balance-sheet');
                setActiveTab('financials');
            } else if (lowerMsg.includes('valuation') || lowerMsg.includes('expensive')) {
                response = `At a P/E of 29.5, Apple trades at a premium to the S&P 500 (21x) but at a discount to its 5-year average (32x). Given its 147% ROE, strong brand, and services growth, many analysts consider this valuation reasonable. The stock has upside if Services revenue continues expanding.`;
                setFinancialView('valuation');
            } else {
                response = `That's an interesting question about ${company.name}. Based on the financials, Apple shows strong fundamentals with consistent profitability, healthy cash flows, and competitive positioning in the premium smartphone market. Would you like me to dive deeper into any specific aspect?`;
            }

            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setIsThinking(false);
        }, 1500);
    };

    const renderFinancialChart = () => {
        if (financialView === 'revenue-trend') {
            return (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Revenue Trend (5 Years)</h3>
                    <div className="space-y-3">
                        {company.financials.years.map((year: any, idx: any) => (
                            <div key={year}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">{year}</span>
                                    <span className="font-semibold">${company.financials.revenue[idx]}B</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-black rounded-full h-2 transition-all"
                                        style={{ width: `${(company.financials.revenue[idx] / 400) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (financialView === 'margins') {
            return (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Operating Margin Trend</h3>
                    <div className="space-y-3">
                        {company.financials.years.map((year: any, idx: any) => (
                            <div key={year}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">{year}</span>
                                    <span className="font-semibold">{company.financials.operatingMargin[idx]}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-600 rounded-full h-2 transition-all"
                                        style={{ width: `${company.financials.operatingMargin[idx] * 3}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (financialView === 'peer-comparison') {
            return (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Peer Comparison</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium text-gray-600 mb-2">P/E Ratio</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">Apple</span>
                                    <span className="text-sm">{company.peRatio}</span>
                                </div>
                                {company.peers.map((peer: any) => (
                                    <div key={peer.name} className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">{peer.name}</span>
                                        <span className="text-sm text-gray-600">{peer.pe}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-600 mb-2">Return on Equity (%)</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">Apple</span>
                                    <span className="text-sm font-bold text-green-600">{company.roe}%</span>
                                </div>
                                {company.peers.map((peer: any) => (
                                    <div key={peer.name} className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">{peer.name}</span>
                                        <span className="text-sm text-gray-600">{peer.roe}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Key Metrics Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm text-gray-600">Revenue (2024)</div>
                        <div className="text-2xl font-bold">${company.financials.revenue[4]}B</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600">Net Income (2024)</div>
                        <div className="text-2xl font-bold">${company.financials.netIncome[4]}B</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600">Operating Margin</div>
                        <div className="text-2xl font-bold">{company.financials.operatingMargin[4]}%</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600">Free Cash Flow</div>
                        <div className="text-2xl font-bold">${company.financials.freeCashFlow[4]}B</div>
                    </div>
                </div>
            </div>
        );
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'snapshot':
                return (
                    <div className="space-y-6">
                        {/* Key Metrics Grid */}
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="text-sm text-gray-600 mb-1">Market Cap</div>
                                <div className="text-2xl font-bold">${company.marketCap}</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="text-sm text-gray-600 mb-1">P/E Ratio</div>
                                <div className="text-2xl font-bold">{company.peRatio}</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="text-sm text-gray-600 mb-1">ROE</div>
                                <div className="text-2xl font-bold text-green-600">{company.roe}%</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="text-sm text-gray-600 mb-1">Debt/Equity</div>
                                <div className="text-2xl font-bold">{company.debtToEquity}</div>
                            </div>
                        </div>

                        {/* Company Overview */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Company Overview</h3>
                            <p className="text-gray-600 mb-4">{company.description}</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm"><span className="font-medium">CEO:</span> {company.ceo}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm"><span className="font-medium">Founded:</span> {company.founded}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm"><span className="font-medium">Employees:</span> {company.employees}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm"><span className="font-medium">HQ:</span> {company.headquarters}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Developments */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Recent Developments</h3>
                            <div className="space-y-3">
                                {company.news.map((item: any, idx: any) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className={`w-2 h-2 rounded-full mt-2 ${item.sentiment === 'positive' ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">{item.title}</div>
                                            <div className="text-xs text-gray-500">{item.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Peer Comparison */}
                        {renderFinancialChart()}
                    </div>
                );

            case 'financials':
                return (
                    <div className="space-y-6">
                        {/* Financial Framework Tabs */}
                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <div className="flex gap-2 overflow-x-auto">
                                {['P&L', 'Balance Sheet', 'Cash Flow', 'Ratios', 'Valuation'].map(tab => (
                                    <button
                                        key={tab}
                                        className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors whitespace-nowrap"
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {renderFinancialChart()}

                        {/* 5-Year Trend */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">5-Year Financial Summary</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 text-sm font-medium text-gray-600">Metric</th>
                                            {company.financials.years.map((year: any) => (
                                                <th key={year} className="text-right py-3 text-sm font-medium text-gray-600">{year}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 text-sm">Revenue ($B)</td>
                                            {company.financials.revenue.map((val: any, idx: any) => (
                                                <td key={idx} className="text-right py-3 text-sm font-semibold">{val}</td>
                                            ))}
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 text-sm">Net Income ($B)</td>
                                            {company.financials.netIncome.map((val: any, idx: any) => (
                                                <td key={idx} className="text-right py-3 text-sm font-semibold">{val}</td>
                                            ))}
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 text-sm">Op. Margin (%)</td>
                                            {company.financials.operatingMargin.map((val: any, idx: any) => (
                                                <td key={idx} className="text-right py-3 text-sm font-semibold">{val}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-sm">Free Cash Flow ($B)</td>
                                            {company.financials.freeCashFlow.map((val: any, idx: any) => (
                                                <td key={idx} className="text-right py-3 text-sm font-semibold">{val}</td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            case 'qualitative':
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Competitive Moat Analysis</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-2">Brand Power</h4>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 rounded-full h-2" style={{ width: '95%' }} />
                                        </div>
                                        <span className="text-sm font-semibold">Strong</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Apple's brand is one of the most valuable globally, commanding premium pricing and customer loyalty.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Ecosystem Lock-in</h4>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 rounded-full h-2" style={{ width: '90%' }} />
                                        </div>
                                        <span className="text-sm font-semibold">Strong</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Seamless integration across devices creates high switching costs for customers.</p>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Scale Advantages</h4>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 rounded-full h-2" style={{ width: '85%' }} />
                                        </div>
                                        <span className="text-sm font-semibold">Strong</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Massive production volumes and negotiating power with suppliers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Key Risks</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                                    <div>
                                        <div className="font-medium text-sm">China Dependency</div>
                                        <div className="text-xs text-gray-600 mt-1">~20% of revenue from China; geopolitical tensions pose risk</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
                                    <div>
                                        <div className="font-medium text-sm">iPhone Saturation</div>
                                        <div className="text-xs text-gray-600 mt-1">Smartphone market maturing in developed countries</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
                                    <div>
                                        <div className="font-medium text-sm">Regulatory Pressure</div>
                                        <div className="text-xs text-gray-600 mt-1">App Store fees under scrutiny globally</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'notes':
                return (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Your Analysis Notes</h3>
                            <textarea
                                className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                                placeholder="Take notes on your analysis, thesis, concerns, or action items..."
                            />
                            <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                Save Notes
                            </button>
                        </div>
                    </div>
                );

            case 'ai-insights':
                return (
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5 text-purple-600" />
                                <h3 className="text-lg font-semibold">AI-Generated Insights</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-medium mb-2">Investment Thesis Summary</h4>
                                    <p className="text-sm text-gray-600">
                                        Apple presents a compelling value proposition with exceptional ROE (147%), strong brand moat, and growing services revenue.
                                        The company's capital-efficient business model generates massive free cash flow ($110B+), supporting shareholder returns.
                                        However, iPhone revenue dependency and China exposure warrant monitoring.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-medium mb-2">Valuation Assessment</h4>
                                    <p className="text-sm text-gray-600">
                                        At 29.5x P/E, Apple trades below its historical average, suggesting reasonable valuation.
                                        The Services segment (higher margins, recurring revenue) is underappreciated by the market.
                                        Fair value estimate: $195-210, implying 9-18% upside.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <h4 className="font-medium mb-2">What to Watch</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Services growth trajectory (target: 15%+ YoY)</li>
                                        <li>• iPhone ASP trends and mix shift</li>
                                        <li>• China revenue stability</li>
                                        <li>• Vision Pro adoption and AR/VR strategy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white text-black">
            <div className="bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-black">{company.name}</h1>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-gray-500">{company.ticker}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{company.sector}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-xl font-bold">${company.price}</span>
                            <span className={`text-sm font-medium flex items-center gap-1 ${company.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {company.change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                {Math.abs(company.change)}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left: Content Area */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-6 bg-white rounded-xl p-2 border border-gray-200 overflow-x-auto">
                        {[
                            { id: 'snapshot', label: 'Snapshot', icon: BarChart3 },
                            { id: 'financials', label: 'Financials', icon: FileText },
                            { id: 'qualitative', label: 'Qualitative', icon: Lightbulb },
                            { id: 'notes', label: 'Notes', icon: StickyNote },
                            { id: 'ai-insights', label: 'AI Insights', icon: Sparkles }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-black text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {renderTabContent()}
                </div>

                {/* Right: AI Chat Interface */}
                <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
                    {/* Chat Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-gray-600" />
                            <h3 className="font-semibold">AI Analyst Assistant</h3>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Ask questions to update the workspace</p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-900'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isThinking && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                                        <span className="text-sm text-gray-600">Analyzing...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions */}
                    <div className="px-4 py-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Show revenue trend', 'Compare to peers', 'Debt analysis'].map(q => (
                                <button
                                    key={q}
                                    onClick={() => {
                                        setInputMessage(q);
                                        setTimeout(() => handleSendMessage(), 100);
                                    }}
                                    className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask about financials, ratios, trends..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                disabled={isThinking}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isThinking || !inputMessage.trim()}
                                className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}