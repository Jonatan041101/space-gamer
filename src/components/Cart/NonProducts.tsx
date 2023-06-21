import { cart } from '@/utils/cloudinary';
import Image from 'next/image';
import React from 'react';

export default function NonProducts() {
  return (
    <div className="viewcart__cero">
      <h4>Tu carrito esta vacio!</h4>
      <Image src={cart} alt="" width={200} height={200} />
    </div>
  );
}
