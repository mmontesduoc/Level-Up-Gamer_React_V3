import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import "../styles/Tienda.css";
import { tiendaProducts } from "../data/tiendaProducts";
import useProductFilter from "../hooks/useProductFilter";
import useCart from "../hooks/useCart";
import ProductPageTemplate from "../components/templates/ProductPageTemplate";

const Tienda = () => {
  const { selectedCategory, setSelectedCategory, filteredProducts } =
    useProductFilter(tiendaProducts, "todos");
  const { handleAddToCart } = useCart();

  const filters = [
    { value: "todos", label: "Todos los Productos" },
    { value: "ropa", label: "Ropa" },
    { value: "juegos", label: "Juegos de Mesa" },
    { value: "accesorios", label: "Accesorios" },
  ];

  // Header personalizado para Tienda (diferente al resto)
  const customHeader = (
    <div className="tienda-header text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold text-white mb-3">
          <i className="fas fa-gamepad"></i> TIENDA DE PRODUCTOS
        </h1>
        <p className="lead text-white">
          Descubre nuestro catálogo de diversos productos y accesorios
        </p>
      </div>
    </div>
  );

  return (
    <ProductPageTemplate
      customHeader={customHeader}
      filters={filters}
      activeFilter={selectedCategory}
      onFilterChange={setSelectedCategory}
      products={filteredProducts}
      onAddToCart={handleAddToCart}
    />
  );
};

export default Tienda;
