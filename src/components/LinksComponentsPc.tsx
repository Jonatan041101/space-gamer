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
import Link from 'next/link';

export default function LinksComponentsPc() {
  const linksComponentsPcMap: ProductsMap[] = [
    {
      id: 320,
      image: mouse,
      link: '/',
      name: 'Mouse',
    },
    { id: 321, image: teclado, link: '/', name: 'Teclados' },
    { id: 322, image: joysticks, link: '/', name: 'Joysticks' },
    { id: 323, image: memoriasRam, link: '/', name: 'Memorias Ram' },
    { id: 324, image: placasDeVideo, link: '/', name: 'Placas de Video' },
    { id: 325, image: fuente, link: '/', name: 'Fuentes' },
  ];

  return (
    <div className="linkproduct">
      <section className="linkproduct__section component">
        {linksComponentsPcMap.map((componentPc) => (
          <Link
            href={componentPc.link}
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
          </Link>
        ))}
      </section>
    </div>
  );
}
