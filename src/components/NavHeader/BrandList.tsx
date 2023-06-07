'use client';
import Select from '@/atoms/Select';
import { LiProducts } from '@/types/types';
import React, { useState } from 'react';
import AnimationList, { CategoryBrand } from './AnimationList';
import { useQuery } from '@apollo/client';
import { Brand, GetBrandQuery } from '@/__generated__/graphql-types';
import { GET_BRAND } from '@/utils/graphql/query';

export default function BrandList() {
  const { data } = useQuery<GetBrandQuery>(GET_BRAND);
  const [viewBrandList, setViewBrandList] = useState<boolean>(false);
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
      <AnimationList
        brand
        list={data?.brand as CategoryBrand[]}
        viewListProduct={viewBrandList}
      />
    </ul>
  );
}
