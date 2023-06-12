import { useBearStore } from '@/store/store';
import React from 'react';
import PriceCart from './PriceCart';
import Link from 'next/link';

export default function ViewCart() {
  return (
    <div className="cartslide__bottom">
      <div className="viewcart">
        <div className="viewcart__total">
          <span className="viewcart__span">Total</span>
          <PriceCart />
        </div>
        <div className="viewcart__buttons">
          <Link href={'/cart'} className="viewcart__btn viewcart__btncart">
            Ver Carrito
          </Link>
          <button className="viewcart__btn viewcart__btnend">Finalizar</button>
        </div>
      </div>
    </div>
  );
}
