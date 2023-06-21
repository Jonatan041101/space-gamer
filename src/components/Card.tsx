'use client';
import { Products } from '@/__generated__/graphql-types';
import Button from '@/atoms/Button';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import SquareIcon from './SquareIcon';
import Stock from '@/atoms/Stock';
import { useBearStore } from '@/store/store';
import { utilExistProduct } from '@/utils/filters';
import { handleAddStrSubUrl } from './ListSubProducts';
import useAddCart from '@/hooks/useAddCart';

interface Props {
  product: Products;
  isAbilitedClick: boolean;
}

export default function Card({ product, isAbilitedClick }: Props) {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const timerId = useRef<NodeJS.Timeout>();
  const { handleViewModal, user, cart, handleAddToCart, handleAddHistoryLink } =
    useBearStore((state) => state);

  const { handleAddProductCart } = useAddCart();

  const IMAGE = product.image[0]?.image ?? '';
  const STOCK = product.stock?.count ?? 0;
  const PRICE = parsePriceValueMoneyARS(product.price);
  const QUOTES = product.quotes && product.quotes[3];

  const handleAddToCar = () => {
    const copyCart = [...cart];
    const existProduct = utilExistProduct(copyCart, product?.id);
    if (existProduct) {
      if (existProduct.count + count >= Number(product.stock?.count)) {
        return;
      }
    }
    if (user.hasOwnProperty('email')) {
      setCount((count) => count + 1);
      clearTimeout(timerId.current);
      timerId.current = setTimeout(async () => {
        await handleAddProductCart({
          variables: {
            cartId: user.cart.id,
            productId: product.id,
            count: count + 1,
          },
        });
        setCount(0);
      }, 500);
    }
    if (!existProduct) {
      const productCart = {
        product,
        count: 1,
      };
      const cartAll = [...cart, productCart];
      return handleAddToCart(cartAll);
    }
    existProduct.count = existProduct.count + 1;
    handleAddToCart(copyCart);
  };
  const handleLink = () => {
    const allLinks = handleAddStrSubUrl(
      product.category?.name ?? '',
      product.name,
      true
    );

    if (isAbilitedClick && allLinks) {
      handleAddHistoryLink(allLinks);
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
        <div
          className="card__add"
          onClick={STOCK === 0 ? () => {} : handleAddToCar}
        >
          <div className="card__btn">
            <Button text="Agregar" />
          </div>
        </div>
      </article>
    </>
  );
}
