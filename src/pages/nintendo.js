import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import { nintendoProducts } from "../data/nintendoProducts";
import useProductFilter from "../hooks/useProductFilter";
import useCart from "../hooks/useCart";
import ProductPageTemplate from "../components/templates/ProductPageTemplate";

const Nintendo = () => {
  const { selectedCategory, setSelectedCategory, filteredProducts } =
    useProductFilter(nintendoProducts);
  const { handleAddToCart } = useCart();

  const filters = [
    { value: "all", label: "Todos los Productos" },
    { value: "consoles", label: "Consolas" },
    { value: "games", label: "Juegos" },
    { value: "accessories", label: "Accesorios" },
  ];

  return (
    <ProductPageTemplate
      pageTitle="NINTENDO"
      pageSubtitle="Descubre el mundo de Nintendo con nuestras consolas y juegos exclusivos"
      filters={filters}
      activeFilter={selectedCategory}
      onFilterChange={setSelectedCategory}
      products={filteredProducts}
      onAddToCart={handleAddToCart}
    />
  );
};

export default Nintendo;
