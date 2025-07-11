
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max - 256GB - Natural Titanium",
      price: 1199.99,
      originalPrice: 1299.99,
      rating: 4.5,
      reviewCount: 2547,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
      category: "Electronics",
      isSponsored: true,
      isPrime: true
    },
    {
      id: 2,
      title: "Samsung 55\" 4K Ultra HD Smart LED TV with HDR",
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.3,
      reviewCount: 1823,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      category: "Electronics",
      isPrime: true
    },
    {
      id: 3,
      title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 329.99,
      originalPrice: 399.99,
      rating: 4.7,
      reviewCount: 3421,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      category: "Electronics",
      isPrime: true
    },
    {
      id: 4,
      title: "Nike Air Max 270 Running Shoes - Men's",
      price: 149.99,
      rating: 4.4,
      reviewCount: 892,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      category: "Fashion",
      isPrime: true
    },
    {
      id: 5,
      title: "KitchenAid Stand Mixer - 5 Quart Artisan Series",
      price: 379.99,
      originalPrice: 449.99,
      rating: 4.8,
      reviewCount: 5672,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
      category: "Home",
      isPrime: true
    },
    {
      id: 6,
      title: "The Psychology of Money - Morgan Housel (Paperback)",
      price: 14.99,
      originalPrice: 18.99,
      rating: 4.6,
      reviewCount: 12453,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      category: "Books"
    },
    {
      id: 7,
      title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviewCount: 8934,
      image: "https://images.unsplash.com/photo-1574781330855-d0db0cc6a79c?w=300&h=300&fit=crop",
      category: "Home",
      isSponsored: true,
      isPrime: true
    },
    {
      id: 8,
      title: "Levi's 501 Original Fit Jeans - Men's",
      price: 59.99,
      rating: 4.2,
      reviewCount: 2156,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
      category: "Fashion",
      isPrime: true
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <button className="text-orange-600 hover:text-orange-700 font-medium">
            View all products →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
