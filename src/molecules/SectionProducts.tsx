'use client';
import {
  GetProductsNoneVideoGamesQuery,
  Products,
} from '@/__generated__/graphql-types';
import CardV2 from '@/components/CardV2';
import TitleProducts from '@/components/TitleProducts';
import { GET_PRODUCTS_NONE_GAMES } from '@/utils/graphql/query';
import { useQuery } from '@apollo/client';
import React from 'react';

interface Props {
  limit: number;
  skip: number;
  title: string;
}

export default function SectionProducts({ limit, skip, title }: Props) {
  const { data } = useQuery<GetProductsNoneVideoGamesQuery>(
    GET_PRODUCTS_NONE_GAMES,
    { variables: { limit, skip } }
  );
  return (
    <section className="cardsv2__section">
      <TitleProducts title={title} />
      {data?.productsNonVideogames?.map((product) => (
        <CardV2 product={product as Products} key={product?.id} />
      ))}
    </section>
  );
}
