import { useState, useMemo } from "react";

const useProductFilter = (products, initialCategory = "all") => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all" || selectedCategory === "todos") {
      return products;
    }
    return products.filter(
      (product) =>
        product.category === selectedCategory ||
        product.categoria === selectedCategory
    );
  }, [products, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  };
};

export default useProductFilter;
