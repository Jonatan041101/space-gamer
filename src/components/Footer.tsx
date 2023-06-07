import CardFooter from '@/atoms/CardFooter';
import { methodBuy, sendProducts, soporte } from '@/utils/cloudinary';
import React from 'react';
import ListFooter from './ListFooter';
import MethodBuy from './MethodBuy';
export interface ListModal {
  id: number;
  image: string;
  title: string;
  text: string;
}

export default function Footer() {
  const listModal: ListModal[] = [
    {
      id: 400,
      image: sendProducts,
      title: 'Realizamos envios',
      text: 'Nuestros medios de envios disponibles',
    },
    {
      id: 401,
      image: methodBuy,
      title: 'Paga tus compras aquí',
      text: 'Conocé todos los metodos de pagos disponibles',
    },
    {
      id: 402,
      image: soporte,
      title: 'Soporte',
      text: 'Comunicate con nosotros',
    },
  ];
  return (
    <div className="footer">
      <section className="footer__section">
        {listModal.map((list) => (
          <CardFooter key={list.id} modal={list} />
        ))}
      </section>
      <ListFooter />
      <MethodBuy />
    </div>
  );
}
