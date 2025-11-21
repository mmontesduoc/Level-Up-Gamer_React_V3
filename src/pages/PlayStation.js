import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import { playstationProducts } from "../data/playstationProducts";
import useProductFilter from "../hooks/useProductFilter";
import useCart from "../hooks/useCart";
import ProductPageTemplate from "../components/templates/ProductPageTemplate";

const PlayStation = () => {
  const { selectedCategory, setSelectedCategory, filteredProducts } =
    useProductFilter(playstationProducts);
  const { handleAddToCart } = useCart();

  const filters = [
    { value: "all", label: "Todos los Productos" },
    { value: "consoles", label: "Consolas" },
    { value: "games", label: "Juegos" },
    { value: "accessories", label: "Accesorios" },
  ];

  return (
    <ProductPageTemplate
      pageTitle="PLAYSTATION"
      pageSubtitle="Descubre el mundo PlayStation con nuestras consolas y juegos exclusivos"
      filters={filters}
      activeFilter={selectedCategory}
      onFilterChange={setSelectedCategory}
      products={filteredProducts}
      onAddToCart={handleAddToCart}
    />
  );
};

export default PlayStation;
