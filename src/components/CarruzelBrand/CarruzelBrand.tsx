'use client';
import useBrand from '@/hooks/useBrand';
import Image from 'next/image';
import React from 'react';

export default function CarruzelBrand() {
  const brand = useBrand();

  return (
    <div className="sliderbrand">
      {brand?.brand?.map((brand) => (
        <Image
          className="sliderbrand__image"
          src={`${brand?.image}`}
          key={brand?.id}
          width={130}
          height={130}
          alt={`${brand?.image}`}
          draggable={false}
        />
      ))}
    </div>
  );
}
