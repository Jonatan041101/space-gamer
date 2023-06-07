import React from 'react';
import { handleNextImage } from './Slider';
import Icons from '@/atoms/Icons';
import { PropsButtons } from './BtnR';

export default function BtnL({
  IMAGENLEN,
  sliderRef,
  translateRef,
  size,
}: PropsButtons) {
  return (
    <button
      className="slider__button"
      onClick={() => handleNextImage(1, IMAGENLEN, translateRef, sliderRef)}
    >
      <i className="slider__left" data-size={size}>
        <Icons icon="down" />
      </i>
    </button>
  );
}
