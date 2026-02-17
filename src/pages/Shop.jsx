import { useState } from "react";
import { productsOld, useProductsFakeStore } from "../products/products";
import { useCart } from "../cart-context.jsx";

function Shop() {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const { products, loading, error } = useProductsFakeStore();

  // Helper functions for quantity management. Starts at 1 if not set, and ensures values stay between 1 and 99.
  const getQuantity = (productId) => quantities[productId] || 1;

  // Render star rating based on rating value
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 fill-current text-yellow-400"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>,
        );
      } else if (i === fullStars && hasHalfStar) {
        // Half star
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="rgb(209, 213, 219)" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${i})`}
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>,
        );
      } else {
        // Empty star
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 fill-current text-gray-300"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>,
        );
      }
    }
    return stars;
  };
  // Centralized function to update quantity (quantity is bounded between 1 and 99)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > 99) newQuantity = 99;
    setQuantities((prev) => ({
      ...prev,
      [productId]: newQuantity,
    }));
  };
  // Increment function that increases quantity by 1
  const incrementQuantity = (productId) => {
    updateQuantity(productId, getQuantity(productId) + 1);
  };
  // Decrement function that decreases quantity by 1
  const decrementQuantity = (productId) => {
    updateQuantity(productId, getQuantity(productId) - 1);
  };
  // Handler for direct input changes in the quantity field
  const handleQuantityInput = (productId, value) => {
    const numValue = parseInt(value) || 1;
    updateQuantity(productId, numValue);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Shop All Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our full collection of amazing products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-gray-100 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 h-64 flex items-center justify-center relative overflow-hidden p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {product.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="text-right">
                    <div className="flex justify-end mb-1">
                      {renderStars(product.rating?.rate || 0)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.rating?.rate?.toFixed(1) || "N/A"} (
                      {product.rating?.count || 0} reviews)
                    </div>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center justify-center gap-0 bg-gray-100 rounded-xl p-1 max-w-36 mx-auto">
                    <button
                      onClick={() => decrementQuantity(product.id)}
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-gray-600 hover:text-blue-600 font-bold text-xl"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={getQuantity(product.id)}
                      onChange={(e) =>
                        handleQuantityInput(product.id, e.target.value)
                      }
                      className="w-14 h-10 text-center border-0 bg-transparent font-bold text-lg text-gray-900 focus:outline-none focus:ring-0"
                    />
                    <button
                      onClick={() => incrementQuantity(product.id)}
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-gray-600 hover:text-blue-600 font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product, getQuantity(product.id))}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Add {getQuantity(product.id)} to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
