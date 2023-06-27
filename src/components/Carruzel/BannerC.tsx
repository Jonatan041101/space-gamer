import { Banner } from '@/__generated__/graphql-types';
import Image from 'next/image';
import React from 'react';

interface Props {
  img: Banner;
}

export default function BannerC({ img }: Props) {
  const IMAGE = img.image ?? '';

  return (
    <article className="banner__container">
      <Image
        className="banner__image"
        src={IMAGE}
        alt={IMAGE}
        width={2000}
        style={{ objectFit: 'scale-down' }}
        height={100}
        draggable={false}
      />
    </article>
  );
}
