'use client';
import { useBearStore } from '@/store/store';
import { auricular, gabinete, monitor, pcCombo } from '@/utils/cloudinary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
export interface ProductsMap {
  id: number;
  name: string;
  image: string;
  link: string;
}
const linksProducts: ProductsMap[] = [
  { id: 301, image: auricular, link: '/products', name: 'auriculares' },
  { id: 302, image: gabinete, link: '/products', name: 'gabinetes' },
  { id: 303, image: pcCombo, link: '/products', name: 'monitores' },
  {
    id: 304,
    image: monitor,
    link: '/',
    name: 'Pc Armadas',
  },
];
export default function LinksProducts() {
  const { handleFilterCB } = useBearStore((state) => state);
  const router = useRouter();
  const handleFilters = (category: string) => {
    handleFilterCB(category, null, null, null, null);
    router.push('/products');
  };

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
            <p className="linkproduct__p">10 productos</p>
          </article>
        ))}
      </section>
    </div>
  );
}
