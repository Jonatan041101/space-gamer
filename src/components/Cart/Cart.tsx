'use client';
import React from 'react';
import Modal from '../Modal/Modal';
import MiCart from './MiCart';
import ProductsCart from './ProductsCart';
import ViewCart from './ViewCart';

export default function Cart() {
  const handleNotClickBody = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };
  return (
    <Modal end>
      <div className="cartslide" onClick={handleNotClickBody}>
        <MiCart />
        <ProductsCart />
        <ViewCart />
      </div>
    </Modal>
  );
}
