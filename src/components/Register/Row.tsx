'use client';
import { Order } from '@/types/types';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Icons from '@/atoms/Icons';
import Image from 'next/image';

interface Props {
  orde: Order;
}

export default function Row({ orde }: Props) {
  const [view, setView] = useState<boolean>(false);
  const date = new Date(Number(orde.date));
  const price = orde.bill.product.reduce(
    (a, b) => a + Number(b.product?.price) * b.count,
    0
  );
  const handleViewBill = () => {
    setView(!view);
  };
  return (
    <>
      <tr key={orde.id} className="orders__tr orders__products">
        <td className="orders__th orders__td">{orde.date}</td>
        <td className="orders__th orders__td">{date.toLocaleDateString()}</td>
        <td className="orders__th orders__td">{orde.status}</td>
        <td className="orders__th orders__td">
          {parsePriceValueMoneyARS(price)}
        </td>
        <td
          className="orders__th orders__td orders__view"
          onClick={handleViewBill}
        >
          Ver
        </td>
      </tr>
      {view && (
        <Modal>
          <div className="orders__modal">
            <i onClick={handleViewBill} className="orders__close">
              <Icons icon="close" />
            </i>
            <div className="orders__array">
              <h2 className="orders__title--bil">
                Factura del{' '}
                {date.toLocaleDateString('es-AR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <div className="orders__map">
                {orde.bill.product.map((product) => (
                  <div key={product.product?.id} className="orders__bil">
                    <div className="orders__pro">
                      <Image
                        className="orders__image"
                        src={product.product?.image[0]?.image ?? ''}
                        alt=""
                        width={50}
                        height={50}
                      />
                      <div className="orders__productss">
                        {product.product?.name}
                      </div>
                      <p className="orders__counts">× {product.count}</p>
                    </div>
                    <div className="orders__price">
                      {parsePriceValueMoneyARS(product.product?.price)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="orders__total">
              <span>Total:</span>
              <span className="orders__price">
                {parsePriceValueMoneyARS(price)}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
