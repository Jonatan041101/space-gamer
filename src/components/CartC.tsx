import Icons from '@/atoms/Icons';
import React from 'react';

interface Props {}

export default function CartC({}: Props) {
  return (
    <li className="cart">
      <i className="cart__icon">
        <div className="cart__count">0</div>
        <Icons icon="cart" />
      </i>
    </li>
  );
}
