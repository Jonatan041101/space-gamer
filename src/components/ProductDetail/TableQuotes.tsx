'use client';
import { Quote } from '@/__generated__/graphql-types';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import React, { Fragment } from 'react';
interface Props {
  quotes?: Quote[];
}
export default function TableQuotes({ quotes }: Props) {
  return (
    <div className="table">
      <table className="table__table">
        <thead className="table__thead">
          <tr>Cuotas con Tarjeta de Crédito</tr>
        </thead>
        {quotes?.map((quote) => (
          <tr className="table__tr" key={quote.id}>
            <td className="table__td">{quote.name}</td>
            <td className="table__td">
              {parsePriceValueMoneyARS(quote.priceCuote) || '$0'}
            </td>
            <td className="table__td">
              {parsePriceValueMoneyARS(quote.priceComplete) || '$0'}{' '}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
