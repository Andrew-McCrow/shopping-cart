import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import Navbar from "../components/Navbar.jsx";
import { CartProvider } from "../cart-context.jsx";

const renderWithProviders = (initialEntries = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </MemoryRouter>,
  );
};

describe("Navbar", () => {
  it("should render navigation links", () => {
    renderWithProviders();

    expect(screen.getByText("Octopus Store")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
  });

  it("should show active state for home page", () => {
    renderWithProviders(["/"]);

    const homeLink = screen.getByText("Home").closest("a");
    expect(homeLink).toHaveClass("bg-blue-900");
  });

  it("should show active state for shop page", () => {
    renderWithProviders(["/shop"]);

    const shopLink = screen.getByText("Shop").closest("a");
    expect(shopLink).toHaveClass("bg-blue-900");
  });

  it("should show active state for cart page", () => {
    renderWithProviders(["/cart"]);

    const cartLink = screen.getByText(/Cart/).closest("a");
    expect(cartLink).toHaveClass("bg-blue-900");
  });

  it("should display cart count", () => {
    renderWithProviders();

    // Should show Cart (0) when cart is empty
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  });

  it("should render octopus logo", () => {
    renderWithProviders();

    const logoSvg = screen.getByText("Octopus Store").previousElementSibling;
    expect(logoSvg).toBeInTheDocument();
    expect(logoSvg.tagName).toBe("svg");
  });
});
