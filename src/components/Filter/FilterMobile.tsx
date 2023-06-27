'use client';
import InputSquare from '@/atoms/InputSquare';
import useCategory from '@/hooks/useCategory';
import { useBearStore } from '@/store/store';
import React, { useState } from 'react';
import CategorySelect from './CategorySelect';
import Brands from './Brands';
import { Category, Products } from '@/__generated__/graphql-types';
import { handleAllFilter } from '@/utils/filters';
import useGetProducts from '@/hooks/useGetProducts';
import Icons from '@/atoms/Icons';
import FilterDown from './FilterDown';
import Close from '@/atoms/Close';

interface Props {
  filterMobile?: boolean;
  handleViewFilter: () => void;
}

export default function FilterMobile({
  filterMobile = false,
  handleViewFilter,
}: Props) {
  const {
    categorySelect,
    handleFilterCB,
    searchInput,
    brandSelect,
    cardsCopy,
    handleFilterSearch,
    handleAddCards,
    fixedMenu,
  } = useBearStore((state) => state);
  const data = useCategory();
  const { handleGetProductsDB } = useGetProducts();
  const [mobile, setMobile] = useState<boolean>(false);
  const [brands, setBrands] = useState<boolean>(false);
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
  const handlerFilter = async (
    evt: React.MouseEvent,
    name: string | undefined,
    category: Category | null
  ) => {
    evt.stopPropagation();
    handleFilterCB(category?.name ?? null, name ?? null, null, null, category);
    const products = await handleGetProductsDB(
      category?.name ?? null,
      name ?? null,
      null
    );

    handleAddCards(products.data?.getProductFilter as Products[]);
  };
  const handleViewCategory = () => {
    setMobile(!mobile);
    setBrands(false);
  };
  const handleViewBrand = () => {
    setMobile(false);
    setBrands(!brands);
  };
  return (
    <div className="filter" data-filter={filterMobile}>
      <div
        className="filter__fixed"
        // style={{ position: fixedMenu }}
      >
        <div className="filter__title">
          <h3 className="filter__h3">Filtros</h3>
          <Close width handleClick={handleViewFilter} />
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
        <div className="filter__category filtermobile__category">
          <div
            className="filtermobile__category--brand"
            onClick={handleViewCategory}
          >
            Categorias
            <FilterDown />
          </div>
          {mobile && (
            <ul className="filter__ul filtermobile__ul">
              {categorySelect ? (
                <CategorySelect
                  handlerFilter={handlerFilter}
                  categorySelect={categorySelect}
                />
              ) : (
                data?.category?.map((list) => (
                  <li
                    className="filter__lii filtermobile__li"
                    onClick={(evt) =>
                      handlerFilter(evt, undefined, list as Category)
                    }
                    key={list?.id}
                  >
                    {list?.name}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
        <div className="filter__brand filtermobile__category">
          <div
            className="filtermobile__category--brand"
            onClick={handleViewBrand}
          >
            Marcas
            <FilterDown />
          </div>
          {brands && <Brands />}
        </div>
        <button className="filter__button" onClick={resetFilters}>
          Resetear
        </button>
      </div>
    </div>
  );
}
