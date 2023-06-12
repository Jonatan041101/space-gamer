'use client';
import { ProductToCart } from '@/store/slices/cart';
import { useBearStore } from '@/store/store';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import React from 'react';
export const utilTotalPrice = (cart: ProductToCart[]) => {
  const price = cart.reduce((a, b) => {
    if (b.price) {
      return a + b.price * b.count;
    }
    return 0;
  }, 0);
  return price;
};
export default function PriceCart() {
  const { cart } = useBearStore((state) => state);
  const price = utilTotalPrice(cart);
  console.log({ price });
  return (
    <div>
      {parsePriceValueMoneyARS(price)}
      {price === 0 && '$0'}
    </div>
  );
}
