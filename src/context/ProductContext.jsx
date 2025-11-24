import React, { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Math.random() }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...updatedProduct, id } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const grandTotal = filteredProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchQuery,
        setSearchQuery,
        categoryFilter,
        setCategoryFilter,
        addProduct,
        updateProduct,
        deleteProduct,
        grandTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
