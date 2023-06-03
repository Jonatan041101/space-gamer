'use client';
import React, { useState } from 'react';
import Icons from '@/atoms/Icons';
import { LiProducts } from '@/types/types';
import { motion } from 'framer-motion';
import { variantsOpacity } from './NavHeader/AnimationList';
import Link from 'next/link';
interface Props {
  li: LiProducts;
  index: number;
}

export default function ListProducts({ li, index }: Props) {
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
      <Link href={li.link}>
        <div className="listp__list ">
          {li.name}
          {li.subList && (
            <i className="listp__i">
              <Icons icon="down" />
            </i>
          )}
        </div>
        {li.subList && (
          <ul className="listp__ul listp__none">
            {li.subList.map((subli) => (
              <li className="listp__list" key={`${subli.id}`}>
                {subli.name}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </motion.li>
  );
}
