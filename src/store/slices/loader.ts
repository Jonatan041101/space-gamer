import { StateCreator } from 'zustand';

export interface LoaderInterface {
  loadingProducts: boolean;
  loadingBanner: boolean;
  loadingCategory: boolean;
  loadingBrand: boolean;
  handleLoadingProducts: (loading: boolean) => void;
  handleLoadingBanner: (loading: boolean) => void;
  handleLoadingCategory: (loading: boolean) => void;
  handleLoadingBrand: (loading: boolean) => void;
}

export const sliceLoader: StateCreator<LoaderInterface> = (set) => ({
  loadingProducts: true,
  loadingBanner: true,
  loadingBrand: true,
  loadingCategory: true,
  handleLoadingProducts: (loading) => {
    set((state) => ({ ...state, loadingProducts: loading }));
  },
  handleLoadingBanner: (loading) => {
    set((state) => ({ ...state, loadingBanner: loading }));
  },
  handleLoadingCategory: (loading) => {
    set((state) => ({ ...state, loadingCategory: loading }));
  },
  handleLoadingBrand: (loading) => {
    set((state) => ({ ...state, loadingBrand: loading }));
  },
});
