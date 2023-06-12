import { ProductToCart } from '@/store/slices/cart';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React from 'react';
import DeleteProduct from './DeleteProduct';

interface Props {
  product: ProductToCart;
}
export default function ProductCart({ product }: Props) {
  const IMAGE = product.image[0]?.image ?? '';
  return (
    <article key={product.id} className="cart__product">
      <DeleteProduct id={product.id} />
      <div className="cart__container">
        <div className="cart__img">
          <Image
            className="cart__image"
            src={IMAGE}
            alt={`Imagen de portada de ${product.name}`}
            width={100}
            height={100}
          />
        </div>
        <div className="cart__description">
          <h4 className="cart__h4">{product.name}</h4>
          <div>
            <span>{product.count} × </span>
            <span className="cart__price">
              {parsePriceValueMoneyARS(product.price)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
