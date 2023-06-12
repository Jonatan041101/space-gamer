'use client';
import { GetProductFilterQuery, Products } from '@/__generated__/graphql-types';
import { useBearStore } from '@/store/store';
import { GET_PRODUCT_FILTER } from '@/utils/graphql/query';
import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import Card from './Card';
import Image from 'next/image';

export default function ProductsFilter() {
  const { category, subCategory, brand, cards, image, handleAddCards } =
    useBearStore((state) => state);
  const [getProducts, { data, loading }] =
    useLazyQuery<GetProductFilterQuery>(GET_PRODUCT_FILTER);
  useEffect(() => {
    const getProductsFilter = async () => {
      await getProducts({
        variables: {
          nameC: category,
          nameS: subCategory,
          brand,
        },
      });
    };
    getProductsFilter();
  }, [category, subCategory, brand]);
  useEffect(() => {
    if (data) {
      handleAddCards(data.getProductFilter as Products[]);
    }
  }, [data]);

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
          Mostrando {data?.getProductFilter?.length} resultados
        </div>
        <div className="products__cards">
          {cards.map((product) => (
            <Card
              key={product?.id}
              isAbilitedClick
              product={product as Products}
            />
          ))}
          {data?.getProductFilter && data.getProductFilter.length === 0 && (
            <div className="products__none">Sin resultados</div>
          )}
        </div>
      </div>
    </div>
  );
}
