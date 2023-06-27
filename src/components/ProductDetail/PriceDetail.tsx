'use client';
import React from 'react';
import Wsp from './Wsp';
import Envios from './Envios';
import Price from './Price';
import Count from './Count';
import { Products } from '@/__generated__/graphql-types';

interface Props {
  product: Products;
}
export interface EnviosT {
  id: number;
  title: string;
  content: string;
}
const listEnvios: EnviosT[] = [
  { id: 1301, title: 'Retirar en Local', content: 'GRATIS' },
  {
    id: 1302,
    title: 'Envió dentro de Circunvalación (Córdoba Capital)',
    content: '$699',
  },
  { id: 1303, title: 'Envió a Sucursal (Andreani)', content: '$1899' },
  { id: 1304, title: 'Envió a Domicilio (Andreani)', content: '$2999' },
];

export default function PriceDetail({ product }: Props) {
  return (
    <div className="priced__all">
      <Price price={product?.price ?? 0} />
      <Count product={product} />
      <Wsp />
      <section className="priced__section">
        {listEnvios.map((envio) => (
          <Envios key={envio.id} envio={envio} />
        ))}
      </section>
    </div>
  );
}
