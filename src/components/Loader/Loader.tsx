import React from 'react';
import Modal from '../Modal/Modal';
import { useBearStore } from '@/store/store';
import Spinner from '@/atoms/Spinner';
import Image from 'next/image';
import { logo } from '@/utils/cloudinary';
import Loading from './Loading';

export default function Loader() {
  const { loadingProducts, loadingBanner, loadingBrand, loadingCategory } =
    useBearStore((state) => state);

  const LOADING = [
    loadingBanner,
    loadingBrand,
    loadingProducts,
    loadingCategory,
  ];

  const viewModal = LOADING.every((value) => value !== false);

  return <>{viewModal && <Loading />}</>;
}
