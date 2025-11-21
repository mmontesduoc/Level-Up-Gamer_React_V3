import mousepad from "../images/mousepad.PNG";
import polera1 from "../images/polera1.PNG";
import polera2 from "../images/polera2.PNG";
import pantuflas from "../images/pantuflas.PNG";
import catan from "../images/catan.PNG";
import kiogofnewyork from "../images/kiogofnewyork.PNG";
import space from "../images/space.PNG";

export const tiendaProducts = [
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
