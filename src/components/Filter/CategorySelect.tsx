'use client';
import { Category } from '@/__generated__/graphql-types';
import React, { useEffect } from 'react';
import { Storage } from '../ProductDetail/LinksPrevProduct';

interface Props {
  categorySelect: Category;
  handlerFilter: (
    evt: React.MouseEvent,
    name: string | undefined,
    category: Category
  ) => void;
}
export default function CategorySelect({
  categorySelect,
  handlerFilter,
}: Props) {
  useEffect(() => {
    window.localStorage.setItem(
      Storage.Category,
      JSON.stringify(categorySelect)
    );
  }, [categorySelect]);

  return (
    <>
      <li
        className="filter__li filtermobile__li"
        onClick={(evt) => handlerFilter(evt, undefined, categorySelect)}
      >
        {categorySelect.name}
      </li>
      <ul className="filter__sub filtermobile__sub">
        {categorySelect.subCategory?.map((sub) => (
          <li
            key={sub?.id}
            className="filter__subli filtermobile__subli"
            onClick={(evt) => handlerFilter(evt, sub?.name, categorySelect)}
          >
            {sub?.name}
          </li>
        ))}
      </ul>
    </>
  );
}
