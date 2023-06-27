import { create } from 'zustand';
import { StylesApp, sliceStyle } from './slices/style';
import { Links, sliceLinks } from './slices/links';
import { ProductsCart, sliceProductsCart } from './slices/cart';
import { UserStore, userSlice } from './slices/user';
import { LoaderInterface, sliceLoader } from './slices/loader';

export const useBearStore = create<
  StylesApp & Links & ProductsCart & UserStore & LoaderInterface
>((...set) => ({
  ...sliceStyle(...set),
  ...sliceLinks(...set),
  ...sliceProductsCart(...set),
  ...userSlice(...set),
  ...sliceLoader(...set),
}));
