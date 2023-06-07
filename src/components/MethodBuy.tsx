import { mercadoPago, visa } from '@/utils/cloudinary';
import Image from 'next/image';
import React from 'react';

export default function MethodBuy() {
  return (
    <div className="method">
      <div className="method__images">
        <Image
          src={mercadoPago}
          width={200}
          height={50}
          alt="Metodo de pago con mercado pago."
          className="method__img"
        />
        <Image
          src={visa}
          width={200}
          height={50}
          alt="Metodo de pago visa mastercard america express."
          className="method__img"
        />
      </div>
      <p className="method__name">Desarrollado por Jonatan Valdiviezo</p>
    </div>
  );
}
