import { ProductToCart } from '@/store/slices/cart';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React from 'react';

interface Props {
  product: ProductToCart;
}
export default function CardCar({ product }: Props) {
  const PRICE = product.product?.price
    ? product.product?.price * product.count
    : product.product?.price;
  return (
    <article key={product?.product?.id} className="cardarma__article">
      <div className="cardarma__container">
        <Image
          className="cardarma__image"
          src={product?.product?.image[0]?.image ?? ''}
          alt=""
          width={50}
          height={50}
        />
        <p className="cardarma__p">
          {`${product.count} × ${product?.product?.name}`}
        </p>
      </div>
      <p className="cardarma__price">{parsePriceValueMoneyARS(PRICE)}</p>
    </article>
  );
}
