'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ListProducts from '../ListProducts';
import { Category } from '@/__generated__/graphql-types';
export const variantsOpacity = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
export type CategoryBrand = Category & { image?: string };
interface Props {
  viewListProduct: boolean;
  list: CategoryBrand[];
  brand?: boolean;
  column?: boolean;
  brandFilter?: boolean;
  down?: boolean;
  listDown?: boolean;
}
export default function AnimationList({
  list,
  viewListProduct,
  brand = false,
  brandFilter = false,
  column = false,
  down = false,
  listDown = false,
}: Props) {
  return (
    <AnimatePresence>
      {brand && <div className="header__stuffed" />}
      {viewListProduct && (
        <motion.ul
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={variantsOpacity}
          className="header__products--list"
          data-column={column}
          data-list={brand}
        >
          {list &&
            list.map((li, i) => (
              <ListProducts
                down={down}
                listDown={listDown}
                brand={brandFilter}
                key={`${li.id}-${i}`}
                index={i}
                li={li}
              />
            ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
