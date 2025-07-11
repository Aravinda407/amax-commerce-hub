
import React from 'react';
import { Star, Heart } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isSponsored?: boolean;
  isPrime?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 relative group">
      {/* Sponsored badge */}
      {product.isSponsored && (
        <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
          Sponsored
        </div>
      )}
      
      {/* Wishlist button */}
      <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
      </button>

      {/* Product image */}
      <div className="aspect-square mb-4 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-orange-700 transition-colors cursor-pointer">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-orange-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-sm text-green-600 font-medium">
                -{discountPercentage}%
              </span>
            </>
          )}
        </div>

        {/* Prime badge */}
        {product.isPrime && (
          <div className="flex items-center">
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">
              prime
            </div>
            <span className="text-xs text-gray-600 ml-2">FREE delivery</span>
          </div>
        )}

        {/* Add to cart button */}
        <button className="w-full bg-orange-400 hover:bg-orange-500 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
