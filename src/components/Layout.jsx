import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { CartProvider } from "../cart-context.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>
    </div>
  );
}

export default Layout;
