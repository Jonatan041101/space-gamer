import { Category } from '@/__generated__/graphql-types';
import React from 'react';

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
  return (
    <li
      className="filter__li"
      onClick={(evt) => handlerFilter(evt, undefined, categorySelect)}
    >
      {categorySelect.name}
      <ul className="filter__sub">
        {categorySelect.subCategory?.map((sub) => (
          <li
            key={sub?.id}
            className="filter__subli"
            onClick={(evt) => handlerFilter(evt, sub?.name, categorySelect)}
          >
            {sub?.name}
          </li>
        ))}
      </ul>
    </li>
  );
}
