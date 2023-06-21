import React from 'react';
import HeadTable from './HeadTable';
import { Order } from '@/types/types';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Row from './Row';

interface Props {
  order: Order[];
}

export default function Orders({ order }: Props) {
  return (
    <div className="orders">
      <h2 className="orders__h2">Ultimas compras</h2>
      <table className="orders__table">
        <HeadTable />
        <tbody>
          {order?.map((orde) => (
            <Row key={orde.id} orde={orde} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
