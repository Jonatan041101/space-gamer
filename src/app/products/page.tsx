'use client';
import Filter from '@/components/Filter/Filter';
import FilterMobile from '@/components/Filter/FilterMobile';
import Modal from '@/components/Modal/Modal';
import LinksPrevProduct from '@/components/ProductDetail/LinksPrevProduct';
import ProductsFilter from '@/components/ProductsFilter';
import React, { useState } from 'react';

export default function PageFilters() {
  const [view, setView] = useState<boolean>(false);
  const handleViewFilter = () => {
    setView(!view);
  };
  return (
    <>
      <div className="products">
        <div className="products__container">
          <LinksPrevProduct />
          <div className="products__flex">
            {/* <div className="products__filters">
              <Filter />
            </div> */}
            <ProductsFilter handleViewFiltros={handleViewFilter} />
          </div>
        </div>
      </div>
      {view && (
        <Modal start>
          <div className="products__filters--mobile">
            <FilterMobile filterMobile handleViewFilter={handleViewFilter} />
          </div>
        </Modal>
      )}
    </>
  );
}
