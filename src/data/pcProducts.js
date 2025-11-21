import i3 from "../images/i3.jpg";
import i7 from "../images/i7.jpg";
import asus from "../images/asus.jpg";
import ryzen from "../images/ryzeb5.jpg";
import ryzen7 from "../images/ryzen7.jpg";
import hp from "../images/notehp.jpg";
import docimg from "../images/doc.jpg";
import baseimg from "../images/base.jpg";

export const pcProducts = [
  {
    id: 1,
    category: "pc",
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
    category: "pc",
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
    category: "notebook",
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
    category: "pc",
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
    category: "pc",
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
    category: "notebook",
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
