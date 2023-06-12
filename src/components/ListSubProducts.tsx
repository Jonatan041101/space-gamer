import { useBearStore } from '@/store/store';
import React from 'react';

import { handleAddStrUrl } from './ListProducts';
import { Category, SubCategory } from '@/__generated__/graphql-types';
import { LinksPrev } from './ProductDetail/LinksPrevProduct';
import { useRouter } from 'next/navigation';

interface Props {
  name: string;
  sub: SubCategory;
  li: Category;
}
export const handleAddStrSubUrl = (nameC: string, nameS: string) => {
  const allLinks = handleAddStrUrl(nameC);
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
  const { handleAddHistoryLink, handleFilterCB, category, subCategory } =
    useBearStore((state) => state);

  const router = useRouter();
  const handleAddSubCategoryLink = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    const allLinks = handleAddStrSubUrl(name, sub.name);
    handleFilterCB(name, sub.name, null, null, li);
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
