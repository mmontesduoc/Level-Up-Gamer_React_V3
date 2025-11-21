import React from "react";
import Button from "../atoms/Button";

const FilterButton = ({ label, isActive, onClick, className = "m-2 filter-btn" }) => {
  const variant = isActive ? "primary" : "outline-primary";
  const activeClass = isActive ? "active" : "";
  const combinedClass = `${className} ${activeClass}`.trim();

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={combinedClass}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
