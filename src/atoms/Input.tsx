'use client';
import React, { useEffect, useState } from 'react';
import Icons, { IconType } from './Icons';
import { useLazyQuery } from '@apollo/client';
import { GetProductSearhQuery, Products } from '@/__generated__/graphql-types';
import { PRODUCT_SEARCH } from '@/utils/graphql/query';
import { useRouter } from 'next/navigation';
import { useBearStore } from '@/store/store';
import { handleAddStrUrl } from '@/components/ListProducts';

interface Props {
  icon?: IconType;
  placeholder: string;
}

export default function Input({ icon, placeholder }: Props) {
  const [search, setSearch] = useState<string>('');
  const { handleAddCards, handleFilterCB, handleAddHistoryLink } = useBearStore(
    (state) => state
  );
  const [product] = useLazyQuery<GetProductSearhQuery>(PRODUCT_SEARCH);
  const router = useRouter();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setSearch(value);
  };
  const handleSearchProducts = async (
    evt: React.FormEvent<HTMLFormElement>
  ) => {
    evt.preventDefault();
    const productsSearch = await product({ variables: { name: search } });
    handleAddCards(productsSearch.data?.searchProducts as Products[]);
    const allLinks = handleAddStrUrl(`Resultados de busqueda  "${search}"`);
    handleAddHistoryLink(allLinks);
    router.push('/products');
    setSearch('');
    handleFilterCB(null, null, null, null, null);
  };
  return (
    <form className="input" onSubmit={handleSearchProducts}>
      <input
        onChange={handleChange}
        value={search}
        className="input__input"
        placeholder={placeholder}
      />
      {icon && (
        <i className="input__i">
          <Icons icon={icon} />
        </i>
      )}
    </form>
  );
}
