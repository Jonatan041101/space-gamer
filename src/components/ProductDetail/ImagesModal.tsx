import React, { useRef } from 'react';
import { Image as ImageGraph } from '@/__generated__/graphql-types';
import Image from 'next/image';
import Icons from '@/atoms/Icons';
import BtnR from './BtnR';
import BtnL from './BtnL';
export interface PropsSlider {
  image?: ImageGraph[];
  handleOpenModal: () => void;
}
export default function ImagesModal({ image, handleOpenModal }: PropsSlider) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const translateRef = useRef<number>(0);
  const IMAGENLEN = image?.length ?? 0;
  return (
    <div className="slides__buttons">
      <i className="slides__close" onClick={handleOpenModal}>
        <Icons icon="close" />
      </i>

      <div className="slides__l">
        <BtnL
          IMAGENLEN={IMAGENLEN}
          sliderRef={sliderRef}
          translateRef={translateRef}
          size
        />
      </div>
      <div className="slides__r">
        <BtnR
          IMAGENLEN={IMAGENLEN}
          sliderRef={sliderRef}
          translateRef={translateRef}
          size
        />
      </div>
      <div className="slides__width">
        <div className="slides__container" ref={sliderRef}>
          {image?.map((img) => {
            const IMG = img.image ?? '';
            return (
              <div key={img.id} className="slides__modal">
                <Image
                  className="slides__img"
                  src={IMG}
                  alt=""
                  width={400}
                  height={250}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
