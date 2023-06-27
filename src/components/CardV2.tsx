'use client';
import Image from 'next/image';
import React from 'react';
import SquareIcon from './SquareIcon';
import { Products } from '@/__generated__/graphql-types';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import { useBearStore } from '@/store/store';
import { handleAddStrSubUrl } from './ListSubProducts';
import { useRouter } from 'next/navigation';

interface Props {
  product: Products;
}

export default function CardV2({ product }: Props) {
  const { handleViewModal, handleAddHistoryLink } = useBearStore(
    (state) => state
  );
  const IMAGE = product.image[0]?.image ?? '';
  const QUOTES = product.quotes && product.quotes[3];
  const router = useRouter();
  const handleClickModal = () => {
    handleViewModal(product.name ?? '');
  };
  const handleClickLink = () => {
    const allLinks = handleAddStrSubUrl(
      product.category?.name ?? '',
      product.name,
      true
    );
    if (allLinks) {
      handleAddHistoryLink(allLinks);
      router.push(`/product/${product.name}`);
    }
  };
  return (
    <article className="cardv2">
      <SquareIcon handleClick={handleClickModal} />
      <div onClick={handleClickLink}>
        <Image
          className="cardv2__image"
          src={IMAGE}
          alt="Producto en venta"
          width={200}
          height={200}
        />
      </div>
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
