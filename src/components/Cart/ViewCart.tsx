import React from 'react';
import PriceCart from './PriceCart';
import LinkCart from './LinkCart';

export default function ViewCart() {
  return (
    <div className="cartslide__bottom">
      <div className="viewcart">
        <div className="viewcart__total">
          <span className="viewcart__span">Total</span>
          <PriceCart />
        </div>
        <div className="viewcart__buttons">
          <LinkCart />
          <button className="viewcart__btn viewcart__btnend">Finalizar</button>
        </div>
      </div>
    </div>
  );
}
