import {
  COOLER,
  FUENTE,
  GABINETE,
  HDD,
  MEMORIA_RAM,
  MICROPROCESADOR,
  MONITOR,
  MOTHERBOARD,
  MOUSE,
  SSD,
  TARJETA_DE_VIDEO,
  TECLADO,
} from './images';
import { Armament, ListComponentsPc } from './types';

export const mapListArma: ListComponentsPc[] = [
  { id: 3440, name: 'microprocesadores', img: MICROPROCESADOR },
  { id: 3441, name: 'coolers', img: COOLER },
  { id: 3442, name: 'motherboards', img: MOTHERBOARD },
  { id: 3443, name: 'memorias ram', img: MEMORIA_RAM },
  { id: 3444, name: 'targetas gráficas', img: TARJETA_DE_VIDEO },
  { id: 3445, name: 'discos rígidos', img: HDD },
  { id: 3446, name: 'discos ssd', img: SSD },
  { id: 3447, name: 'gabinetes', img: GABINETE },
  { id: 3448, name: 'fuentes', img: FUENTE },
  { id: 3449, name: 'monitores', img: MONITOR },
  { id: 3450, name: 'mouse', img: MOUSE },
  { id: 3451, name: 'teclados', img: TECLADO },
];

export const armament: Armament[] = [
  {
    id: 3452,
    count: 1,
    name: 'Armado de Pc Simple + Windows 10 (Version de Prueba)',
    price: 3299,
  },
  {
    id: 3453,
    count: 1,
    name: 'Solo Armado 24-48hs',
    price: 2199,
  },
  {
    id: 3454,
    count: 1,
    name: 'Armado de PC + Cooler + Windows 10 (Version de prueba)',
    price: 4499,
  },
];
