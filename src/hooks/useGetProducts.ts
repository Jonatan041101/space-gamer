import { GetProductFilterQuery } from '@/__generated__/graphql-types';
import { GET_PRODUCT_FILTER } from '@/utils/graphql/query';
import { useLazyQuery } from '@apollo/client';
import React from 'react';

export default function useGetProducts() {
  const [getProducts] = useLazyQuery<GetProductFilterQuery>(GET_PRODUCT_FILTER);
  const handleGetProductsDB = async (
    name: string | null,
    sub: string | null,
    brand: string | null
  ) => {
    const products = await getProducts({
      variables: {
        nameC: name,
        nameS: sub,
        brand,
      },
    });
    return products;
  };
  return { handleGetProductsDB };
}
