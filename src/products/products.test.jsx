import { describe, it, expect } from 'vitest';
import { productsOld } from '../products/products.jsx';

describe('Products Data', () => {
  it('should have products array with expected structure', () => {
    expect(productsOld).toBeDefined();
    expect(Array.isArray(productsOld)).toBe(true);
    expect(productsOld.length).toBeGreaterThan(0);
  });

  it('should have valid product structure', () => {
    const product = productsOld[0];
    
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
    
    expect(typeof product.id).toBe('number');
    expect(typeof product.name).toBe('string');
    expect(typeof product.price).toBe('number');
    expect(typeof product.category).toBe('string');
  });

  it('should have unique product IDs', () => {
    const ids = productsOld.map(product => product.id);
    const uniqueIds = new Set(ids);
    
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have positive prices', () => {
    productsOld.forEach(product => {
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('should have non-empty names', () => {
    productsOld.forEach(product => {
      expect(product.name.length).toBeGreaterThan(0);
    });
  });

  it('should have valid categories', () => {
    const validCategories = ['Electronics', 'Accessories'];
    
    productsOld.forEach(product => {
      expect(validCategories).toContain(product.category);
    });
  });
});