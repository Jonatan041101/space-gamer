'use client';
import { Products } from '@/__generated__/graphql-types';
import { useBearStore } from '@/store/store';
import React, { useEffect } from 'react';
import Card from './Card';
import Image from 'next/image';
import Order from './Filter/Order';
import useGetProducts from '@/hooks/useGetProducts';
import { LinksPrev, Storage } from './ProductDetail/LinksPrevProduct';
import Icons from '@/atoms/Icons';
interface Props {
  handleViewFiltros: () => void;
}
export default function ProductsFilter({ handleViewFiltros }: Props) {
  const { brand, cards, image, links, handleAddCards } = useBearStore(
    (state) => state
  );
  const { handleGetProductsDB } = useGetProducts();
  useEffect(() => {
    if (links.length === 0) {
      const categoryLocale = window.localStorage.getItem(Storage.LinksPrev);
      if (categoryLocale) {
        const category: LinksPrev[] = JSON.parse(categoryLocale);

        const fetchToProducts = async () => {
          const products = await handleGetProductsDB(
            category[1].name,
            null,
            null
          );
          handleAddCards(products.data?.getProductFilter as Products[]);
        };
        fetchToProducts();
      }
    }
  }, []);
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
          <div className="products__order">
            <Order />
          </div>
          <div
            className="products__filters--container"
            onClick={handleViewFiltros}
          >
            <p className="products__filters--p">Filtros</p>
            <i className="products__filters--icon">
              <Icons icon="Filters" />
            </i>
          </div>
        </div>
        <div className="products__length">
          Mostrando {cards.length} resultados
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
