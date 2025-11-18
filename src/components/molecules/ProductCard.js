import React from "react";
import ProductImage from "../atoms/ProductImage";
import Price from "../atoms/Price";
import Button from "../atoms/Button";

const ProductCard = ({ product, onAddToCart }) => {
  const { img, name, specs, description, price, imagen, nombre, descripcion, precio, especificaciones } = product;

  // Soporte para ambos formatos de datos (nintendo/playstation/pc y tienda)
  const displayImage = img || imagen;
  const displayName = name || nombre;
  const displayDescription = description || descripcion;
  const displayPrice = price || `$${precio?.toLocaleString("es-CL")}`;
  const displaySpecs = specs || especificaciones;

  return (
    <div className="card h-100">
      <ProductImage src={displayImage} alt={displayName} />
      <div className="card-body-carro d-flex flex-column">
        <h5 className="card-title-carro">{displayName}</h5>

        {displaySpecs && (
          <div className="bg-primary bg-opacity-25 p-3 rounded mb-3">
            <h6 className="text-primary mb-2">
              <i className="fas fa-list"></i> Especificaciones:
            </h6>
            {Array.isArray(displaySpecs) ? (
              // Formato Tienda (array de objetos)
              displaySpecs.map((spec, index) => (
                <div
                  key={index}
                  className={`d-flex justify-content-between ${
                    index < displaySpecs.length - 1
                      ? "border-bottom border-secondary"
                      : ""
                  } py-1`}
                >
                  <span>{spec.label}:</span>
                  <span>{spec.valor}</span>
                </div>
              ))
            ) : (
              // Formato Nintendo/PlayStation/PC (objeto)
              Object.entries(displaySpecs).map(([key, value]) => (
                <div
                  key={key}
                  className="d-flex justify-content-between border-bottom border-secondary py-1"
                >
                  <span>{key}:</span>
                  <span>{value}</span>
                </div>
              ))
            )}
          </div>
        )}

        <p className="card-text-carro">{displayDescription}</p>
        <div className="mt-auto">
          <div className="text-center-carro mb-3">
            <Price price={displayPrice} />
          </div>
          <Button
            variant="primary"
            fullWidth
            className="add-to-cart-carro"
            onClick={onAddToCart}
          >
            <i className="fas fa-cart-plus"></i> Agregar al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
