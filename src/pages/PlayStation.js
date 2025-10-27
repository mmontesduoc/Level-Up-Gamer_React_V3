import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import img5 from "../images/5.jpg";
import img4 from "../images/4.jpg";
import imgrdr from "../images/rdr.jpg";
import mk from "../images/mortal-kombat.jpg";
import minimg from "../images/min.jpg";
import robocop from "../images/robo.jpg";
import mando from "../images/mandoplay.jpg";
import mandoauto from "../images/auto.jpg";



// Lista de productos
const products = [
  {
    id: 1,
    category: "consoles",
    name: "Consola PS5 Slim Con Disco",
    img: img5,
    specs: {
      Capacidad: "1 TB",
      "Cantidad de Controles": 1,
      "Capacidad Memoria RAM": "16 GB",
      "Tipo de Consola": "Sobremesa",
    },
    description: "Disfruta de tiempos de carga superveloces, una experiencia mas inmersiva.",
    price: "$349.990",
  },
  {
    id: 2,
    category: "consoles",
    name: "Playstation 4 Slim Nueva + Gta 5 Negro",
    img: img4,
    specs: {
      Capacidad: "1 TB",
      "Cantidad de Controles": 1,
      "Conectividad Wi-Fi": "Si",
      "Tipo de Consola": "Sobremesa",
    },
    description: "Versión portátil y accesible que combina ligereza Y practicidad.",
    price: "$199.990",
  },
  {
    id: 3,
    category: "games",
    name: "Red Dead Redemption II",
    img: imgrdr,
    specs: {
      Género: "Acción-Aventura",
      Jugadores: "1 jugador",
      Clasificación: "R (18)",
      Espacio: "18.2 GB",
    },
    description: "Red Dead Redemption 2 es un videojuego de acción-aventura de mundo abierto.",
    price: "$69.990",
  },
  {
    id: 4,
    category: "games",
    name: "Mortal Kombat XL",
    img: mk,
    specs: {
      Género: "Lucha",
      Jugadores: "1-2 jugadores",
      Clasificación: "R (18)",
      Espacio: "5.7 GB",
    },
    description: "Mortal Kombat XL es un excelente juego de lucha, alabado por su jugabilidad.",
    price: "$59.990",
  },
  {
    id: 5,
    category: "games",
    name: "Mindsey 3",
    img: minimg,
    specs: {
      Género: "Acción-Aventura",
      Jugadores: "1",
      Clasificación: "E (Everyone)",
      Espacio: "6.8 GB",
    },
    description: "MindsEye es un videojuego de acción y aventura lineal en tercera persona.",
    price: "$59.990",
  },
  {
    id: 6,
    category: "accessories",
    name: "Robocop Rogue City",
    img: robocop,
    specs: {
      Género: "Acción-Aventura",
      Jugadores: "1",
      Clasificación: "E (Everyone)",
      Espacio: "15.8 GB",
    },
    description: "Rogue City es un juego de disparos en primera persona. Es una historia original.",
    price: "$69.990",
  },
  {
    id: 7,
    category: "accessories",
    name: "Control Inalámbrico DualSense PSP 5",
    img: mando,
    specs: {
      Conexión: "Bluetooth/USB-C",
      Batería: "40 horas",
      Vibración: "HD Rumble",
      NFC: "Compatible amiibo",
    },
    description: "Toma el control con un diseño avanzado de dos tonos que combina un diseño intuitivo.",
    price: "$69.990",
  },
  {
    id: 8,
    category: "accessories",
    name: "HORI Racing Wheel Apex PS5",
    img: mandoauto,
    specs: {
      "Tipo de Producto": "Controles Gamers",
      Incluye: "Pedales",
      Acceso: "Todos los puertos",
      Colores: "Negro",
    },
    description: "Ofrece lo mejor en calidad, opciones de personalización y simulación de carreras.",
    price: "$195.990",
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
          <i className="fas fa-gamepad"></i> PLAYSTATION
        </h1>
        <p className="lead">
          Descubre el mundo PlayStation con nuestras consolas y juegos exclusivos
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
