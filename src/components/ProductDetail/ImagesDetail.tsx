import { Image as ImageGraph } from '@/__generated__/graphql-types';
import useView from '@/hooks/useView';
import Image from 'next/image';
import React from 'react';

interface Props {
  image: ImageGraph;
  changeImage: (name: string | undefined) => void;
}

export default function ImagesDetail({ image, changeImage }: Props) {
  const IMAGE = image.image ?? '';
  const imgRef = useView(changeImage, IMAGE);
  return (
    <div className="productd__img" ref={imgRef}>
      <Image
        className="productd__image"
        src={IMAGE}
        alt=""
        width={250}
        height={250}
      />
    </div>
  );
}
