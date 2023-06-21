import { useBearStore } from '@/store/store';
import React from 'react';

import { handleAddStrUrl } from './ListProducts';
import { Category, Products, SubCategory } from '@/__generated__/graphql-types';
import { LinksPrev } from './ProductDetail/LinksPrevProduct';
import { useRouter } from 'next/navigation';
import useGetProducts from '@/hooks/useGetProducts';
import { orderProductsBeforeGetDB } from '@/utils/filters';

interface Props {
  name: string;
  sub: SubCategory;
  li: Category;
}

export const handleAddStrSubUrl = (
  nameC: string,
  nameS: string,
  isFilter: boolean
) => {
  const allLinks = handleAddStrUrl(nameC, isFilter);
  const id = allLinks.at(-1)?.id;
  if (id) {
    const link: LinksPrev = {
      id,
      link: '/products',
      name: nameS,
    };
    allLinks.push(link);
    return allLinks;
  }
};

export default function ListSubProducts({ name, sub, li }: Props) {
  const { handleAddHistoryLink, handleFilterCB, handleAddCards, typeOrder } =
    useBearStore((state) => state);
  const { handleGetProductsDB } = useGetProducts();
  const router = useRouter();
  const handleAddSubCategoryLink = async (evt: React.MouseEvent) => {
    evt.stopPropagation();
    const allLinks = handleAddStrSubUrl(name, sub.name, false);
    handleFilterCB(name, sub.name, null, null, li);

    const products = await handleGetProductsDB(name, sub.name, null);

    orderProductsBeforeGetDB(
      typeOrder,
      products.data?.getProductFilter as Products[],
      handleAddCards
    );
    if (allLinks) {
      handleAddHistoryLink(allLinks);
      router.push('/products');
    }
  };
  return (
    <li
      className="listp__list"
      key={`${sub?.id}`}
      onClick={handleAddSubCategoryLink}
    >
      {sub?.name}
    </li>
  );
}
