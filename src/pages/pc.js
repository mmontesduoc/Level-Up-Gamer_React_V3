import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import { pcProducts } from "../data/pcProducts";
import useProductFilter from "../hooks/useProductFilter";
import useCart from "../hooks/useCart";
import ProductPageTemplate from "../components/templates/ProductPageTemplate";

const Pc = () => {
  const { selectedCategory, setSelectedCategory, filteredProducts } =
    useProductFilter(pcProducts);
  const { handleAddToCart } = useCart();

  const filters = [
    { value: "all", label: "Todos los Productos" },
    { value: "pc", label: "Desktop" },
    { value: "notebook", label: "Notebook" },
    { value: "accessories", label: "Accesorios" },
  ];

  return (
    <ProductPageTemplate
      pageTitle="PC Escritorio / Gamer"
      pageSubtitle="Descubre el mundo de los PC con nuestros equipos de escritorio y gamer"
      filters={filters}
      activeFilter={selectedCategory}
      onFilterChange={setSelectedCategory}
      products={filteredProducts}
      onAddToCart={handleAddToCart}
    />
  );
};

export default Pc;
