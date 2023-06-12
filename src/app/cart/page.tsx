'use client';
import { useBearStore } from '@/store/store';
import React from 'react';
import CardPage from '@/components/Cart/CardPage';
import NamesTables from '@/components/Cart/NamesTables';
import PriceCart, { utilTotalPrice } from '@/components/Cart/PriceCart';
import TableQuotes from '@/components/ProductDetail/TableQuotes';
import { Quote } from '@/__generated__/graphql-types';
export default function CartPage() {
  const { cart } = useBearStore((state) => state);
  const price = utilTotalPrice(cart);
  const mapQuote: Quote[] = [
    {
      id: '8f21d5a6-08bc-11ee-be56-0242ac120002',
      name: '1 Cuota',
      priceCuote: (price * 1.15) / 1,
      priceComplete: price * 1.15,
    },
    {
      id: 'ede66e08-08bc-11ee-be56-0242ac120002',
      name: '3 Cuotas',
      priceCuote: (price * 1.15 * 1.1) / 3,
      priceComplete: price * 1.15 * 1.1,
    },
    {
      id: 'f171fc68-08bc-11ee-be56-0242ac120002',
      name: '6 Cuotas',
      priceCuote: (price * 1.15 * 1.1 * 1.1) / 6,
      priceComplete: price * 1.15 * 1.1 * 1.1,
    },
    {
      id: 'f4eca50a-08bc-11ee-be56-0242ac120002',
      name: '12 Cuotas',
      priceCuote: (price * 1.15 * 1.1 * 1.1 * 1.1) / 12,
      priceComplete: price * 1.15 * 1.1 * 1.1 * 1.1,
    },
    {
      id: 'fb9a8f8e-08bc-11ee-be56-0242ac120002',
      name: '18 Cuotas',
      priceCuote: (price * 1.15 * 1.1 * 1.1 * 1.1 * 1.1) / 18,
      priceComplete: price * 1.15 * 1.1 * 1.1 * 1.1 * 1.1,
    },
  ];
  return (
    <div className="cartpage">
      <div className="cartpage__page">
        <h2 className="cartpage__h2">Mi carrito</h2>
        <div className="cartpage__container">
          <div className="cartpage__micart">
            <div className="cartpage__div">
              <table className="cartpage__table">
                <NamesTables />
                <tbody>
                  {cart.map((product) => (
                    <CardPage key={product.id} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cartpage__buy">
              <div className="cartpage__total">
                <div className="cartpage__price">
                  <h3>Total</h3>
                  <PriceCart />
                </div>
                <button className="cartpage__end">Finalizar Compra</button>
              </div>
              <div className="cartpage__quotes">
                <TableQuotes quotes={mapQuote} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
