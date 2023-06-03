import Select from '@/atoms/Select';
import Link from 'next/link';
import React from 'react';
import { linksHeader } from './listMap';
import ProductsList from './ProductsList';
import BrandList from './BrandList';

export default function NavHeader() {
  return (
    <nav className="header__nav">
      <ProductsList />
      <BrandList />
      <ul className="header__links">
        {linksHeader.map((link) => (
          <li key={link.id}>
            <Link href={link.link} className="header__link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
