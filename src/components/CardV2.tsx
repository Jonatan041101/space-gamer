import Icons from '@/atoms/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SquareIcon from './SquareIcon';
import { Products } from '@/__generated__/graphql-types';
import { parsePriceValueMoneyARS } from '@/utils/parses';

interface Props {
  product: Products;
}

export default function CardV2({ product }: Props) {
  const IMAGE = product.image ? product.image[0]?.image ?? '' : '';
  const QUOTES = product.quotes && product.quotes[3];
  return (
    <article className="cardv2">
      <SquareIcon />
      <Link href="/">
        <Image
          className="cardv2__image"
          src={IMAGE}
          alt="Producto en venta"
          width={200}
          height={200}
        />
      </Link>
      <div className="cardv2__p">
        <h3>{product.name}</h3>
        <div className="cardv2__price">
          <p className="card__price">
            {parsePriceValueMoneyARS(product.price)}
          </p>
          <p className="cardv2__quotes">
            {QUOTES?.name} de{' '}
            <span className="cardv2__quote">
              {parsePriceValueMoneyARS(QUOTES?.priceCuote)}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
