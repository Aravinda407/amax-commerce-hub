
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white">
      {/* Back to top */}
      <div 
        className="bg-gray-700 py-4 text-center cursor-pointer hover:bg-gray-600 transition-colors"
        onClick={scrollToTop}
      >
        <div className="flex items-center justify-center space-x-2">
          <ArrowUp className="w-4 h-4" />
          <span>Back to top</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Amazon Clone</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Devices</a></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sell products</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sell on Amazon Business</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sell apps</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Advertise Your Products</a></li>
            </ul>
          </div>

          {/* Amazon Payment Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Payment Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Business Card</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Shop with Points</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Reload Your Balance</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Amazon Currency Converter</a></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Your Account</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Your Orders</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Returns & Replacements</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Logo and language selector */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-orange-400">amazon</span>
                <span className="text-xs">.clone</span>
              </h2>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <button className="border border-gray-600 px-3 py-1 rounded hover:bg-gray-700 transition-colors">
                🌐 English
              </button>
              <button className="border border-gray-600 px-3 py-1 rounded hover:bg-gray-700 transition-colors">
                $ USD - U.S. Dollar
              </button>
              <button className="border border-gray-600 px-3 py-1 rounded hover:bg-gray-700 transition-colors">
                🇺🇸 United States
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Amazon Clone. Built with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
