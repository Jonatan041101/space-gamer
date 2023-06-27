'use client';
import Select from '@/atoms/Select';
import React, { useEffect, useRef } from 'react';
import { useBearStore } from '@/store/store';
import AnimationList, { CategoryBrand } from './AnimationList';
import useCategory from '@/hooks/useCategory';
export default function ProductsList() {
  const data = useCategory();

  const { handleViewListProduct, handleLoadingCategory, viewListProduct } =
    useBearStore((state) => state);

  const refIcon = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (viewListProduct) {
      if (refIcon.current) {
        if (refIcon.current.firstElementChild?.lastElementChild) {
          refIcon.current.firstElementChild.lastElementChild.classList.add(
            'select__rotate'
          );
        }
      }
    } else {
      if (refIcon.current) {
        if (refIcon.current.firstElementChild?.lastElementChild) {
          refIcon.current.firstElementChild.lastElementChild.classList.remove(
            'select__rotate'
          );
        }
      }
    }
  }, [viewListProduct]);
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (data) {
      timerId = setTimeout(() => handleLoadingCategory(false), 800);
    }
    return () => clearTimeout(timerId);
  }, [data]);
  const handleViewProducts = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    handleViewListProduct(!viewListProduct);
  };

  return (
    <div className="header__products">
      <div className="header__list" ref={refIcon} onClick={handleViewProducts}>
        <Select text="Productos" icon="down" barIcon="bar" width="1em" />
      </div>
      {data && (
        <AnimationList
          list={data.category as CategoryBrand[]}
          viewListProduct={viewListProduct}
        />
      )}
    </div>
  );
}
