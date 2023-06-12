import React from 'react';
import NonProducts from './NonProducts';
import { useBearStore } from '@/store/store';
import ProductsMapCart from './ProductsMapCart';

export default function ProductsCart() {
  const { cart } = useBearStore((state) => state);
  return (
    <div className="cartslide__products">
      {cart.length === 0 ? (
        <NonProducts />
      ) : (
        <ProductsMapCart products={cart} />
      )}
    </div>
  );
}
