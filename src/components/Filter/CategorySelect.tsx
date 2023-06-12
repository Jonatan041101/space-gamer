import { Category } from '@/__generated__/graphql-types';
import { useBearStore } from '@/store/store';
import React from 'react';

interface Props {
  categorySelect: Category;
}
export default function CategorySelect({ categorySelect }: Props) {
  const { handleFilterCB } = useBearStore((state) => state);
  return (
    <li className="filter__li">
      {categorySelect.name}
      <ul className="filter__sub">
        {categorySelect.subCategory?.map((sub) => (
          <li
            key={sub?.id}
            className="filter__subli"
            onClick={() =>
              handleFilterCB(
                categorySelect.name,
                sub?.name ?? null,
                null,
                null,
                categorySelect
              )
            }
          >
            {sub?.name}
          </li>
        ))}
      </ul>
    </li>
  );
}
