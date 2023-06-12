import { Products, Quote } from '@/__generated__/graphql-types';
import LinkCategory from '@/atoms/LinkCategory';
import React from 'react';
import BtnChild from './BtnChild';
import Stock from '@/atoms/Stock';
import Link from 'next/link';
import TableQuotes from './TableQuotes';
import { ListModal } from '../Footer';
import { methodBuy, sendProducts } from '@/utils/cloudinary';
import ListOption from './ListOption';
interface Props {
  data?: Products;
}
export default function QuotesDes({ data }: Props) {
  const STOCK = data?.stock?.count ?? 0;
  const listOptions: ListModal[] = [
    {
      id: 1200,
      image: sendProducts,
      text: 'Medios de envio',
      title: 'Ver todos los medios de envio',
    },
    {
      id: 1201,
      image: methodBuy,
      text: 'Medios de pagos',
      title: 'Ver todos los medios de pago',
    },
  ];
  return (
    <div className="quotesdes">
      <h2 className="quotesdes__h2">{data?.name}</h2>
      <div className="quotesdes__buttons">
        <div className="linkcategory__container">
          <LinkCategory text={data?.category?.name ?? ''} link="" />
          <LinkCategory text={data?.subCategory?.name ?? ''} link="" />
        </div>
        <div className="quotesdes__child">
          <BtnChild name="Stock">
            <Stock STOCK={STOCK} />
          </BtnChild>
          <BtnChild name="Marcas">
            <Link href={''}>
              <p>{data?.brand?.name}</p>
            </Link>
          </BtnChild>
        </div>
      </div>
      <TableQuotes quotes={data?.quotes as Quote[]} />
      {listOptions.map((list) => (
        <ListOption key={list.id} list={list} />
      ))}
    </div>
  );
}
