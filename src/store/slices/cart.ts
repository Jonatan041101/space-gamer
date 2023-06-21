import { Products } from '@/__generated__/graphql-types';
import { StateCreator } from 'zustand';
export interface ProductToCart {
  count: number;
  product?: Products | null;
}
export interface ProductsCart {
  modal: boolean;
  handleViewModal: (name: string | null) => void;
  nameProduct: string | null;
  cart: ProductToCart[];
  handleAddToCart: (products: ProductToCart[]) => void;
}
export const sliceProductsCart: StateCreator<ProductsCart> = (set) => ({
  modal: false,
  nameProduct: null,
  cart: [],
  handleAddToCart: (cart) => {
    set((state) => ({ ...state, cart }));
  },
  handleViewModal: (name) => {
    set((state) => ({ ...state, nameProduct: name, modal: !state.modal }));
  },
});
