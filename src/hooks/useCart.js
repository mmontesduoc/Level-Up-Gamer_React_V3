import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState(0);

  const handleAddToCart = (e) => {
    if (e) {
      e.preventDefault();
      const button = e.currentTarget;
      const originalText = button.textContent;

      button.textContent = "¡Agregado!";
      button.style.backgroundColor = "#28a745";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = "";
      }, 2000);
    }

    setCart((prevCart) => prevCart + 1);
  };

  return {
    cart,
    handleAddToCart,
  };
};

export default useCart;
