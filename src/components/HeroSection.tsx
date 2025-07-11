
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
      title: "Electronics Sale",
      subtitle: "Up to 50% off on latest gadgets",
      cta: "Shop Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop",
      title: "Fashion Week",
      subtitle: "Trending styles for every season",
      cta: "Explore Fashion"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop",
      title: "Home & Garden",
      subtitle: "Transform your living space",
      cta: "Shop Home"
    }
  ];

  return (
    <div className="relative h-96 overflow-hidden">
      {/* Main slide */}
      <div className="relative w-full h-full">
        <img
          src={slides[0].image}
          alt={slides[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white max-w-lg">
              <h2 className="text-4xl font-bold mb-4">{slides[0].title}</h2>
              <p className="text-xl mb-6">{slides[0].subtitle}</p>
              <button className="bg-orange-400 hover:bg-orange-500 text-gray-800 font-bold py-3 px-8 rounded-md transition-colors duration-200">
                {slides[0].cta}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-200">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-200">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === 0 ? 'bg-orange-400' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
