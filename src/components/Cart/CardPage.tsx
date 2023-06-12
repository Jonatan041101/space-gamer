import { ProductToCart } from '@/store/slices/cart';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React from 'react';

interface Props {
  product: ProductToCart;
}
export default function CardPage({ product }: Props) {
  const IMAGE = product.image[0]?.image ?? '';
  const PRICE = product.price * product.count;
  return (
    <tr className="cartpage__article cartpage__tr" key={product.id}>
      <td className="cartpage__img cartpage__td">
        <div>
          <Image
            className="cartpage__image"
            src={IMAGE}
            alt={`Demuestra del producto ${product.name}`}
            width={100}
            height={80}
          />
        </div>
      </td>
      <td className="cartpage__td">{parsePriceValueMoneyARS(product.price)}</td>
      <td className="cartpage__td">{product.count}</td>
      <td className="cartpage__td">{parsePriceValueMoneyARS(PRICE)}</td>
    </tr>
  );
}
