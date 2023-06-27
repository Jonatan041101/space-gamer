import { useBearStore } from '@/store/store';
import React from 'react';
import useGetProducts from './useGetProducts';
import { orderProductsBeforeGetDB } from '@/utils/filters';
import { Products } from '@/__generated__/graphql-types';
import { handleAddStrUrl } from '@/components/ListProducts';

export default function useLinksFilter() {
  const { handleFilterCB, handleAddCards, typeOrder, handleAddHistoryLink } =
    useBearStore((state) => state);
  const { handleGetProductsDB } = useGetProducts();

  const filterProductsWithLink = async (
    name: string,
    sub: string | null,
    image?: string
  ) => {
    const allLinks = handleAddStrUrl(name, false);
    handleAddHistoryLink(allLinks);
    if (sub) {
      handleFilterCB(name, sub, name, null, null);
      const products = await handleGetProductsDB(name, sub, null);
      console.log({ products, name, sub });
      orderProductsBeforeGetDB(
        typeOrder,
        products.data?.getProductFilter as Products[],
        handleAddCards
      );
      return;
    }
    if (image) {
      handleFilterCB(null, null, name, image, null);
      const products = await handleGetProductsDB(null, null, name);
      orderProductsBeforeGetDB(
        typeOrder,
        products.data?.getProductFilter as Products[],
        handleAddCards
      );
    } else {
      handleFilterCB(name, null, null, null, null);
      const products = await handleGetProductsDB(name, null, null);
      orderProductsBeforeGetDB(
        typeOrder,
        products.data?.getProductFilter as Products[],
        handleAddCards
      );
    }
  };
  return { filterProductsWithLink };
}
