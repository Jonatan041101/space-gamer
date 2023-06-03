'use client';
import Select from '@/atoms/Select';
import React, { useEffect, useRef } from 'react';
import { liProductsMap } from './listMap';
import { useBearStore } from '@/store/store';
import AnimationList from './AnimationList';

export default function ProductsList() {
  const { handleViewListProduct, viewListProduct } = useBearStore(
    (state) => state
  );
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

  const handleViewProducts = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    handleViewListProduct(!viewListProduct);
  };

  return (
    <div className="header__products">
      <div className="header__list" ref={refIcon} onClick={handleViewProducts}>
        <Select text="Productos" icon="down" barIcon="bar" width="1em" />
      </div>
      <AnimationList list={liProductsMap} viewListProduct={viewListProduct} />
    </div>
  );
}
