'use client';
import { ProductToCart } from '@/store/slices/cart';
import { useBearStore } from '@/store/store';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import React from 'react';
export const utilTotalPrice = (cart: ProductToCart[]) => {
  const price = cart.reduce((a, b) => {
    if (b?.product?.price) {
      return a + b.product.price * b.count;
    }
    return 0;
  }, 0);
  return price;
};
export const quotesTotalPrice = (cart: ProductToCart[]) => {
  interface Quote {
    priceCuote: number;
    priceComplete: number;
  }
  const firstQuote: Quote = {
    priceCuote: 0,
    priceComplete: 0,
  };
  cart.forEach((product) => {
    if (product.product?.quotes && product.product.quotes.length === 5) {
      firstQuote.priceCuote =
        firstQuote.priceCuote + Number(product.product.quotes[0]?.priceCuote);
      firstQuote.priceComplete =
        firstQuote.priceComplete +
        Number(product.product.quotes[0]?.priceComplete);
    }
  });
};
export default function PriceCart() {
  const { cart } = useBearStore((state) => state);
  const price = utilTotalPrice(cart);
  return (
    <div>
      {parsePriceValueMoneyARS(price)}
      {price === 0 && '$0'}
    </div>
  );
}
