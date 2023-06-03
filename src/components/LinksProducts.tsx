import { auricular, gabinete, monitor, pcCombo } from '@/utils/cloudinary';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface ProductsMap {
  id: number;
  name: string;
  image: string;
  link: string;
}
const linksProducts: ProductsMap[] = [
  { id: 301, image: auricular, link: '/', name: 'Auricular' },
  { id: 302, image: gabinete, link: '/', name: 'Gabinetes' },
  { id: 303, image: pcCombo, link: '/', name: 'Monitores' },
  {
    id: 304,
    image: monitor,
    link: '/',
    name: 'Pc Armadas',
  },
];
export default function LinksProducts() {
  return (
    <div className="linkproduct">
      <section className="linkproduct__section">
        {linksProducts.map((product) => (
          <article key={product.id} className="linkproduct__article">
            <Link href={product.link} className="linkproduct__link">
              <Image
                className="linkproduct__image"
                src={product.image}
                alt="Imagen de producto"
                width={500}
                height={500}
              />
              <span className="linkproduct__span">{product.name}</span>
            </Link>
            <p className="linkproduct__p">10 productos</p>
          </article>
        ))}
      </section>
    </div>
  );
}
