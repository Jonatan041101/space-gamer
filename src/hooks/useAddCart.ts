import { AddProductToCartMutation } from '@/__generated__/graphql-types';
import { ADD_PRODUCT_CART } from '@/utils/graphql/query';
import { useMutation } from '@apollo/client';
import React from 'react';

export default function useAddCart() {
  const [handleAddProductCart] =
    useMutation<AddProductToCartMutation>(ADD_PRODUCT_CART);
  return { handleAddProductCart };
}
