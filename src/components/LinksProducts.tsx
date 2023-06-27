'use client';
import { GetCountProductsHomeQuery } from '@/__generated__/graphql-types';
import useLinksFilter from '@/hooks/useLinksFilter';
import { auricular, gabinete, monitor, pcCombo } from '@/utils/cloudinary';
import { GET_COUNT_PRODUCT_HOME } from '@/utils/graphql/query';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
export interface ProductsMap {
  id: number;
  name: string;
  image: string;
  link: string;
  count: number;
}
export default function LinksProducts() {
  const router = useRouter();
  const { data } = useQuery<GetCountProductsHomeQuery>(GET_COUNT_PRODUCT_HOME);
  const { filterProductsWithLink } = useLinksFilter();
  const handleFilters = async (category: string) => {
    filterProductsWithLink(category, null);
    router.push('/products');
  };

  const linksProducts: ProductsMap[] = [
    {
      id: 301,
      image: auricular,
      link: '/products',
      name: 'auriculares',
      count: data?.countProducts?.auricular ?? 0,
    },
    {
      id: 302,
      image: gabinete,
      link: '/products',
      name: 'gabinetes',
      count: data?.countProducts?.gabinetes ?? 0,
    },
    {
      id: 304,
      image: pcCombo,
      link: '/',
      name: 'Pc Armadas',
      count: data?.countProducts?.pcs ?? 0,
    },
    {
      id: 303,
      image: monitor,
      link: '/products',
      name: 'monitores',
      count: data?.countProducts?.monitores ?? 0,
    },
  ];

  return (
    <div className="linkproduct">
      <section className="linkproduct__section">
        {linksProducts.map((product) => (
          <article key={product.id} className="linkproduct__article">
            <div
              onClick={() => handleFilters(product.name)}
              className="linkproduct__link"
            >
              <Image
                className="linkproduct__image"
                src={product.image}
                alt="Imagen de producto"
                width={500}
                height={500}
              />
              <span className="linkproduct__span">{product.name}</span>
            </div>
            <p className="linkproduct__p">{product.count} productos</p>
          </article>
        ))}
      </section>
    </div>
  );
}
