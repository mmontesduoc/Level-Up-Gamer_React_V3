import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import "../styles/Tienda.css";

// Importar SOLO las imágenes que existen en el HTML original
import mousepad from "../images/mousepad.PNG";
import polera1 from "../images/polera1.PNG";
import polera2 from "../images/polera2.PNG";
import pantuflas from "../images/pantuflas.PNG";
import catan from "../images/catan.PNG";
import kiogofnewyork from "../images/kiogofnewyork.PNG";
import space from "../images/space.PNG";

const Tienda = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [cart, setCart] = useState(0);

  const productos = [
    // Accesorios
    {
      id: 1,
      nombre: "Mousepad",
      precio: 29990,
      imagen: mousepad,
      categoria: "accesorios",
      especificaciones: [
        { label: "Tamaño", valor: "Medio" },
        { label: "Largo", valor: "355 mm" },
        { label: "Ancho", valor: "255 mm" },
        { label: "Grosor", valor: "3 mm" },
      ],
      descripcion:
        "Ofrece un área de juego amplia con iluminación RGB personalizable.",
    },
    // Ropa
    {
      id: 2,
      nombre: "Polera Gamer",
      precio: 14990,
      imagen: polera1,
      categoria: "ropa",
      especificaciones: [
        { label: "Tallas", valor: "S M L XL" },
        { label: "Material", valor: "Algodón" },
        { label: "Colores", valor: "Negro/blanco" },
        { label: "Origen", valor: "Chileno" },
      ],
      descripcion:
        "Una camiseta estilizada, con la posibilidad de personalizarla con tu diseño favorito.",
    },
    {
      id: 3,
      nombre: "Polera Gamer",
      precio: 14990,
      imagen: polera2,
      categoria: "ropa",
      especificaciones: [
        { label: "Tallas", valor: "S M L XL" },
        { label: "Material", valor: "Algodón" },
        { label: "Colores", valor: "Negro/blanco" },
        { label: "Origen", valor: "Chileno" },
      ],
      descripcion:
        "Una camiseta estilizada, con la posibilidad de personalizarla con tu diseño favorito.",
    },
    {
      id: 4,
      nombre: "Pantuflas Starwars BobbaFett",
      precio: 19990,
      imagen: pantuflas,
      categoria: "ropa",
      especificaciones: [
        { label: "Tallas", valor: "36-42" },
        { label: "Material", valor: "Felpa suave" },
        { label: "Personaje", valor: "Bobba Fett" },
        { label: "Licencia", valor: "Oficial Star Wars" },
      ],
      descripcion:
        "Pantuflas cómodas y divertidas con diseño de Bobba Fett de Star Wars.",
    },
    // Juegos de Mesa
    {
      id: 5,
      nombre: "Catan",
      precio: 29990,
      imagen: catan,
      categoria: "juegos",
      especificaciones: [
        { label: "Autor", valor: "Klaus Teuber" },
        { label: "Grupo de edad", valor: "+12 años" },
        { label: "Jugadores", valor: "2-4" },
        { label: "Piezas pequeñas", valor: "Sí" },
      ],
      descripcion:
        "Un juego de estrategia donde jugadores compiten por colonizar y expandirse.",
    },
    {
      id: 6,
      nombre: "King of Newyork",
      precio: 35990,
      imagen: kiogofnewyork,
      categoria: "juegos",
      especificaciones: [
        { label: "Autor", valor: "Nicholas St. John" },
        { label: "Grupo de edad", valor: "+12 años" },
        { label: "Jugadores", valor: "2-6" },
        { label: "Piezas pequeñas", valor: "Sí" },
      ],
      descripcion:
        "King of New York es un juego diseñado para 2 a 6 jugadores.",
    },
    {
      id: 7,
      nombre: "Space Base",
      precio: 43990,
      imagen: space,
      categoria: "juegos",
      especificaciones: [
        { label: "Autor", valor: "John D Clair" },
        { label: "Grupo de edad", valor: "+12 años" },
        { label: "Jugadores", valor: "2-4" },
        { label: "Piezas pequeñas", valor: "No" },
      ],
      descripcion:
        "Como capitán de una base espacial, tu trabajo consiste en reclutar nuevas naves.",
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const button = e.currentTarget;
    const originalText = button.textContent;

    button.textContent = "¡Agregado!";
    button.style.backgroundColor = "#28a745";

    setCart(cart + 1);

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "";
    }, 2000);
  };

  const filteredProducts =
    activeFilter === "todos"
      ? productos
      : productos.filter((producto) => producto.categoria === activeFilter);

  return (
    <>
      <div style={{ height: "25px" }}></div> {/* espacio de 25px */}
      {/* Header de la tienda */}
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
      {/* Filtros de Categoría */}
      <div className="container mb-5">
        <div className="text-center">
          <button
            className={`filter-btn ${activeFilter === "todos" ? "active" : ""}`}
            onClick={() => handleFilterClick("todos")}
          >
            Todos los Productos
          </button>
          <button
            className={`filter-btn ${activeFilter === "ropa" ? "active" : ""}`}
            onClick={() => handleFilterClick("ropa")}
          >
            Ropa
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "juegos" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("juegos")}
          >
            Juegos de Mesa
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "accesorios" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("accesorios")}
          >
            Accesorios
          </button>
        </div>
      </div>
      {/* Sección de productos */}
      <section className="game-section-carro">
        <div className="container">
          <div className="row" id="products-container">
            {filteredProducts.map((producto) => (
              <div
                key={producto.id}
                className="col-lg-3 col-md-6 mb-4 product-item-carro"
                data-category={producto.categoria}
              >
                <div className="card h-100">
                  <img
                    src={producto.imagen}
                    className="card-img-top-carro"
                    alt={producto.nombre}
                  />
                  <div className="card-body-carro d-flex flex-column">
                    <h5 className="card-title-carro">{producto.nombre}</h5>

                    {/* Especificaciones del producto */}
                    <div className="bg-primary bg-opacity-25 p-3 rounded mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fas fa-list"></i> Especificaciones:
                      </h6>
                      {producto.especificaciones.map((spec, index) => (
                        <div
                          key={index}
                          className={`d-flex justify-content-between ${
                            index < producto.especificaciones.length - 1
                              ? "border-bottom border-secondary"
                              : ""
                          } py-1`}
                        >
                          <span>{spec.label}:</span>
                          <span>{spec.valor}</span>
                        </div>
                      ))}
                    </div>

                    <p className="card-text-carro">{producto.descripcion}</p>
                    <div className="mt-auto">
                      <div className="text-center-carro mb-3">
                        <span className="precio">
                          ${producto.precio.toLocaleString("es-CL")}
                        </span>
                      </div>
                      <button
                        className="btn btn-primary w-100 add-to-cart-carro"
                        onClick={handleAddToCart}
                      >
                        <i className="fas fa-cart-plus"></i> Agregar al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tienda;
