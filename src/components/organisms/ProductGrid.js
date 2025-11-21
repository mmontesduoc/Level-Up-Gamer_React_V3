import React from "react";
import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products, onAddToCart, emptyMessage = "No hay productos disponibles en esta categoría." }) => {
  return (
    <section className="game-section-carro">
      <div className="container">
        <div className="row" id="products-container">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-6 mb-4 product-item-carro"
              data-category={product.category || product.categoria}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}

          {products.length === 0 && (
            <p className="text-center text-muted">
              {emptyMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
