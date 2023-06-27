import React from 'react';
import Modal from '../Modal/Modal';
import { useBearStore } from '@/store/store';
import Spinner from '@/atoms/Spinner';
import Image from 'next/image';
import { logo } from '@/utils/cloudinary';

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

  return (
    <>
      {viewModal && (
        <Modal off>
          <div className="loader">
            <Image src={logo} alt="Logo" width={210} height={90} />

            <Spinner />
          </div>
        </Modal>
      )}
    </>
  );
}
