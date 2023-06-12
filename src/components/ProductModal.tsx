'use client';
import { useBearStore } from '@/store/store';
import React from 'react';
import ProductDetailModal from './ProductDetail/ProductDetailModal';

export default function ProductModal() {
  const { modal, nameProduct } = useBearStore((state) => state);
  return <>{modal && <ProductDetailModal name={nameProduct ?? ''} />}</>;
}
