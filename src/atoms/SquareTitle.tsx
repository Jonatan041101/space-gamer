'use client';
import {
  Category,
  GetSearchCategoryQuery,
  Products,
} from '@/__generated__/graphql-types';
import { handleAddStrUrl } from '@/components/ListProducts';
import { LinksPrev } from '@/components/ProductDetail/LinksPrevProduct';
import useGetProducts from '@/hooks/useGetProducts';
import { useBearStore } from '@/store/store';
import { orderProductsBeforeGetDB } from '@/utils/filters';
import { GET_CATEGORY_SEARCH } from '@/utils/graphql/query';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  link: LinksPrev;
  trans?: boolean;
  isClick: boolean;
}
export default function SquareTitle({
  link,
  trans = false,
  isClick = false,
}: Props) {
  const { handleGetProductsDB } = useGetProducts();
  const [getCategory] =
    useLazyQuery<GetSearchCategoryQuery>(GET_CATEGORY_SEARCH);
  const router = useRouter();

  const { handleAddHistoryLink, handleFilterCB, handleAddCards, typeOrder } =
    useBearStore((state) => state);

  const clickLink = async () => {
    console.log('HOLA MUNDO', { isFilter: link.isFilter });
    if (link.isFilter) {
      const { data } = await getCategory({ variables: { name: link.name } });
      console.log(data);
      if (data?.searchCategory) {
        handleFilterCB(
          link.name,
          null,
          null,
          null,
          data?.searchCategory as Category
        );
      }
      const products = await handleGetProductsDB(link.name, null, null);
      orderProductsBeforeGetDB(
        typeOrder,
        products.data?.getProductFilter as Products[],
        handleAddCards
      );
      const allLinks = handleAddStrUrl(link.name, false);
      handleAddHistoryLink(allLinks);
      if (allLinks) {
        handleAddHistoryLink(allLinks);
      }
    }
    router.push(link.link);
  };

  return (
    <div
      onClick={isClick ? clickLink : () => {}}
      className="squaret__link"
      data-name={trans}
    >
      <p className="squaret__p">{link.name}</p>
    </div>
  );
}
