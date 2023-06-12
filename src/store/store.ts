import { create } from 'zustand';
import { StylesApp, sliceStyle } from './slices/style';
import { Links, sliceLinks } from './slices/links';
import { ProductsCart, sliceProductsCart } from './slices/cart';

export const useBearStore = create<StylesApp & Links & ProductsCart>(
  (...set) => ({
    ...sliceStyle(...set),
    ...sliceLinks(...set),
    ...sliceProductsCart(...set),
  })
);
