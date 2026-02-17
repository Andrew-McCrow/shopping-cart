import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import Cart from "../pages/Cart.jsx";
import { CartProvider } from "../cart-context.jsx";

const renderWithProviders = () => {
  return render(
    <MemoryRouter>
      <CartProvider>
        <Cart />
      </CartProvider>
    </MemoryRouter>,
  );
};

describe("Cart", () => {
  it("should show empty cart message when cart is empty", () => {
    renderWithProviders();

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
    expect(
      screen.getByText("Start shopping to add items to your cart!"),
    ).toBeInTheDocument();
    expect(screen.getByText("Browse Products")).toBeInTheDocument();
  });

  it("should display cart title", () => {
    renderWithProviders();

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  it("should have link to shop when cart is empty", () => {
    renderWithProviders();

    const shopLink = screen.getByText("Browse Products");
    expect(shopLink.closest("a")).toHaveAttribute("href", "/shop");
  });

  it("should render cart icon in empty state", () => {
    renderWithProviders();

    const cartIcon = screen
      .getByText("Your cart is empty")
      .closest("div")
      .querySelector("svg");
    expect(cartIcon).toBeInTheDocument();
  });
});
