export type ComponentsPc =
  | 'monitores'
  | 'mouse'
  | 'motherboards'
  | 'fuentes'
  | 'teclados'
  | 'gabinetes'
  | 'targetas gráficas'
  | 'discos ssd'
  | 'discos rígidos'
  | 'microprocesadores'
  | 'memorias ram'
  | 'coolers';
export interface ListComponentsPc {
  id: number;
  name: ComponentsPc;
  img: string;
}
export interface Armament {
  id: number;
  name: string;
  price: number;
  count: number;
}
