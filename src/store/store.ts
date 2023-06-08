import { create, StateCreator } from 'zustand';

interface StylesApp {
  viewListProduct: boolean;
  viewCart: boolean;
  handleViewListProduct: (view: boolean) => void;
  handleViewCart: (view: boolean) => void;
}
export const sliceStyle: StateCreator<StylesApp> = (set) => ({
  viewListProduct: false,
  viewCart: false,
  handleViewListProduct: (view) => {
    set((state) => ({ ...state, viewListProduct: view }));
  },
  handleViewCart: (view) => {
    set((state) => ({ ...state, viewCart: view }));
  },
});

export const useBearStore = create<StylesApp>((...set) => ({
  ...sliceStyle(...set),
}));
