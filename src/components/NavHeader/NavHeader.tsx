import Link from 'next/link';
import React from 'react';
import { linksHeader } from './listMap';
import ProductsList from './ProductsList';
import BrandList from './BrandList';
import NavBar from './NavBar';

export default function NavHeader() {
  return (
    <>
      <nav className="header__nav">
        <ProductsList />
        <BrandList />
        <ul className="header__links">
          {linksHeader.map((link) => (
            <li key={link.id}>
              <Link href={link.link} className="header__link">
                <span className="header__text">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <NavBar />
    </>
  );
}
