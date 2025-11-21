import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false
}) => {
  const baseClass = `btn btn-${variant}`;
  const widthClass = fullWidth ? "w-100" : "";
  const combinedClass = `${baseClass} ${widthClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
