import { TrendingUp, Play, BookOpen, Clock, CreditCard, User, ChevronRight, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

interface DashboardSidebarProps {
  activeSection: 'stocks' | 'learning' | 'history' | 'pricing';
}

export function DashboardSidebar({ activeSection }: DashboardSidebarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">StockSense Hub</div>
            <div className="text-xs text-gray-500">Analysis Platform</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <button 
          onClick={() => navigate('/dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-colors ${
            activeSection === 'stocks' 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Play className="w-5 h-5" />
          <span className="font-medium">Explore Stocks</span>
        </button>

        <button 
          onClick={() => navigate('/learning')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-colors ${
            activeSection === 'learning' 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="font-medium">Learning Center</span>
        </button>

        <button 
          onClick={() => navigate('/history')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-colors ${
            activeSection === 'history' 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Clock className="w-5 h-5" />
          <span className="font-medium">Analysis History</span>
        </button>

        <button 
          onClick={() => navigate('/pricing')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            activeSection === 'pricing' 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span className="font-medium">Pricing</span>
        </button>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Free Account</span>
          </div>
          <p className="text-xs text-gray-600">Limited analyses remaining</p>
        </div>

        <div className="space-y-2">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">
                  {user?.name || 'User'}
                </div>
                <div className="text-xs text-gray-500">
                  {user?.email || 'user@example.com'}
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
