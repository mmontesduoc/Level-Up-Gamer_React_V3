import React from "react";
import PageHeader from "../atoms/PageHeader";
import FilterBar from "../organisms/FilterBar";
import ProductGrid from "../organisms/ProductGrid";

/**
 * Template para páginas de productos
 *
 * Este es un TEMPLATE (nivel 4 de Atomic Design)
 * - Define la ESTRUCTURA de una página de productos
 * - NO contiene datos específicos
 * - Recibe todo por props
 * - Es REUTILIZABLE para Nintendo, PlayStation, PC, etc.
 *
 * @param {Object} props
 * @param {string} props.pageTitle - Título de la página (ej: "NINTENDO")
 * @param {string} props.pageSubtitle - Subtítulo descriptivo
 * @param {Array} props.filters - Array de filtros [{value, label}]
 * @param {string} props.activeFilter - Filtro actualmente activo
 * @param {Function} props.onFilterChange - Callback al cambiar filtro
 * @param {Array} props.products - Array de productos filtrados
 * @param {Function} props.onAddToCart - Callback al agregar al carrito
 */
const ProductPageTemplate = ({
  pageTitle,
  pageSubtitle,
  pageIcon = "fa-gamepad",
  filters,
  activeFilter,
  onFilterChange,
  products,
  onAddToCart,
  customHeader = null, // Permite header personalizado (ej: Tienda)
}) => {
  return (
    <>
      <div style={{ height: "25px" }}></div>

      {/* Header - puede ser personalizado o usar PageHeader por defecto */}
      {customHeader || (
        <PageHeader
          title={pageTitle}
          subtitle={pageSubtitle}
          icon={pageIcon}
        />
      )}

      {/* Barra de filtros */}
      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />

      {/* Grid de productos */}
      <ProductGrid
        products={products}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default ProductPageTemplate;
