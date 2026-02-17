import { Link, useLocation } from "react-router";
import { useCart } from "../cart-context.jsx";

function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link
            to="/"
            className="text-3xl font-extrabold hover:text-blue-400 transition-colors duration-200 flex items-center gap-3"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              {/* Octopus body */}
              <ellipse cx="12" cy="8" rx="6" ry="4.5" />
              {/* Eyes */}
              <circle cx="10" cy="7" r="1" fill="white" />
              <circle cx="14" cy="7" r="1" fill="white" />
              <circle cx="10" cy="7" r="0.5" fill="black" />
              <circle cx="14" cy="7" r="0.5" fill="black" />
              {/* Arms/tentacles */}
              <path d="M6 11c-1 2-2 4-1 6s3 1 3-1-1-3 0-4" />
              <path d="M8 12c-2 1-3 3-2 5s3 0 2-2 1-2 1-3" />
              <path d="M16 12c2 1 3 3 2 5s-3 0-2-2-1-2-1-3" />
              <path d="M18 11c1 2 2 4 1 6s-3 1-3-1 1-3 0-4" />
              {/* Bottom tentacles */}
              <path d="M9 12c-1 3-1 5 1 6s2-1 1-3 0-2 0-3" />
              <path d="M12 12c0 3 0 5 0 6s0-1 0-3 0-2 0-3" />
              <path d="M15 12c1 3 1 5-1 6s-2-1-1-3 0-2 0-3" />
            </svg>
            <span className="hidden sm:inline">Octopus Store</span>
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
              Cart ({cartItems.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
