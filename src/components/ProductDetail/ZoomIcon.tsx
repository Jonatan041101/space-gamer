'use client';
import Icons from '@/atoms/Icons';
import React from 'react';

interface Props {
  handleOpenModal: () => void;
}

export default function ZoomIcon({ handleOpenModal }: Props) {
  return (
    <div className="productd__i" onClick={handleOpenModal}>
      <i className="productd__zoom">
        <Icons icon="zoom" />
      </i>
    </div>
  );
}
