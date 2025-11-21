import img1 from "../images/nintendoswoled.jpg";
import img2 from "../images/switchlite.png";
import img3 from "../images/zelda.jpg";
import img4 from "../images/super-mario.png";
import img5 from "../images/hq720.jpg";
import img6 from "../images/mando.jpg";
import img7 from "../images/t.png";
import img8 from "../images/v.png";

export const nintendoProducts = [
  {
    id: 1,
    category: "consoles",
    name: "Nintendo Switch OLED",
    img: img1,
    specs: {
      Pantalla: "OLED 7",
      Almacenamiento: "64GB",
      Modos: "TV, Sobremesa, Portátil",
      Batería: "4.5-9 horas",
    },
    description:
      "La consola híbrida con pantalla OLED vibrante. Juega en casa o donde quieras.",
    price: "$349.990",
  },
  {
    id: 2,
    category: "consoles",
    name: "Nintendo Switch Lite",
    img: img2,
    specs: {
      Pantalla: "LCD 5.5",
      Almacenamiento: "32GB",
      Modos: "Solo Portátil",
      Batería: "3-7 horas",
    },
    description:
      "Versión portátil dedicada, más ligera y económica para gaming en movimiento.",
    price: "$199.990",
  },
  {
    id: 3,
    category: "games",
    name: "The Legend of Zelda: Tears of the Kingdom",
    img: img3,
    specs: {
      Género: "Aventura/Acción",
      Jugadores: "1 jugador",
      Clasificación: "T (Teen)",
      Espacio: "18.2 GB",
    },
    description:
      "La épica aventura continúa en Hyrule con nuevas habilidades y misterios por descubrir.",
    price: "$69.990",
  },
  {
    id: 4,
    category: "games",
    name: "Super Mario Odyssey",
    img: img4,
    specs: {
      Género: "Plataformas",
      Jugadores: "1-2 jugadores",
      Clasificación: "E10+ (Everyone 10+)",
      Espacio: "5.7 GB",
    },
    description:
      "Únete a Mario en una aventura épica a través de reinos misteriosos con su fiel Cappy.",
    price: "$59.990",
  },
  {
    id: 5,
    category: "games",
    name: "Mario Kart 8 Deluxe",
    img: img5,
    specs: {
      Género: "Carreras",
      Jugadores: "1-4 local, 2-12 online",
      Clasificación: "E (Everyone)",
      Espacio: "6.8 GB",
    },
    description:
      "Las carreras más emocionantes con todos tus personajes favoritos de Nintendo.",
    price: "$59.990",
  },
  {
    id: 6,
    category: "accessories",
    name: "Nintendo Switch Pro Controller",
    img: img6,
    specs: {
      Conexión: "Bluetooth/USB-C",
      Batería: "40 horas",
      Vibración: "HD Rumble",
      NFC: "Compatible amiibo",
    },
    description:
      "Control profesional con ergonomía superior y tecnología avanzada de vibración.",
    price: "$69.990",
  },
  {
    id: 7,
    category: "accessories",
    name: "Carcasa Protectora Nintendo Switch",
    img: img7,
    specs: {
      Material: "TPU flexible",
      Protección: "Anti-golpes",
      Acceso: "Todos los puertos",
      Colores: "5 opciones",
    },
    description:
      "Protege tu Nintendo Switch con estilo. Incluye protectores de pantalla de vidrio templado.",
    price: "$19.990",
  },
  {
    id: 8,
    category: "accessories",
    name: "Volante Joy-Con 2 Wheel Set de 2",
    img: img8,
    specs: {
      "Tipo de Producto": "Controles Gamers",
      Incluye: "2 Unidades",
      Acceso: "Todos los puertos",
      Colores: "5 opciones",
    },
    description:
      "Añade emoción a tus juegos de carreras con este set de volantes Joy-Con.",
    price: "$35.990",
  },
];
