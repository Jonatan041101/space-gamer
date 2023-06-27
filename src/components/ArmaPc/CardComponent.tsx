import React from 'react';
import Image from 'next/image';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Stock from '@/atoms/Stock';
import Counter from '../ProductDetail/Counter';
import { ProductsWithCount } from '@/app/arma/page';

interface Props {
  product: ProductsWithCount;
  addCountProduct: (id: string, counter: number) => void;
}
export default function CardComponent({ product, addCountProduct }: Props) {
  const IMAGE = product.image[0]?.image ?? '';
  const STOCK = product.stock?.count ?? 0;
  const PRICE = parsePriceValueMoneyARS(product.price);
  const QUOTES = product.quotes && product.quotes[3];
  const handleCounter = (counter: number) => {
    addCountProduct(product.id, counter);
  };
  return (
    <article className="card cardcomponent">
      <div className="card__img cardcomponent__img">
        <Image
          className="card__image cardcomponent__image"
          style={{ objectFit: 'scale-down' }}
          src={IMAGE}
          alt={product?.name ?? ''}
          width={200}
          height={200}
        />
        <p className="cardcomponent__more">Ver más</p>
      </div>
      <h2 className="card__h2">{product.name}</h2>
      <div className="card__description">
        <Stock STOCK={STOCK} />
        <p className="card__price">{PRICE}</p>
        <p className="card__quotes">
          {QUOTES?.name} de{' '}
          <span className="card__quotes--value">
            {parsePriceValueMoneyARS(QUOTES?.priceCuote)}
          </span>
        </p>
      </div>
      <div className="cardcomponent__counter">
        <Counter
          counter={product?.count ?? 0}
          handleClickCounter={handleCounter}
        />
      </div>
    </article>
  );
}
