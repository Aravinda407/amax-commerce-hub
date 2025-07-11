
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      {/* Logo */}
      <Link to="/" className="mb-8">
        <h1 className="text-3xl font-bold">
          <span className="text-orange-400">amazon</span>
          <span className="text-gray-800 text-lg">.clone</span>
        </h1>
      </Link>

      {/* Sign in form */}
      <div className="w-full max-w-sm">
        <div className="border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl font-normal mb-6">Sign in</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email or mobile phone number
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign in
            </button>
          </form>

          <div className="mt-4 text-xs text-gray-600">
            By signing in, you agree to Amazon Clone's{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Notice
            </a>
            .
          </div>

          <div className="mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* New customer section */}
        <div className="mt-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">New to Amazon Clone?</span>
            </div>
          </div>
          
          <Link
            to="/signup"
            className="mt-4 w-full inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-center"
          >
            Create your Amazon Clone account
          </Link>
        </div>
      </div>

      {/* Footer links */}
      <div className="mt-8 text-center text-xs text-gray-600 space-x-4">
        <a href="#" className="hover:underline">Conditions of Use</a>
        <a href="#" className="hover:underline">Privacy Notice</a>
        <a href="#" className="hover:underline">Help</a>
      </div>
    </div>
  );
};

export default SignIn;
