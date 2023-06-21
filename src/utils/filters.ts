import { Products } from '@/__generated__/graphql-types';
import { utilsOrderProducts } from '@/components/Filter/Order';
import { ProductToCart } from '@/store/slices/cart';
import { ORDER } from '@/store/slices/links';

export const handleAllFilter = (
  cards: Products[],
  value: string,
  brand: string | null
) => {
  const products = cards.filter((product) => {
    const filSearch = product.name?.toLowerCase().includes(value.toLowerCase());
    const filBrand = product.brand?.name?.includes(brand ?? '');
    if (brand && value.length > 0) {
      return filSearch && filBrand;
    }
    if (brand) {
      return filBrand;
    }
    if (value.length > 0) {
      return filSearch;
    }
    return product;
  });

  return products;
};
export const utilExistProduct = (products: ProductToCart[], id: string) => {
  const existProduct = products.find(({ product }) => product?.id === id);
  return existProduct;
};
export type AddCards = (products: Products[]) => void;

export const orderProductsBeforeGetDB = (
  typeOrder: ORDER,
  products: Products[],
  handleAddCards: AddCards
) => {
  if (typeOrder !== 'Defecto') {
    const productsOrder = utilsOrderProducts(typeOrder, products);
    return handleAddCards(productsOrder);
  }
  handleAddCards(products);
};
