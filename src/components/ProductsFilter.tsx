'use client';
import { Products } from '@/__generated__/graphql-types';
import { useBearStore } from '@/store/store';
import React from 'react';
import Card from './Card';
import Image from 'next/image';
import Order from './Filter/Order';

export default function ProductsFilter() {
  const { brand, cards, image } = useBearStore((state) => state);

  return (
    <div className="products__all">
      {image && (
        <Image
          className="products__image"
          src={image}
          alt={`Image de la marca ${brand}`}
          width={300}
          height={300}
        />
      )}
      <div className="products__column">
        <div className="products__count">
          <div className="products__length">
            Mostrando {cards.length} resultados
          </div>
          <div className="products__order">
            <Order />
          </div>
        </div>
        <div className="products__cards">
          {cards.map((product) => (
            <Card
              key={product?.id}
              isAbilitedClick
              product={product as Products}
            />
          ))}
          {cards.length === 0 && (
            <div className="products__none">Sin resultados</div>
          )}
        </div>
      </div>
    </div>
  );
}
