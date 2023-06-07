import React from 'react';

interface Props {
  count: number;
}

export default function Count({ count }: Props) {
  return (
    <div className="count">
      <p className="count__p">Cantidad</p>
      <div className="count__container">
        <div className="count__div">
          <button className="count__menos">-</button>
          <span className="count__count">{count}</span>
          <button className="count__more">+</button>
        </div>
        <button className="count__add">Agregar al carrito</button>
      </div>
    </div>
  );
}
