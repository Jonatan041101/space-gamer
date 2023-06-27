import React from 'react';
import { ListComponentsPc } from './types';
import Image from 'next/image';

interface Props {
  arma: ListComponentsPc;
  handleGetProducts: (name: string) => void;
}

export default function Windows({ arma, handleGetProducts }: Props) {
  return (
    <article
      className="armapc__article"
      key={arma.id}
      onClick={() => handleGetProducts(arma.name)}
    >
      <Image
        className="armapc__image"
        src={arma.img}
        alt=""
        width={100}
        height={100}
      />
      <h3 className="armapc__h3">{arma.name}</h3>
    </article>
  );
}
