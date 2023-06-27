'use client';
import { DeleteProductCartMutation } from '@/__generated__/graphql-types';
import Icons from '@/atoms/Icons';
import { useBearStore } from '@/store/store';
import { DELETE_PRODUCT_TO_CART } from '@/utils/graphql/query';
import { toastNotify } from '@/utils/notify';
import { useMutation } from '@apollo/client';
import React from 'react';
interface Props {
  id: string;
}
export default function DeleteProduct({ id }: Props) {
  const { cart, handleAddToCart, user } = useBearStore((state) => state);
  const [deleteProduct, data] = useMutation<DeleteProductCartMutation>(
    DELETE_PRODUCT_TO_CART
  );
  const handleClickDeleteCart = async () => {
    const product = cart.find((product) => product.product?.id == id);
    const restCart = cart.filter((product) => product.product?.id !== id);
    handleAddToCart(restCart);
    if (user.hasOwnProperty('email')) {
      await deleteProduct({
        variables: {
          cartId: user.cart.id,
          productId: id,
        },
      });
    }
    toastNotify(`📌 ${product?.product?.name} eliminado del carrito`); // Arreglar
  };

  return (
    <i className="cart__i" onClick={handleClickDeleteCart}>
      <Icons icon="close" />
    </i>
  );
}
