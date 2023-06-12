import { StateCreator } from 'zustand';

export interface StylesApp {
  viewListProduct: boolean;
  viewCart: boolean;
  viewUser: boolean;
  handleViewListProduct: (view: boolean) => void;
  handleViewUser: (view: boolean) => void;
  handleViewCart: (view: boolean) => void;
}

export const sliceStyle: StateCreator<StylesApp> = (set) => ({
  viewListProduct: false,
  viewCart: false,
  viewUser: false,
  handleViewListProduct: (view) => {
    set((state) => ({ ...state, viewListProduct: view }));
  },
  handleViewCart: (view) => {
    set((state) => ({ ...state, viewCart: view, viewUser: false }));
  },
  handleViewUser: (view) => {
    set((state) => ({ ...state, viewUser: view }));
  },
});
