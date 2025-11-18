import img5 from "../images/5.jpg";
import img4 from "../images/4.jpg";
import imgrdr from "../images/rdr.jpg";
import mk from "../images/mortal-kombat.jpg";
import minimg from "../images/min.jpg";
import robocop from "../images/robo.jpg";
import mando from "../images/mandoplay.jpg";
import mandoauto from "../images/auto.jpg";

export const playstationProducts = [
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
