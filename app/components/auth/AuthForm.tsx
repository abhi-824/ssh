import React, { useState } from 'react';
import { TrendingUp, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';

export default function AuthForm({ isSignup = false }: { isSignup: boolean }) {
  const [isSignUp, setIsSignUp] = useState(isSignup);
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call - in real app, you'd call your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from your API
      const userData = {
        id: '1',
        email: email,
        name: email.split('@')[0]
      };
      
      login(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      // Simulate Google auth - in real app, you'd integrate with Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: '1',
        email: 'user@gmail.com',
        name: 'Google User'
      };
      
      login(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google authentication failed:', error);
      alert('Google authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between border-b border-gray-100">
            <a href="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">StockSense Hub</span>
            </a>
          <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Back to home
          </a>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {!isSignUp ? (
              // Sign In Form
              <>
                <div className="mb-12">
                  <h1 className="text-4xl font-semibold text-gray-900 mb-3">
                    Welcome back
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Sign in to continue your stock analysis practice
                  </p>
                </div>

                {/* Google Sign In */}
                <button 
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full bg-white border border-gray-300 rounded-xl px-6 py-3.5 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                    <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853" />
                    <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                    <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335" />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    {isLoading ? 'Signing in...' : 'Sign in with Google'}
                  </span>
                </button>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or with email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Sign In Button */}
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="text-black font-medium hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </>
            ) : (
              // Sign Up Form
              <>
                <div className="mb-12">
                  <h1 className="text-4xl font-semibold text-gray-900 mb-3">
                    Create your account
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Start mastering stock analysis today
                  </p>
                </div>

                {/* Google Sign Up */}
                <button 
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full bg-white border border-gray-300 rounded-xl px-6 py-3.5 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                    <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853" />
                    <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                    <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335" />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    {isLoading ? 'Signing up...' : 'Sign up with Google'}
                  </span>
                </button>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or with email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-6">Must be at least 8 characters</p>

                  {/* Terms Checkbox */}
                  <div className="mb-8">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        required
                        className="mt-1 w-4 h-4 rounded text-black focus:ring-black"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{' '}
                        <a href="#" className="text-black underline hover:no-underline">
                          Terms of Service
                        </a>
                        {' '}and{' '}
                        <a href="#" className="text-black underline hover:no-underline">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* Create Account Button */}
                  <button 
                    type="submit"
                    disabled={isLoading || !agreedToTerms}
                    className="w-full bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Creating account...' : 'Create account'}
                  </button>
                </form>

                {/* Sign In Link */}
                <p className="text-center text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="text-black font-medium hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-black relative overflow-hidden">
        {/* Animated gradient waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path
              d="M 0 400 Q 200 300 400 400 T 800 400 L 800 800 L 0 800 Z"
              fill="url(#waveGradient1)"
              opacity="0.5"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M 0 400 Q 200 300 400 400 T 800 400 L 800 800 L 0 800 Z;
                  M 0 400 Q 200 500 400 400 T 800 400 L 800 800 L 0 800 Z;
                  M 0 400 Q 200 300 400 400 T 800 400 L 800 800 L 0 800 Z
                "
              />
            </path>
          </svg>

          {/* Additional wave layer */}
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            <path
              d="M 0 500 Q 200 400 400 500 T 800 500 L 800 800 L 0 800 Z"
              fill="url(#waveGradient2)"
              opacity="0.8"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                  M 0 500 Q 200 400 400 500 T 800 500 L 800 800 L 0 800 Z;
                  M 0 500 Q 200 600 400 500 T 800 500 L 800 800 L 0 800 Z;
                  M 0 500 Q 200 400 400 500 T 800 500 L 800 800 L 0 800 Z
                "
              />
            </path>
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

        {/* Content overlay */}
        <div className="relative z-10 flex items-center justify-center h-full p-12">
          <div className="text-center">
            <div className="text-6xl mb-6">📈</div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Master Stock Analysis
            </h2>
            <p className="text-gray-400 text-lg">
              Join thousands of investors making smarter decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}