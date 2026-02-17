function Shop() {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 79.99,
      category: "Electronics",
    },
    { id: 2, name: "Smart Watch", price: 199.99, category: "Electronics" },
    { id: 3, name: "Laptop Bag", price: 49.99, category: "Accessories" },
    { id: 4, name: "Wireless Mouse", price: 29.99, category: "Electronics" },
    { id: 5, name: "USB-C Hub", price: 39.99, category: "Accessories" },
    { id: 6, name: "Phone Case", price: 19.99, category: "Accessories" },
  ];

  return (
    <div className="py-16">
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
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 h-64 flex items-center justify-center relative overflow-hidden">
                <svg
                  className="w-24 h-24 text-gray-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {product.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Add to Cart
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
