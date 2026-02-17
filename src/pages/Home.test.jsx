import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import Home from "../pages/Home.jsx";

const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
};

describe("Home", () => {
  it("should render hero section with title and description", () => {
    renderWithRouter();

    expect(screen.getByText("Welcome to Octopus Store")).toBeInTheDocument();
    expect(
      screen.getByText("Discover amazing products at unbeatable prices"),
    ).toBeInTheDocument();
  });

  it("should have call-to-action button linking to shop", () => {
    renderWithRouter();

    const ctaButton = screen.getByText("Start Shopping →");
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest("a")).toHaveAttribute("href", "/shop");
  });

  it("should render features section", () => {
    renderWithRouter();

    expect(screen.getByText("Why Shop With Us")).toBeInTheDocument();
  });

  it("should display quality guarantee feature", () => {
    renderWithRouter();

    expect(screen.getByText("Quality Guaranteed")).toBeInTheDocument();
  });

  it("should display fast shipping feature", () => {
    renderWithRouter();

    expect(screen.getByText("Fast Shipping")).toBeInTheDocument();
  });

  it("should display customer support feature", () => {
    renderWithRouter();

    expect(screen.getByText("24/7 Support")).toBeInTheDocument();
  });

  it("should render final call-to-action section", () => {
    renderWithRouter();

    expect(screen.getByText("Ready to Start Shopping?")).toBeInTheDocument();
    expect(
      screen.getByText("Join thousands of satisfied customers"),
    ).toBeInTheDocument();
  });

  it("should have multiple shop links", () => {
    renderWithRouter();

    const shopLinks = screen.getAllByText(/Shop/);
    expect(shopLinks.length).toBeGreaterThan(0);
  });
});
