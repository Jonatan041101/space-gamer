import React from 'react';
import Modal from '../Modal/Modal';
import Spinner from '@/atoms/Spinner';
import { logo } from '@/utils/cloudinary';
import Image from 'next/image';

export default function Loading() {
  return (
    <Modal off>
      <div className="loader">
        <Image src={logo} alt="Logo" width={210} height={90} />

        <Spinner />
      </div>
    </Modal>
  );
}
