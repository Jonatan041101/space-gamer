import { create, StateCreator } from 'zustand';

interface StylesApp {
  viewListProduct: boolean;
  handleViewListProduct: (view: boolean) => void;
}
export const sliceStyle: StateCreator<StylesApp> = (set) => ({
  viewListProduct: false,
  handleViewListProduct: (view) => {
    set((state) => ({ ...state, viewListProduct: view }));
  },
});

export const useBearStore = create<StylesApp>((...set) => ({
  ...sliceStyle(...set),
}));
