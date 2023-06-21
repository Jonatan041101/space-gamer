import { Products } from '@/__generated__/graphql-types';
import Select from '@/atoms/Select';
import { ORDER } from '@/store/slices/links';
import { useBearStore } from '@/store/store';
import React, { useState } from 'react';
interface OrderList {
  id: string;
  name: ORDER;
}

const ORDER: OrderList[] = [
  { id: '60d4e19e-c2a1-4113-94d1-cf67b11afc59', name: 'Defecto' },
  { id: '69628561-9f2c-427a-999d-8e07c3672bd0', name: 'Z-A' },
  { id: 'ccf4ae59-2be7-426a-8878-c22bcda4b1ff', name: 'Precio Max' },
  { id: '76dff3df-92b4-42a2-a7a5-0eb82a8a7503', name: 'Precio Min' },
];
export const utilsOrderProducts = (order: ORDER, products: Products[]) => {
  const copyCards = [...products];
  copyCards.sort((a, b) => a.name.localeCompare(b.name));
  if (order === 'Z-A') {
    copyCards.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (order === 'Precio Max') {
    copyCards.sort((a, b) => b.price - a.price);
  }
  if (order === 'Precio Min') {
    copyCards.sort((a, b) => a.price - b.price);
  }
  return copyCards;
};
export default function Order() {
  const [order, setOrder] = useState<boolean>(false);
  const { cards, handleAddCards, changeTypeOrder, typeOrder } = useBearStore(
    (state) => state
  );
  const handleClick = () => {
    setOrder(!order);
  };
  const handleOrder = (order: ORDER) => {
    const newOrder = utilsOrderProducts(order, cards);
    changeTypeOrder(order);
    handleAddCards(newOrder);
    setOrder(!order);
  };
  return (
    <div className="order">
      <div className="order__click" onClick={handleClick}>
        <Select text={typeOrder} icon="down" />
      </div>
      <div className="order__absolute">
        {order &&
          ORDER.map((list) => (
            <div
              className="order__map"
              key={list.id}
              onClick={() => handleOrder(list.name)}
            >
              <div className="listp__list order__li ">{list.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
