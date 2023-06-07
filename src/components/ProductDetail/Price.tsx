import { parsePriceValueMoneyARS } from '@/utils/parses';
import React from 'react';

interface Props {
  price: number;
}

export default function Price({ price }: Props) {
  return (
    <div className="priced">
      <div className="priced__div">
        <span> {parsePriceValueMoneyARS(price)}</span>
        <p className="priced__p">PRECIO ESPECIAL EFECTIVO O TRANSFERENCIA</p>
      </div>
    </div>
  );
}
