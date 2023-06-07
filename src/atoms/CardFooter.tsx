import { ListModal } from '@/components/Footer';
import Image from 'next/image';
import React from 'react';

interface Props {
  modal: ListModal;
}

export default function CardFooter({ modal }: Props) {
  return (
    <article className="cardf">
      <Image
        className="cardf__image"
        src={modal.image}
        alt="Imagen de la modal"
        width={50}
        height={50}
      />
      <h3 className="cardf__h3">{modal.title}</h3>
      <p className="cardf__p">{modal.text}</p>
    </article>
  );
}
