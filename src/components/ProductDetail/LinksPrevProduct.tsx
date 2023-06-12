'use client';
import SquareTitle from '@/atoms/SquareTitle';
import { useBearStore } from '@/store/store';
import React from 'react';
export interface LinksPrev {
  id: number;
  link: string;
  name: string;
}

export default function LinksPrevProduct() {
  const { links } = useBearStore((state) => state);
  const defect: LinksPrev = { id: 1030, link: '/', name: '' };
  return (
    <div className="squaret">
      <div className="squaret__links">
        {links.slice(0, links.length - 1).map((link) => (
          <SquareTitle key={link.id} link={link} />
        ))}
      </div>
      <SquareTitle trans link={links.at(-1) || defect} />
    </div>
  );
}
// box-shadow: 0 0 0 2px #f2f2f2 inset;
