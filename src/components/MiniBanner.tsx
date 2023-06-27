import React from 'react';
import { ProductsMap } from './LinksProducts';
import { miniBannerPs5VsXbox } from '@/utils/cloudinary';
import { miniBannerArmando } from '@/utils/cloudinary';
import Image from 'next/image';
type LinksMiniBanner = Omit<ProductsMap, 'name'>;
export default function MiniBanner() {
  const miniBannerMap: Omit<LinksMiniBanner, 'count'>[] = [
    { id: 380, image: miniBannerPs5VsXbox, link: '/' },
    { id: 381, image: miniBannerArmando, link: '/' },
  ];
  return (
    <div className="minibanner">
      <section className="minibanner__section">
        {miniBannerMap.map((banner) => (
          <article key={banner.id} className="minibanner__article">
            <Image
              className="minibanner__image"
              src={banner.image}
              alt={banner.image}
              width={800}
              height={300}
              draggable={false}
            />
          </article>
        ))}
      </section>
    </div>
  );
}
