import { Link, useLocation } from "react-router";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link
            to="/"
            className="text-3xl font-extrabold hover:text-blue-200 transition-colors duration-200 flex items-center gap-3"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="hidden sm:inline">Shopping Cart</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`px-5 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                isActive("/")
                  ? "bg-blue-900 text-white shadow-lg scale-105"
                  : "hover:bg-blue-700 text-blue-100 hover:scale-105"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`px-5 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                isActive("/shop")
                  ? "bg-blue-900 text-white shadow-lg scale-105"
                  : "hover:bg-blue-700 text-blue-100 hover:scale-105"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className={`px-5 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                isActive("/cart")
                  ? "bg-blue-900 text-white shadow-lg scale-105"
                  : "hover:bg-blue-700 text-blue-100 hover:scale-105"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
