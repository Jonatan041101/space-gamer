import React from 'react';
import { ListModal } from '../Footer';
import Image from 'next/image';

interface Props {
  list: ListModal;
}
export default function ListOption({ list }: Props) {
  return (
    <div className="listoption">
      <Image
        className="listoption__image"
        src={list.image}
        alt=""
        width={100}
        height={100}
      />
      <div className="listoption__div">
        <h3 className="listoption__h3">{list.title}</h3>
        <p className="listoption__p">{list.text}</p>
      </div>
    </div>
  );
}
