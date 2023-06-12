import Filter from '@/components/Filter/Filter';
import LinksPrevProduct from '@/components/ProductDetail/LinksPrevProduct';
import ProductsFilter from '@/components/ProductsFilter';
import React from 'react';

export default function page() {
  return (
    <div className="products">
      <div className="products__container">
        <LinksPrevProduct />
        <div className="products__flex">
          <Filter />
          <ProductsFilter />
        </div>
      </div>
    </div>
  );
}
