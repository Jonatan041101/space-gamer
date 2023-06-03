import { Products } from '@/__generated__/graphql-types';
import Button from '@/atoms/Button';
import Icons from '@/atoms/Icons';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import SquareIcon from './SquareIcon';

interface Props {
  product: Products;
  isAbilitedClick: boolean;
}

export default function Card({ product, isAbilitedClick }: Props) {
  // Variables para JSX
  const image = product?.image ? product?.image[0]?.image : '';
  const IMAGE = image ?? '';
  const STOCK = product.stock?.count ?? 0;
  const PRICE = parsePriceValueMoneyARS(product.price);
  const QUOTES = product.quotes && product.quotes[3];
  const handleAddToCar = () => {};
  const handleLink = () => {
    if (isAbilitedClick) {
      console.log('HOLA', product.name);
    }
  };
  return (
    <article className="card">
      <SquareIcon />
      <div className="card__img" onClick={handleLink}>
        <Image
          className="card__image"
          style={{ objectFit: 'scale-down' }}
          src={IMAGE}
          alt={product?.name ?? ''}
          width={200}
          height={200}
        />
      </div>
      <h2 className="card__h2">{product.name}</h2>
      <div className="card__description">
        {STOCK > 0 && STOCK <= 5 && (
          <span className="card__stock card__stock--low">STOCK BAJO</span>
        )}
        {STOCK > 5 && <span className="card__stock ">DISPONIBLE</span>}
        {STOCK === 0 && (
          <span className="card__stock card__stock--non">NO DISPONIBLE</span>
        )}
        <p className="card__price">{PRICE}</p>
        <p className="card__quotes">
          {QUOTES?.name} de{' '}
          <span className="card__quotes--value">
            {parsePriceValueMoneyARS(QUOTES?.priceCuote)}
          </span>
        </p>
      </div>
      <div className="card__add">
        <Button text="Agregar" handleClick={handleAddToCar} />
      </div>
    </article>
  );
}