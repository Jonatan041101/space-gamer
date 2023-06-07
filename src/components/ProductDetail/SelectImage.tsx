import React from 'react';
import ImageSlide from './ImageSlide';
import { GetProductDetailQuery, Image } from '@/__generated__/graphql-types';
interface Props {
  image?: Image[];
  name: string;
  handleChangeImage: (index: number) => void;
}

export default function SelectImage({ image, name, handleChangeImage }: Props) {
  return (
    <div className="slides">
      {image?.map((img, i) => (
        <ImageSlide
          index={i}
          handleChangeImage={handleChangeImage}
          name={name}
          key={img?.id}
          image={img as Image}
        />
      ))}
    </div>
  );
}
