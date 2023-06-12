'use client';
import React from 'react';
import Icons from '@/atoms/Icons';
import { motion } from 'framer-motion';
import { variantsOpacity } from './NavHeader/AnimationList';
import { Category, SubCategory } from '@/__generated__/graphql-types';
import { useRouter } from 'next/navigation';
import { useBearStore } from '@/store/store';
import { LinksPrev } from './ProductDetail/LinksPrevProduct';
import ListSubProducts from './ListSubProducts';
interface Props {
  li: Category & { image?: string };
  index: number;
  brand?: boolean;
  down?: boolean;
  listDown?: boolean;
}
export const handleAddStrUrl = (name: string) => {
  const allLinks: LinksPrev[] = [{ id: 1001, link: '/', name: 'Home' }];
  const generateId = Math.max(...allLinks.map(({ id }) => id)) + 1;
  const addLink: LinksPrev = {
    id: generateId,
    link: '/products',
    name: name,
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
}: Props) {
  const router = useRouter();
  const { handleAddHistoryLink, handleFilterCB } = useBearStore(
    (state) => state
  );
  const handleFilter = () => {
    const allLinks = handleAddStrUrl(li.name);
    router.push('/products');
    handleAddHistoryLink(allLinks);
    if (brand) {
      if (li.image) {
        handleFilterCB(null, null, li.name, li.image, null);
      }
      return;
    }
    handleFilterCB(li.name, null, null, null, li);
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
        <div className="listp__list ">
          {li.name}
          {li.subCategory && li.subCategory.length > 0 && (
            <i className="listp__i" data-i={down}>
              <Icons icon="down" />
            </i>
          )}
        </div>
        {li.subCategory && li.subCategory.length > 0 && (
          <ul data-ul={listDown} className="listp__ul listp__none">
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
