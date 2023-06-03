import { LiProducts, LinksHeader } from '@/types/types';

export const linksHeader: LinksHeader[] = [
  {
    id: 100,
    text: 'Contacto',
    link: '/',
  },
  { id: 101, text: 'Mis Pedidos', link: '/' },
  { id: 102, text: 'Arma tu Pc', link: '/' },
];
export const liProductsMap: LiProducts[] = [
  { id: 110, name: 'Auriculares', link: '/' },
  {
    id: 111,
    name: 'Componentes de Pc',
    link: '/',
    subList: [
      {
        id: 150,
        link: '/',
        name: 'Coolers',
      },
      { id: 151, link: '/', name: 'Discos Rígidos' },
      { id: 152, link: '/', name: 'Discos Ssd' },
      { id: 153, link: '/', name: 'Fuentes' },
      { id: 154, link: '/', name: 'Memorias Ram' },
      { id: 155, link: '/', name: 'Microprocesadores' },
      { id: 156, link: '/', name: 'Motherboards' },
      { id: 157, link: '/', name: 'Placas de Video' },
    ],
  },
  { id: 112, link: '/', name: 'Gabinetes' },
  { id: 113, link: '/', name: 'Monitores' },
  { id: 114, link: '/', name: 'Notebooks' },
  { id: 115, link: '/', name: 'Pc Armadas' },
  {
    id: 116,
    link: '/',
    name: 'Periféricos',
    subList: [
      { id: 158, link: '/', name: 'Mouse' },
      { id: 1591, link: '/', name: 'Teclados' },
      { id: 159, link: '/', name: 'Impresoras' },
      { id: 160, link: '/', name: 'Joysticks' },
      { id: 161, link: '/', name: 'Kit Gamer' },
      { id: 162, link: '/', name: 'Micrófonos' },
      { id: 163, link: '/', name: 'Mouse pads' },
      { id: 164, link: '/', name: 'Parlantes' },
      { id: 165, link: '/', name: 'Webcams' },
    ],
  },
  { id: 117, link: '/', name: 'Sillas Gamer' },
  { id: 118, link: '/', name: 'Tabletas Gráficas' },
  {
    id: 119,
    link: '/',
    name: 'Videojuegos',
    subList: [
      { id: 166, link: '/', name: 'Consolas' },
      { id: 167, link: '/', name: 'Juegos Nintendo Switch' },
      { id: 168, link: '/', name: 'Juegos Ps4' },
      { id: 169, link: '/', name: 'Juegos Ps5' },
    ],
  },
  { id: 120, link: '/', name: 'Conectividad y Cables' },
  {
    id: 121,
    link: '/',
    name: 'Almacenamiento',
    subList: [
      { id: 170, link: '/', name: 'Discos Externos' },
      { id: 171, link: '/', name: 'Memorias Sd' },
      { id: 172, link: '/', name: 'Pendrive' },
    ],
  },
  {
    id: 122,
    link: '/',
    name: 'Estabilizadores y Ups',
  },
];
