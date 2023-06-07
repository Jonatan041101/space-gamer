import SquareTitle from '@/atoms/SquareTitle';
import Link from 'next/link';
import React from 'react';
export interface LinksPrev {
  id: number;
  link: string;
  name: string;
}
interface Props {
  nameProduct: string;
}

export default function LinksPrevProduct({ nameProduct }: Props) {
  const NAME = nameProduct.replaceAll('%20', ' ');
  const titleGame = { id: 1003, link: '/', name: NAME };
  const linksMap = [
    { id: 1001, link: '/', name: 'Home' },
    { id: 1002, link: '/', name: 'Videojuegos' },
  ];
  return (
    <div className="squaret">
      <div className="squaret__links">
        {linksMap.map((link) => (
          <SquareTitle key={link.id} link={link} />
        ))}
      </div>
      <SquareTitle trans link={titleGame} />
    </div>
  );
}
// box-shadow: 0 0 0 2px #f2f2f2 inset;
