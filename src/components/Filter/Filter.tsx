'use client';
import InputSquare from '@/atoms/InputSquare';
import useCategory from '@/hooks/useCategory';
import { useBearStore } from '@/store/store';
import React from 'react';
import CategorySelect from './CategorySelect';
import Brands from './Brands';
import { Category } from '@/__generated__/graphql-types';
import { handleAllFilter } from '@/utils/filters';

export default function Filter() {
  const {
    categorySelect,
    handleFilterCB,
    searchInput,
    brandSelect,
    cardsCopy,
    handleFilterSearch,
  } = useBearStore((state) => state);
  const data = useCategory();
  const resetFilters = () => {
    handleFilterCB(null, null, null, null, null);
  };
  const handleFilterSearchProducts = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = evt.target;
    const products = handleAllFilter(cardsCopy, value, brandSelect);
    handleFilterSearch(products, value);
  };
  return (
    <div className="filter">
      <div className="filter__title">
        <h3 className="filter__h3">Filtros</h3>
      </div>
      <div className="filter__input">
        <InputSquare
          placeholder="Buscar"
          handleChange={handleFilterSearchProducts}
          value={searchInput}
          labelText=""
          input
        />
      </div>
      <div className="filter__category">
        Categorias
        <ul className="filter__ul">
          {categorySelect ? (
            <CategorySelect categorySelect={categorySelect} />
          ) : (
            data?.category?.map((list) => (
              <li
                className="filter__lii"
                onClick={() =>
                  handleFilterCB(
                    list?.name ?? null,
                    null,
                    null,
                    null,
                    list as Category
                  )
                }
                key={list?.id}
              >
                {list?.name}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="filter__brand">
        Marcas
        <Brands />
      </div>
      <button className="filter__button" onClick={resetFilters}>
        Resetear
      </button>
    </div>
  );
}
