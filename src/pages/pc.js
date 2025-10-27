import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import i3 from "../images/i3.jpg";
import i7 from "../images/i7.jpg";
import asus from "../images/asus.jpg";
import ryzen from "../images/ryzeb5.jpg";
import ryzen7 from "../images/ryzen7.jpg";
import hp from "../images/notehp.jpg";
import docimg from "../images/doc.jpg";
import baseimg from "../images/base.jpg";



// Lista de productos
const products = [
  {
    id: 1,
    category: "consoles",
    name: "PC escrotiorio HP Slim, Intel Core i3",
    img: i3,
    specs: {
      "Capacidad Disco": "256 GB SSD",
      "Capacidad Memoria RAM": "8 GB",
      "Procesador": "16 GB",
      "Tipo de Equipo": "Sobremesa",
    },
    description: "Disfruta de este PC Intel Core i3, potencia y velocidad en un solo equipo.",
    price: "$515.990",
  },
  {
    id: 2,
    category: "consoles",
    name: "Pc Dell Optiplex 7050 Intel Core I7",
    img: i7,
    specs: {
      "Capacidad Disco": "256 GB SSD",
      "Capacidad Memoria RAM": "16 GB",
      "Procesador": "Intel Core I7-7700T",
      "Tipo de Equipo": "Sobremesa",
    },
    description: "Disfruta de este PC Intel Core i7, potencia y velocidad en un solo equipo.",
    price: "$785.990",
  },
  {
    id: 3,
    category: "consoles",
    name: "Notebook Asus VivoBook 14 Core i3",
    img: asus,
    specs: {
      "Capacidad Disco": "128 GB SSD",
      "Capacidad Memoria RAM": "4 GB",
      "Procesador": "Intel Core I3",
      "Tipo de Equipo": "Portatil",
    },
    description: "Disfruta de este Notebook Intel Core i3, potencia y velocidad en un solo equipo.",
    price: "$269.990",
  },
  {
    id: 4,
    category: "consoles",
    name: "PC Ryzen 5 5500 | RTX 3050",
    img: ryzen,
    specs: {
      "Capacidad Disco": "500 GB SSD",
      "Capacidad Memoria RAM": "16 GB",
      "Procesador": "Ryzen 5 5500",
      "Tipo de Equipo": "Escritorio Gamer",
    },
    description: "Descubre nuestro equipo de entrada ideal para gaming y tareas demandantes.",
    price: "$539.990",
  },
  {
    id: 5,
    category: "consoles",
    name: "PC Gamer Amd Ryzen 7 5700G 8-Core",
    img: ryzen7,
    specs: {
      "Capacidad Disco": "1 TB SSD",
      "Capacidad Memoria RAM": "16 GB",
      "Procesador": "Ryzen 7 5700G 8-Core",
      "Tipo de Equipo": "Escritorio Gamer",
    },
    description: "Descubre nuestro equipo de entrada ideal para gaming y tareas demandantes.",
    price: "$959.990",
  },
  {
    id: 6,
    category: "consoles",
    name: "Notebook HP 14-em0002la",
    img: hp,
    specs: {
      "Capacidad Disco": "512 GB SSD",
      "Capacidad Memoria RAM": "8 GB",
      "Procesador": "Ryzen 5",
      "Tipo de Equipo": "Portatil",
    },
    description: "Disfruta de este Notebook Ryzen 5, potencia y velocidad en un solo equipo.",
    price: "$559.990",
  },
  {
    id: 7,
    category: "accessories",
    name: "Base para Notebook Kingston",
    img: baseimg,
    specs: {
      "Color del producto": "Gris",
      "Certificación": "TAA",
      "Plegable": "Si",
      "Tipo de producto": "Soporte ordenador",
    },
    description: "Diseño con tecnología ajustable en altura y ángulo para mejorar la postura.",
    price: "$31.990",
  },
  {
    id: 8,
    category: "accessories",
    name: "Docking Station USB-C",
    img: docimg,
    specs: {
      "Tipo de Producto": "Alámbrico",
      "Interfaz de host": "USB 3.0",
      "Ethernet": "Si",
      "Colores": "Gris",
    },
    description: "Convierte su ordenador portátil Windows en una estación de trabajo portátil.",
    price: "$75.990",
  },
];


const PlayStation = () => {
  return (
    <>
      <div style={{ height: "25px" }}></div> {/* espacio de 50px */}

      {/* Header */}
      <div
        className="container-fluid-banner text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #E60012, #0066CC)",
          marginBottom: "50px",
        }}
      >
        <h1 className="display-3 fw-bold">
          <i className="fas fa-gamepad"></i> PC Escritorio / Gamer
        </h1>
        <p className="lead">
          Descubre el mundo de los PC con nuestros equipos de escritorio y gamer
        </p>
      </div>

      {/* Filtros de Categoría */}
      <div className="container mb-5">
        <div className="text-center">
          <button className="btn btn-outline-primary m-2 filter-btn" data-category="all">
            Todos los Productos
          </button>
          <button className="btn btn-outline-primary m-2 filter-btn" data-category="consoles">
            Consolas
          </button>
          <button className="btn btn-outline-primary m-2 filter-btn" data-category="games">
            Juegos
          </button>
          <button className="btn btn-outline-primary m-2 filter-btn" data-category="accessories">
            Accesorios
          </button>
        </div>
      </div>

      {/* Sección de productos */}
      <section className="game-section-carro">
        <div className="container">
          <div className="row" id="products-container">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-6 mb-4 product-item-carro"
                data-category={product.category}
              >
                <div className="card h-100">
                  <img src={product.img} className="card-img-top-carro" alt={product.name} />
                  <div className="card-body-carro d-flex flex-column">
                    <h5 className="card-title-carro">{product.name}</h5>

                    {product.specs && (
                      <div className="bg-primary bg-opacity-25 p-3 rounded mb-3">
                        <h6 className="text-primary mb-2">
                          <i className="fas fa-list"></i> Especificaciones:
                        </h6>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="d-flex justify-content-between border-bottom border-secondary py-1"
                          >
                            <span>{key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="card-text-carro">{product.description}</p>
                    <div className="mt-auto">
                      <div className="text-center-carro mb-3">
                        <span className="precio">{product.price}</span>
                      </div>
                      <button className="btn btn-primary w-100 add-to-cart-carro">
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

export default PlayStation;
