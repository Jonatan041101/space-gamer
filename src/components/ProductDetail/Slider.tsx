'use client';
import React from 'react';
import ImagesDetail from './ImagesDetail';
import { Image } from '@/__generated__/graphql-types';
import BtnL from './BtnL';
import BtnR from './BtnR';
export type translate = React.MutableRefObject<number>;
export type slider = React.MutableRefObject<HTMLDivElement | null>;

export const handleNextImage = (
  count: number,
  IMAGENLEN: number,
  translateRef: translate,
  sliderRef: slider
) => {
  if (
    translateRef.current + count > 0 || // Verificamos que no pase del primer elemento
    translateRef.current + count <= -IMAGENLEN ||
    !sliderRef.current // Ultimo elemento
  )
    return;

  translateRef.current = translateRef.current + count;

  const translate = translateRef.current * 100;

  sliderRef.current.style.transform = `translateX(${translate}%)`;
};

export interface PropsSlider {
  image?: Image[];
  changeImage: (name: string | undefined) => void;
  sliderRef: slider;
  translateRef: translate;
}
export default function Slider({
  image,
  changeImage,
  sliderRef,
  translateRef,
}: PropsSlider) {
  const IMAGENLEN = image?.length ?? 0;
  return (
    <div className="slider">
      <div className="slider__container" ref={sliderRef}>
        {image?.map((image) => (
          <ImagesDetail
            changeImage={changeImage}
            key={image?.id}
            image={image as Image}
          />
        ))}
      </div>
      <div className="slider__buttons">
        <BtnL
          IMAGENLEN={IMAGENLEN}
          sliderRef={sliderRef}
          translateRef={translateRef}
        />
        <BtnR
          IMAGENLEN={IMAGENLEN}
          sliderRef={sliderRef}
          translateRef={translateRef}
        />
      </div>
    </div>
  );
}
