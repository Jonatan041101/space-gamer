'use client';
import Select from '@/atoms/Select';
import { LiProducts } from '@/types/types';
import React, { useState } from 'react';
import AnimationList from './AnimationList';

export default function BrandList() {
  const [viewBrandList, setViewBrandList] = useState<boolean>(false);
  const brandMap: LiProducts[] = [
    {
      id: 200,
      link: '/',
      name: 'Amd',
    },
    { id: 201, link: '/', name: 'Asus' },
    { id: 202, link: '/', name: 'Cooler Master' },
    { id: 203, link: '/', name: 'Corsair' },
    { id: 204, link: '/', name: 'Gigabyte' },
    { id: 205, link: '/', name: 'HP' },
    { id: 206, link: '/', name: 'HyperX' },
    { id: 207, link: '/', name: 'Intel' },
    { id: 208, link: '/', name: 'Kingston' },
    { id: 209, link: '/', name: 'Lenovo' },
    { id: 210, link: '/', name: 'Logitech' },
    { id: 211, link: '/', name: 'Msi' },
    { id: 212, link: '/', name: 'Nintendo Switch' },
    { id: 213, link: '/', name: 'Ps4' },
    { id: 214, link: '/', name: 'Ps5' },
    { id: 215, link: '/', name: 'Redragon' },
    { id: 216, link: '/', name: 'Thermaltake' },
    { id: 217, link: '/', name: 'Razer' },
  ];

  const handleMouseDown = () => {
    setViewBrandList(true);
  };
  const handleMouseLeave = () => {
    setViewBrandList(false);
  };
  return (
    <ul
      className="header__brands"
      onMouseEnter={handleMouseDown}
      onMouseLeave={handleMouseLeave}
    >
      <Select text="Marcas" icon="down" />
      <AnimationList brand list={brandMap} viewListProduct={viewBrandList} />
    </ul>
  );
}
