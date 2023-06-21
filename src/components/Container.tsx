import React from 'react';
import LinksPrevProduct from './ProductDetail/LinksPrevProduct';

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Container({ children, title }: Props) {
  return (
    <div className="container">
      <div className="container__container">
        <LinksPrevProduct />
        <h4 className="container__h4">{title}</h4>
        {children}
      </div>
    </div>
  );
}
