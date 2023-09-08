import { COMERCIAL, RESIDENCIAL, URBANO } from "../helpers";
import { Quincho, Quincho2, Quincho3, Quincho4 } from '../assets/images/Cacheuta/index'
import { Doral1 } from '../assets/images/Doral/index'
import { Apolo11, Apolo12 } from "../assets/images/Apolo";

const data = [
  {
    id: 1,
    name: "Terrazas de Cacheuta",
    imagenPrincipal: Quincho,
    imagenes: [Quincho, Quincho2, Quincho3, Quincho4],
    tipo: COMERCIAL,
    finalizado: true,
    superficie: 0,
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2023
  },
  {
    id: 2,
    name: "Terrazas del Bosque",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img3.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: COMERCIAL,
    finalizado: false,
    superficie: 0,
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2023
  },
  {
    id: 3,
    name: "Doral Tigre",
    imagenPrincipal: Doral1,
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: URBANO,
    finalizado: false,
    superficie: 0,
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2023
  },
  {
    id: 4,
    name: "Casa Apolo",
    imagenPrincipal: Apolo11,
    imagenes: [Apolo11, Apolo12],
    tipo: RESIDENCIAL,
    finalizado: true,
    superficie: '215m2',
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2022
  },
  {
    id: 5,
    name: "Casa Cinta",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img2.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: RESIDENCIAL,
    finalizado: true,
    superficie: '293m2',
    ubicacion: 'Nordelta, Tigre',
    anio: 2022
  },
  {
    id: 6,
    name: "Casa Lamy",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img1.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: RESIDENCIAL,
    finalizado: true,
    superficie: '252m2',
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2022
  },
  {
    id: 7,
    name: "Casa Marinella",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img3.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: RESIDENCIAL,
    finalizado: true,
    superficie: '262m2',
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2022
  },
  {
    id: 8,
    name: "Casa Sofietto",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img1.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: RESIDENCIAL,
    finalizado: true,
    superficie: '194m2',
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2022
  },
  {
    id: 9,
    name: "La Caletta",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img2.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: RESIDENCIAL,
    finalizado: true,
    superficie: '277m2',
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2022
  },
  {
    id: 10,
    name: "Proyecto 10",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img3.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: RESIDENCIAL,
    finalizado: false,
    superficie: 0,
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2023
  },
  {
    id: 11,
    name: "Proyecto 12",
    imagenPrincipal: "/FranciscoSanchezArjona/images/img1.jpg",
    imagenes: ["/FranciscoSanchezArjona/images/img1.jpg", "/FranciscoSanchezArjona/images/img2.jpg", "/FranciscoSanchezArjona/images/img3.jpg"],
    tipo: COMERCIAL,
    finalizado: false,
    superficie: 0,
    ubicacion: 'Costa Esmeralda, Partido de la Costa',
    anio: 2023
  }
];



export default data;
