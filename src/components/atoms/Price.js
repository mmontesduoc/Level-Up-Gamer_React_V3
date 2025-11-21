import React from "react";

const Price = ({ price, className = "precio" }) => {
  return (
    <span className={className}>
      {price}
    </span>
  );
};

export default Price;
