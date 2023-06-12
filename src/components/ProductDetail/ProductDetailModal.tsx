'use client';
import React from 'react';
import ProductDetail from './ProductDetail';
import QuotesDes from './QuotesDes';
import PriceDetail from './PriceDetail';
import { useQuery } from '@apollo/client';
import {
  GetProductDetailQuery,
  Image,
  Products,
} from '@/__generated__/graphql-types';
import { PRODUCT_DETAIL } from '@/utils/graphql/query';
import Modal from '../Modal/Modal';
import { useBearStore } from '@/store/store';
import Icons from '@/atoms/Icons';
import Link from 'next/link';

interface Props {
  name: string;
}

export default function ProductDetailModal({ name }: Props) {
  const { data } = useQuery<GetProductDetailQuery>(PRODUCT_DETAIL, {
    variables: { name: name ?? '' },
  });
  const { handleViewModal } = useBearStore((state) => state);
  return (
    <Modal>
      <div className="card__modals">
        <i className="card__close" onClick={() => handleViewModal(null)}>
          <Icons icon="close" />
        </i>
        <div className="card__modal">
          <div className="card__container">
            <div className="productd__flex">
              <ProductDetail image={data?.getProduct?.image as Image[]} />
              <QuotesDes data={data?.getProduct as Products} />
              <PriceDetail product={data?.getProduct as Products} />
            </div>
          </div>
        </div>
        <Link href={`/product/${name}`} className="productd__all">
          Ver Producto Completo
        </Link>
      </div>
    </Modal>
  );
}
