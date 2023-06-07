import Icons from '@/atoms/Icons';
import React from 'react';
import { handleNextImage, slider, translate } from './Slider';

export interface PropsButtons {
  IMAGENLEN: number;
  translateRef: translate;
  sliderRef: slider;
  size?: boolean;
}
export default function BtnR({
  IMAGENLEN,
  sliderRef,
  translateRef,
  size,
}: PropsButtons) {
  return (
    <button
      className="slider__button"
      onClick={() => handleNextImage(-1, IMAGENLEN, translateRef, sliderRef)}
    >
      <i className="slider__right" data-size={size}>
        <Icons icon="down" />
      </i>
    </button>
  );
}
