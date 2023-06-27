import CardFooter from '@/atoms/CardFooter';
import { methodBuy, sendProducts, soporte } from '@/utils/cloudinary';
import React from 'react';
import ListFooter from './ListFooter';
import MethodBuy from './MethodBuy';
export interface ListModal {
  id: number;
  image?: string;
  title?: string;
  titleModal?: string;
  text: string;
  list?: ListModal[];
  view?: boolean;
}
export const modal = {
  id: 400,
  image: sendProducts,
  view: true,
  title: 'Realizamos envios',
  text: 'Nuestros medios de envios disponibles',
  titleModal: 'Estos son nuestro medios de envio',
  list: [
    {
      id: 405,
      title: 'Retirar en Local',
      text: 'Retira directamente por nuestro Local.',
    },
    {
      id: 406,
      title: 'Envio dentro de Circunvalacion (Córdoba Capital)',
      text: 'Valido para Córdoba Capital dentro del anillo',
    },
    {
      id: 407,
      title: 'Envió a Sucursal (Andreani)',
      text: 'Envió por andreani (Demora de 3 a 5 días) Solo puede recibir la compra el titular de la tarjeta o cuenta con la que se realizo el pago.',
    },
    {
      id: 408,
      title: 'Envió a Domicilio (Andreani)',
      text: 'Envió por andreani (Demora de 3 a 7 días) Solo puede recibir la compra el titular de la tarjeta o cuenta con la que se realizo el pago.',
    },
  ],
};
export default function Footer() {
  const listModal: ListModal[] = [
    modal,
    {
      id: 401,
      image: methodBuy,
      title: 'Paga tus compras aquí',
      view: true,
      titleModal: 'Estos son nuestros medios de pago disponibles',
      text: 'Conocé todos los metodos de pagos disponibles',
      list: [
        {
          id: 409,
          title: 'Efectivo',
          text: 'Abona en efectivo al recibir tu producto (Solo Córdoba Capital) o al retirar en nuestro local.',
        },
        {
          id: 410,
          title: 'Cuotas con Tarjeta de Crédito',
          text: 'Abona en cuotas. SOLO PUEDE RECIBIR LA COMPRA QUIEN REALIZA EL PAGO.',
        },
        {
          id: 411,
          title: 'Transferencia Bancaria',
          text: 'Deposita o transferí en nuestra cuenta bancaria. SOLO PUEDE RECIBIR LA COMPRA QUIEN REALIZA LA TRANSFERENCIA.',
        },
      ],
    },
    {
      id: 402,
      image: soporte,
      view: false,
      title: 'Soporte',
      text: 'Comunicate con nosotros',
    },
  ];
  return (
    <div className="footer">
      <section className="footer__section">
        {listModal.map((list) => (
          <CardFooter view={list.view} key={list.id} modal={list} />
        ))}
      </section>
      <ListFooter />
      <MethodBuy />
    </div>
  );
}
