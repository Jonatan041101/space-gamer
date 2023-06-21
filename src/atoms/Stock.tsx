import React from 'react';

interface Props {
  STOCK: number;
}

export default function Stock({ STOCK }: Props) {
  return (
    <>
      {STOCK > 0 && STOCK <= 5 && (
        <span className="card__stock card__stock--low">STOCK BAJO</span>
      )}
      {STOCK > 5 && <span className="card__stock ">DISPONIBLE</span>}
      {STOCK <= 0 && (
        <span className="card__stock card__stock--non">NO DISPONIBLE</span>
      )}
    </>
  );
}
