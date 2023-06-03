'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ListProducts from '../ListProducts';
import { LiProducts } from '@/types/types';
export const variantsOpacity = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
interface Props {
  viewListProduct: boolean;
  list: LiProducts[];
  brand?: boolean;
}
export default function AnimationList({
  list,
  viewListProduct,
  brand = false,
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
          data-list={brand}
        >
          {list.map((li, i) => (
            <ListProducts key={`${li.id}-${i}`} index={i} li={li} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
