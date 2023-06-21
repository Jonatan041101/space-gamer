import { Order, RegisterUser } from '@/types/types';
import { StateCreator } from 'zustand';
import { ProductToCart } from './cart';

interface CartGraph {
  id: string;
  products: ProductToCart[];
}
export interface UserSlice extends RegisterUser {
  img: string;
  cart: CartGraph;
  order?: Order[];
}
export interface UserStore {
  user: UserSlice;
  registerUser: (user: UserSlice) => void;
}
export const userSlice: StateCreator<UserStore> = (set) => ({
  user: {} as UserSlice,
  registerUser: (user) => {
    set((state) => ({ ...state, user }));
  },
});
