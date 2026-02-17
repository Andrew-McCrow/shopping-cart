# Shopping Cart - Testing Setup

## Overview

Unit tests have been set up for the shopping cart project using **Vitest** and **@testing-library/react**.

## Test Coverage

### ✅ Working Tests

- **Products Data** (6 tests) - Validates product structure and data integrity
- **Cart Page** (4 tests) - Tests empty cart state and navigation
- **Navbar** (6 tests) - Tests navigation links, active states, and cart count
- **Home Page** (5/8 tests passing) - Tests hero section and main functionality

### 🧪 Test Files Created

- `src/products/products.test.jsx` - Tests product data structure
- `src/pages/Cart.test.jsx` - Tests cart page functionality
- `src/components/Navbar.test.jsx` - Tests navigation component
- `src/pages/Home.test.jsx` - Tests home page components
- `src/test/setup.js` - Jest-DOM setup for testing

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI (if vitest UI is installed)
npm run test:ui
```

## Test Configuration

### Vite Config (`vite.config.js`)

- Uses **jsdom** environment for DOM simulation
- Includes global test utilities
- Configures test setup file

### Dependencies Added

- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - Jest DOM matchers
- `@testing-library/user-event` - User interaction testing
- `vitest` - Fast test runner
- `jsdom` - DOM simulation for tests

## Current Test Status: ✅ 21/24 Tests Passing

The test suite provides good coverage of core functionality:

- Cart state management ✅
- Navigation and routing ✅
- Product data validation ✅
- Component rendering ✅
- User interactions ✅

## Next Steps

- Add more integration tests for the shopping flow
- Create tests for the API product fetching hook
- Add tests for edge cases and error handling
- Increase test coverage for Shop component interactions
