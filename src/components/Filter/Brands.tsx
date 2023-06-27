'use client';
import useBrand from '@/hooks/useBrand';
import { useBearStore } from '@/store/store';
import { handleAllFilter } from '@/utils/filters';
import React from 'react';

export default function Brands() {
  const brand = useBrand();
  const { cardsCopy, searchInput, handleFilterBrand } = useBearStore(
    (state) => state
  );
  const handleFilter = (name: string | undefined) => {
    if (name) {
      const products = handleAllFilter(cardsCopy, searchInput, name);

      handleFilterBrand(products, name);
    }
  };
  const handleAllBrand = () => {
    const products = handleAllFilter(cardsCopy, searchInput, null);
    handleFilterBrand(products, null);
  };
  return (
    <ul className="filter__ul filtermobile__ul">
      <li
        className="filter__li filtermobile__li"
        onClick={() => handleAllBrand()}
      >
        Todos
      </li>
      {brand?.brand?.map((brand) => (
        <li
          className="filter__li filtermobile__li"
          key={brand?.id}
          onClick={() => handleFilter(brand?.name)}
        >
          {brand?.name}
        </li>
      ))}
    </ul>
  );
}
