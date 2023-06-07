import { Image as ImageGraph } from '@/__generated__/graphql-types';
import Image from 'next/image';
import React from 'react';
interface Props {
  image: ImageGraph;
  name: string;
  handleChangeImage: (index: number) => void;
  index: number;
}
export default function ImageSlide({
  image,
  name,
  index,
  handleChangeImage,
}: Props) {
  const IMAGE = image.image ?? '';
  return (
    <div
      className="slides__div"
      data-image={name === IMAGE}
      onClick={() => handleChangeImage(index)}
    >
      <Image
        className="slides__image"
        src={IMAGE}
        alt={`${IMAGE} captura del videojuego`}
        width={50}
        height={50}
      />
    </div>
  );
}
