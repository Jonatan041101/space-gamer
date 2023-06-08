import Icons from '@/atoms/Icons';
import { useBearStore } from '@/store/store';
import React from 'react';

export default function MiCart() {
  const { handleViewCart } = useBearStore((state) => state);
  return (
    <div className="cartslide__top">
      <p className="cartslide__title">Mi Carrito</p>
      <i className="cartslide__i" onClick={() => handleViewCart(false)}>
        <Icons icon="close" />
      </i>
    </div>
  );
}
