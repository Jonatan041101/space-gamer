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
import { useBearStore } from '@/store/store';
import { useRouter } from 'next/navigation';

export default function LinksComponentsPc() {
  const linksComponentsPcMap: ProductsMap[] = [
    {
      id: 320,
      image: mouse,
      link: '/',
      name: 'Mouse',
    },
    { id: 321, image: teclado, link: '/', name: 'teclados' },
    { id: 322, image: joysticks, link: '/', name: 'joysticks' },
    { id: 323, image: memoriasRam, link: '/', name: 'memorias ram' },
    { id: 324, image: placasDeVideo, link: '/', name: 'targetas gráficas' },
    { id: 325, image: fuente, link: '/', name: 'fuentes' },
  ];
  const router = useRouter();
  const { handleFilterCB } = useBearStore((state) => state);
  const handlerFilter = (sub: string) => {
    handleFilterCB('periféricos', sub, null, null, null);
    router.push('/products');
  };
  return (
    <div className="linkproduct">
      <section className="linkproduct__section component">
        {linksComponentsPcMap.map((componentPc) => (
          <div
            onClick={() => handlerFilter(componentPc.name)}
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
