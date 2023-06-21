import { StateCreator } from 'zustand';

type Fix = 'fixed' | 'static';

export interface StylesApp {
  viewListProduct: boolean;
  viewCart: boolean;
  viewUser: boolean;
  fixedMenu: Fix;
  handleChangeFix: (name: Fix) => void;
  handleViewListProduct: (view: boolean) => void;
  handleViewUser: (view: boolean) => void;
  handleViewCart: (view: boolean) => void;
}

export const sliceStyle: StateCreator<StylesApp> = (set) => ({
  viewListProduct: false,
  viewCart: false,
  viewUser: false,
  fixedMenu: 'static',
  handleChangeFix: (name) => {
    set((state) => ({ ...state, fixedMenu: name }));
  },
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
