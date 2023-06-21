import { create } from 'zustand';
import { StylesApp, sliceStyle } from './slices/style';
import { Links, sliceLinks } from './slices/links';
import { ProductsCart, sliceProductsCart } from './slices/cart';
import { UserStore, userSlice } from './slices/user';

export const useBearStore = create<
  StylesApp & Links & ProductsCart & UserStore
>((...set) => ({
  ...sliceStyle(...set),
  ...sliceLinks(...set),
  ...sliceProductsCart(...set),
  ...userSlice(...set),
}));
