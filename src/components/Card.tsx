'use client';
import { Products } from '@/__generated__/graphql-types';
import Button from '@/atoms/Button';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import SquareIcon from './SquareIcon';
import Stock from '@/atoms/Stock';
import { useBearStore } from '@/store/store';
import { utilExistProduct } from '@/utils/filters';

interface Props {
  product: Products;
  isAbilitedClick: boolean;
}

export default function Card({ product, isAbilitedClick }: Props) {
  const router = useRouter();
  // Variables para JSX
  const { handleViewModal, cart, handleAddToCart } = useBearStore(
    (state) => state
  );
  const IMAGE = product.image[0]?.image ?? '';

  const STOCK = product.stock?.count ?? 0;
  const PRICE = parsePriceValueMoneyARS(product.price);
  const QUOTES = product.quotes && product.quotes[3];
  const handleAddToCar = () => {
    const copyCart = [...cart];
    const existProduct = utilExistProduct(copyCart, product?.id);
    if (!existProduct) {
      const productCart = {
        ...product,
        count: 1,
      };
      const cartAll = [...cart, productCart];
      return handleAddToCart(cartAll);
    }
    existProduct.count = existProduct.count + 1;
    handleAddToCart(copyCart);
  };
  const handleLink = () => {
    if (isAbilitedClick) {
      router.push(`/product/${product.name}`);
    }
  };

  const handleClickModal = () => {
    handleViewModal(product.name ?? '');
  };

  return (
    <>
      <article className="card">
        <SquareIcon handleClick={handleClickModal} />
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
          <Stock STOCK={STOCK} />
          <p className="card__price">{PRICE}</p>
          <p className="card__quotes">
            {QUOTES?.name} de{' '}
            <span className="card__quotes--value">
              {parsePriceValueMoneyARS(QUOTES?.priceCuote)}
            </span>
          </p>
        </div>
        <div className="card__add" onClick={handleAddToCar}>
          <div className="card__btn">
            <Button text="Agregar" />
          </div>
        </div>
      </article>
    </>
  );
}
