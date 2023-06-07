import { LinksPrev } from '@/components/ProductDetail/LinksPrevProduct';
import Link from 'next/link';
import React from 'react';

interface Props {
  link: LinksPrev;
  trans?: boolean;
}
export default function SquareTitle({ link, trans = false }: Props) {
  return (
    <Link href={link.link} className="squaret__link" data-name={trans}>
      <p className="squaret__p">{link.name}</p>
    </Link>
  );
}
