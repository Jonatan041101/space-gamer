'use client';
import React from 'react';
import { ProductsMap } from './LinksProducts';
import {
  fuente,
  joysticks,
  memoriasRam,
  mouse,
  placasDeVideo,
  teclado,
} from '@/utils/cloudinary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useLinksFilter from '@/hooks/useLinksFilter';
type Perifericos = Omit<ProductsMap, 'count'>;
type PerifericosCategory = Perifericos & {
  category: string;
};
export default function LinksComponentsPc() {
  const linksComponentsPcMap: PerifericosCategory[] = [
    {
      id: 320,
      image: mouse,
      link: '/',
      name: 'mouse',
      category: '',
    },
    {
      id: 321,
      image: teclado,
      link: '/',
      name: 'teclados',
      category: 'periféricos',
    },
    {
      id: 322,
      image: joysticks,
      link: '/',
      name: 'joysticks',
      category: 'periféricos',
    },
    {
      id: 323,
      image: memoriasRam,
      link: '/',
      name: 'memorias ram',
      category: 'componentes de pc',
    },
    {
      id: 324,
      image: placasDeVideo,
      link: '/',
      name: 'targetas gráficas',
      category: '',
    },
    {
      id: 325,
      image: fuente,
      link: '/',
      name: 'fuentes',
      category: 'componentes de pc',
    },
  ];
  const router = useRouter();
  const { filterProductsWithLink } = useLinksFilter();
  const handlerFilter = async (sub: string, category: string) => {
    router.push('/products');
    if (sub === 'targetas gráficas') {
      await filterProductsWithLink(sub, null);
      return;
    }
    await filterProductsWithLink(category, sub);
  };
  return (
    <div className="linkproduct">
      <section className="linkproduct__section component">
        {linksComponentsPcMap.map((componentPc) => (
          <div
            onClick={() =>
              handlerFilter(componentPc.name, componentPc.category)
            }
            key={componentPc.id}
            className="component__link"
          >
            <Image
              className="component__image"
              src={componentPc.image}
              alt={componentPc.name}
              width={150}
              height={150}
            />
            <span className="component__span">{componentPc.name}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
