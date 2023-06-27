'use client';
import Select from '@/atoms/Select';
import React, { useEffect, useState } from 'react';
import AnimationList, { CategoryBrand } from './AnimationList';
import { useQuery } from '@apollo/client';
import { GetBrandQuery } from '@/__generated__/graphql-types';
import { GET_BRAND } from '@/utils/graphql/query';
import { useBearStore } from '@/store/store';

export default function BrandList() {
  const { data, loading } = useQuery<GetBrandQuery>(GET_BRAND);
  const [viewBrandList, setViewBrandList] = useState<boolean>(false);
  const { handleLoadingBrand } = useBearStore((state) => state);
  const handleMouseDown = () => {
    setViewBrandList(true);
  };
  const handleMouseLeave = () => {
    setViewBrandList(false);
  };
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (loading) {
      timerId = setTimeout(() => handleLoadingBrand(false), 800);
    }
    return () => clearTimeout(timerId);
  }, [loading]);
  return (
    <ul
      className="header__brands"
      onMouseEnter={handleMouseDown}
      onMouseLeave={handleMouseLeave}
    >
      <Select text="Marcas" icon="down" />
      <AnimationList
        brand
        brandFilter
        list={data?.brand as CategoryBrand[]}
        viewListProduct={viewBrandList}
      />
    </ul>
  );
}
