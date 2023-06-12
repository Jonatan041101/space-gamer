'use client';
import Icons from '@/atoms/Icons';
import { useBearStore } from '@/store/store';
import React from 'react';
interface Props {
  id: string;
}
export default function DeleteProduct({ id }: Props) {
  const { cart, handleAddToCart } = useBearStore((state) => state);

  const handleClickDeleteCart = () => {
    const restCart = cart.filter((product) => product.id !== id);
    handleAddToCart(restCart);
  };

  return (
    <i className="cart__i" onClick={handleClickDeleteCart}>
      <Icons icon="close" />
    </i>
  );
}
