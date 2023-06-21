'use client';
import React from 'react';
import Icons from '@/atoms/Icons';
import { motion } from 'framer-motion';
import { variantsOpacity } from './NavHeader/AnimationList';
import { Category, Products, SubCategory } from '@/__generated__/graphql-types';
import { useRouter } from 'next/navigation';
import { useBearStore } from '@/store/store';
import { LinksPrev } from './ProductDetail/LinksPrevProduct';
import ListSubProducts from './ListSubProducts';
import useGetProducts from '@/hooks/useGetProducts';
import { orderProductsBeforeGetDB } from '@/utils/filters';
interface Props {
  li: Category & { image?: string };
  index: number;
  brand?: boolean;
  down?: boolean;
  listDown?: boolean;
  viewDown?: boolean;
}

export const utilPrevHomeLink = () => {
  const allLinks: LinksPrev[] = [{ id: 1001, link: '/', name: 'Home' }];
  return allLinks;
};

export const handleAddStrUrl = (name: string, isFilter: boolean) => {
  const allLinks = utilPrevHomeLink();
  const generateId = Math.max(...allLinks.map(({ id }) => id)) + 1;
  const addLink: LinksPrev = {
    id: generateId,
    link: '/products',
    name: name,
    isFilter,
  };
  allLinks.push(addLink);
  return allLinks;
};

export default function ListProducts({
  li,
  index,
  brand,
  down = false,
  listDown = false,
  viewDown = false,
}: Props) {
  const router = useRouter();

  const { handleGetProductsDB } = useGetProducts();

  const { handleAddHistoryLink, handleFilterCB, handleAddCards, typeOrder } =
    useBearStore((state) => state);
  const handleFilter = async () => {
    router.push('/products');
    const allLinks = handleAddStrUrl(li.name, false);
    handleAddHistoryLink(allLinks);
    if (brand) {
      if (li.image) {
        handleFilterCB(null, null, li.name, li.image, null);
        const products = await handleGetProductsDB(null, null, li.name);
        orderProductsBeforeGetDB(
          typeOrder,
          products.data?.getProductFilter as Products[],
          handleAddCards
        );
      }
      return;
    }
    handleFilterCB(li.name, null, null, null, li);
    const products = await handleGetProductsDB(li.name, null, null);
    orderProductsBeforeGetDB(
      typeOrder,
      products.data?.getProductFilter as Products[],
      handleAddCards
    );
  };
  return (
    <motion.li
      className="listp listp__sub"
      initial="hidden"
      animate="show"
      variants={variantsOpacity}
      transition={{
        delay: index * 0.1,
      }}
    >
      <div onClick={handleFilter}>
        <div
          className="listp__list "
          style={{
            padding: `${viewDown ? 0 : '0 .8em'}`,
            fontWeight: `${viewDown ? 'bold' : 'normal'}`,
          }}
        >
          {li.name}
          {!viewDown && li.subCategory && li.subCategory.length > 0 && (
            <i className="listp__i" data-i={down}>
              <Icons icon="down" />
            </i>
          )}
        </div>
        {li.subCategory && li.subCategory.length > 0 && (
          <ul
            data-ul={listDown}
            className="listp__ul listp__none"
            data-none={viewDown}
          >
            {li.subCategory.map((subli) => (
              <ListSubProducts
                li={li}
                key={subli?.id}
                name={li.name}
                sub={subli as SubCategory}
              />
            ))}
          </ul>
        )}
      </div>
    </motion.li>
  );
}
