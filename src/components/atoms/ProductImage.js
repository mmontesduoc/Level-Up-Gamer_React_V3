import React from "react";

const ProductImage = ({ src, alt, className = "card-img-top-carro" }) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
    />
  );
};

export default ProductImage;
