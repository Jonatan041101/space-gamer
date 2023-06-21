import { Category, Products } from '@/__generated__/graphql-types';
import { LinksPrev } from '@/components/ProductDetail/LinksPrevProduct';
import { StateCreator } from 'zustand';
export type ORDER = 'Defecto' | 'A-Z' | 'Z-A' | 'Precio Min' | 'Precio Max';

export interface Links {
  links: LinksPrev[];
  category: string | null;
  subCategory: string | null;
  categorySelect: Category | null;
  brand: string | null;
  image: string | null;
  cards: Products[];
  typeOrder: ORDER;
  changeTypeOrder: (order: ORDER) => void;
  cardsCopy: Products[];
  brandSelect: string | null;
  searchInput: string;
  handleAddHistoryLink: (link: LinksPrev[]) => void;
  handleFilterBrand: (cards: Products[], brand: string | null) => void;
  handleFilterSearch: (cards: Products[], value: string) => void;
  handleFilterCB: (
    category: string | null,
    subCategory: string | null,
    brand: string | null,
    image: string | null,
    categorySelect: Category | null
  ) => void;
  handleAddCards: (cards: Products[]) => void;
}
export const sliceLinks: StateCreator<Links> = (set) => ({
  links: [],
  brand: null,
  category: null,
  typeOrder: 'Defecto',
  subCategory: null,
  image: null,
  categorySelect: null,
  cards: [],
  cardsCopy: [],
  brandSelect: null,
  searchInput: '',
  changeTypeOrder: (order) => {
    set((state) => ({ ...state, typeOrder: order }));
  },
  handleAddCards: (cards) => {
    set((state) => ({ ...state, cards, cardsCopy: cards, brandSelect: null }));
  },
  handleAddHistoryLink: (link) => {
    set((state) => ({ ...state, links: link }));
  },
  handleFilterCB: (category, subCategory, brand, image, categorySelect) => {
    set((state) => ({
      ...state,
      brand,
      category,
      subCategory,
      image,
      categorySelect,
    }));
  },
  handleFilterBrand: (cards, brand) => {
    set((state) => ({
      ...state,
      cards,
      brandSelect: brand,
    }));
  },
  handleFilterSearch: (cards, value) => {
    set((state) => ({
      ...state,
      cards,
      searchInput: value,
    }));
  },
});
