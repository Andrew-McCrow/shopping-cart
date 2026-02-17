import { Link } from "react-router";

function Cart() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-12 text-center">
          Shopping Cart
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-gray-100">
          {/* Empty State */}
          <div className="text-center py-16">
            <div className="mb-8">
              <svg
                className="w-32 h-32 mx-auto text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Start shopping to add items to your cart!
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Browse Products
            </Link>
          </div>

          {/* Cart Summary */}
          <div className="mt-10 border-t-2 border-gray-200 pt-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex justify-between items-center mb-5">
                <span className="text-lg text-gray-700 font-medium">
                  Subtotal:
                </span>
                <span className="text-xl font-bold">$0.00</span>
              </div>
              <div className="flex justify-between items-center mb-5">
                <span className="text-lg text-gray-700 font-medium">
                  Shipping:
                </span>
                <span className="text-xl font-bold">$0.00</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-extrabold border-t-2 border-gray-300 pt-6">
                <span>Total:</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  $0.00
                </span>
              </div>
            </div>
            <button
              className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 rounded-xl font-bold text-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:from-gray-400 disabled:to-gray-500"
              disabled
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
