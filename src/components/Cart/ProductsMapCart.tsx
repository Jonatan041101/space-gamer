import { ProductToCart } from '@/store/slices/cart';
import Image from 'next/image';
import React from 'react';
import ProductCart from './ProductCart';
interface Props {
  products: ProductToCart[];
}
export default function ProductsMapCart({ products }: Props) {
  return (
    <div className="cart__products">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
}
