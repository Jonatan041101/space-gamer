'use client';
import { Image } from '@/__generated__/graphql-types';
import React, { useRef, useState } from 'react';
import ZoomIcon from './ZoomIcon';
import Slider from './Slider';
import SelectImage from './SelectImage';
import Modal from '../Modal/Modal';
import ImagesModal from './ImagesModal';

interface Props {
  name: string;
  image?: Image[];
}

export default function ProductDetail({ image }: Props) {
  const [nameImage, setNameImage] = useState<string>('');
  const [view, setView] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const translateRef = useRef<number>(0);

  const handleChangeImage = (name: string | undefined) => {
    if (!name) return;
    setNameImage(name);
  };
  const handleMoveSlide = (index: number) => {
    translateRef.current = -index;
    const translate = translateRef.current * 100;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translate}%)`;
    }
  };
  const handleOpenModal = () => {
    setView(!view);
  };
  return (
    <div className="productd__images">
      <article className="productd__article">
        <ZoomIcon handleOpenModal={handleOpenModal} />
        <Slider
          image={image}
          changeImage={handleChangeImage}
          sliderRef={sliderRef}
          translateRef={translateRef}
        />
      </article>
      <article className="productd__slides">
        <SelectImage
          handleChangeImage={handleMoveSlide}
          name={nameImage}
          image={image}
        />
      </article>
      {view && (
        <Modal>
          <ImagesModal handleOpenModal={handleOpenModal} image={image} />
        </Modal>
      )}
    </div>
  );
}
