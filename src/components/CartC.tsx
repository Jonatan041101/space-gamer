'use client';
import Icons from '@/atoms/Icons';
import React from 'react';
import Cart from './Cart/Cart';
import { useBearStore } from '@/store/store';

interface Props {}

export default function CartC({}: Props) {
  const { viewCart, handleViewCart, cart } = useBearStore((state) => state);
  const handleOpenModalCart = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    handleViewCart(true);
  };
  return (
    <>
      <li className="cart" onClick={handleOpenModalCart}>
        <i className="cart__icon">
          <div className="cart__count">{cart.length}</div>
          <Icons icon="cart" />
        </i>
      </li>
      {viewCart && <Cart />}
    </>
  );
}
