
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      setShowUserMenu(false);
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <header className="bg-gray-900 text-white">
      {/* Top bar */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Deliver to: New York 10001</span>
          </div>
          <div className="flex items-center space-x-4">
            {!loading && (
              <>
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="hover:text-orange-400 transition-colors flex items-center space-x-1"
                    >
                      <span>Hello, {user.email?.split('@')[0]}</span>
                    </button>
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        <button
                          onClick={handleSignOut}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/auth" className="hover:text-orange-400 transition-colors">
                    Sign In
                  </Link>
                )}
              </>
            )}
            <span>Returns & Orders</span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-orange-400">amazon</span>
              <span className="text-xs">.clone</span>
            </h1>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <select className="bg-gray-200 text-gray-800 px-3 py-2 rounded-l-md border-r border-gray-300">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Clothing</option>
                <option>Home</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Amazon Clone"
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r-md transition-colors">
                <Search className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <User className="w-5 h-5" />
              <div className="text-sm">
                <div>Hello, {user ? user.email?.split('@')[0] : 'Sign in'}</div>
                <div className="font-bold">Account & Lists</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <div className="text-sm">
                <div>Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <ShoppingCart className="w-6 h-6" />
              <span className="font-bold">Cart</span>
              <span className="bg-orange-400 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                0
              </span>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-6 text-sm">
            <button className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Menu className="w-4 h-4" />
              <span>All</span>
            </button>
            <Link to="/bestsellers" className="hover:text-orange-400 transition-colors">
              Best Sellers
            </Link>
            <Link to="/deals" className="hover:text-orange-400 transition-colors">
              Today's Deals
            </Link>
            <Link to="/electronics" className="hover:text-orange-400 transition-colors">
              Electronics
            </Link>
            <Link to="/books" className="hover:text-orange-400 transition-colors">
              Books
            </Link>
            <Link to="/fashion" className="hover:text-orange-400 transition-colors">
              Fashion
            </Link>
            <Link to="/home" className="hover:text-orange-400 transition-colors">
              Home & Garden
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
