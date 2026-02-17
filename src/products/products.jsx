export const productsOld = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Bag",
    price: 49.99,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Phone Case",
    price: 19.99,
    category: "Accessories",
  },
];

import { useState, useEffect } from "react";

// Custom hook to fetch products from Fake Store API
export const useProductsFakeStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
