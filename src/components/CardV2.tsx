import Icons from '@/atoms/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SquareIcon from './SquareIcon';

export default function CardV2() {
  return (
    <article className="cardv2">
      <SquareIcon />
      <Link href="/">
        <Image
          className="cardv2__image"
          src={
            'https://res.cloudinary.com/damjxqb5f/image/upload/v1685808561/1058-producto-b450mplus-8950_uq2nf6.jpg'
          }
          alt="Producto en venta"
          width={200}
          height={200}
        />
      </Link>
      <div className="cardv2__p">
        <h3> Motherboard Asus Tuf Gaming B450M-Plus II</h3>
        <div className="cardv2__price">
          <p className="card__price">$66.204</p>
          <p className="cardv2__quotes">
            12 CUOTAS DE <span className="cardv2__quote">$9.839</span>
          </p>
        </div>
      </div>
    </article>
  );
}
