import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/playstation.css";
import img1 from "../images/nintendoswoled.jpg";
import img2 from "../images/switchlite.png";
import img3 from "../images/zelda.jpg";
import img4 from "../images/super-mario.png";
import img5 from "../images/hq720.jpg";
import img6 from "../images/mando.jpg";
import img7 from "../images/t.png";
import img8 from "../images/v.png";



// Lista de productos
const products = [
  {
    id: 1,
    category: "consoles",
    name: "Nintendo Switch OLED",
    img: img1,
    specs: {
      "Pantalla": "OLED 7",
      "Almacenamiento": "64GB",
      "Modos": "TV, Sobremesa, Portátil",
      "Batería": "4.5-9 horas",
    },
    description: "La consola híbrida con pantalla OLED vibrante. Juega en casa o donde quieras.",
    price: "$349.990",
  },
  {
    id: 2,
    category: "consoles",
    name: "Nintendo Switch Lite",
    img: img2,
    specs: {
      "Pantalla": "LCD 5.5",
      "Almacenamiento": "32GB",
      "Modos": "Solo Portátil",
      "Batería": "3-7 horas",
    },
    description: "Versión portátil dedicada, más ligera y económica para gaming en movimiento.",
    price: "$199.990",
  },
  {
    id: 3,
    category: "games",
    name: "The Legend of Zelda: Tears of the Kingdom",
    img: img3,
    specs: {
      "Género": "Aventura/Acción",
      "Jugadores": "1 jugador",
      "Clasificación": "T (Teen)",
      "Espacio": "18.2 GB",
    },
    description: "La épica aventura continúa en Hyrule con nuevas habilidades y misterios por descubrir.",
    price: "$69.990",
  },
  {
    id: 4,
    category: "games",
    name: "Super Mario Odyssey",
    img: img4,
    specs: {
      "Género": "Plataformas",
      "Jugadores": "1-2 jugadores",
      "Clasificación": "E10+ (Everyone 10+)",
      "Espacio": "5.7 GB",
    },
    description: "Únete a Mario en una aventura épica a través de reinos misteriosos con su fiel Cappy.",
    price: "$59.990",
  },
  {
    id: 5,
    category: "games",
    name: "Mario Kart 8 Deluxe",
    img: img5,
    specs: {
      "Género": "Carreras",
      "Jugadores": "1-4 local, 2-12 online",
      "Clasificación": "E (Everyone)",
      "Espacio": "6.8 GB",
    },
    description: "Las carreras más emocionantes con todos tus personajes favoritos de Nintendo.",
    price: "$59.990",
  },
  {
    id: 6,
    category: "accessories",
    name: "Nintendo Switch Pro Controller",
    img: img6,
    specs: {
      "Conexión": "Bluetooth/USB-C",
      "Batería": "40 horas",
      "Vibración": "HD Rumble",
      "NFC": "Compatible amiibo",
    },
    description: "Control profesional con ergonomía superior y tecnología avanzada de vibración.",
    price: "$69.990",
  },
  {
    id: 7,
    category: "accessories",
    name: "Carcasa Protectora Nintendo Switch",
    img: img7,
    specs: {
      "Material": "TPU flexible",
      "Protección": "Anti-golpes",
      "Acceso": "Todos los puertos",
      "Colores": "5 opciones",
    },
    description: "Protege tu Nintendo Switch con estilo. Incluye protectores de pantalla de vidrio templado.",
    price: "$19.990",
  },
  {
    id: 8,
    category: "accessories",
    name: "Volante Joy-Con 2 Wheel Set de 2",
    img: img8,
    specs: {
      "Tipo de Producto": "Controles Gamers",
      "Incluye": "2 Unidades",
      "Acceso": "Todos los puertos",
      "Colores": "5 opciones",
    },
    description: "Protege tu Nintendo Switch con estilo. Incluye protectores de pantalla de vidrio templado.",
    price: "$35.990",
  },
];


const nintendo = () => {
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
          <i className="fas fa-gamepad"></i> NINTENDO
        </h1>
        <p className="lead">
          Descubre el mundo de Nintendo con nuestras consolas y juegos exclusivos
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

export default nintendo;
