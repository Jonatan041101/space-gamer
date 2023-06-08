import React from 'react';

export default function ViewCart() {
  return (
    <div className="cartslide__bottom">
      <div className="viewcart">
        <div className="viewcart__total">
          <span className="viewcart__span">Total</span>
          <span className="viewcart__price">$10000</span>
        </div>
        <div className="viewcart__buttons">
          <button className="viewcart__btn viewcart__btncart">
            Ver Carrito
          </button>
          <button className="viewcart__btn viewcart__btnend">Finalizar</button>
        </div>
      </div>
    </div>
  );
}
