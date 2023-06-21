'use client';
import { useBearStore } from '@/store/store';
import React from 'react';
import CardPage from '@/components/Cart/CardPage';
import NamesTables from '@/components/Cart/NamesTables';
import PriceCart, {
  quotesTotalPrice,
  utilTotalPrice,
} from '@/components/Cart/PriceCart';
import TableQuotes from '@/components/ProductDetail/TableQuotes';
import { PostMercadoPagoMutation, Quote } from '@/__generated__/graphql-types';
import LinksPrevProduct from '@/components/ProductDetail/LinksPrevProduct';
import { useMutation } from '@apollo/client';
import { GET_PRODUCTS, MERCADO_PAGO } from '@/utils/graphql/query';
import Modal from '@/components/Modal/Modal';
import NonProducts from '@/components/Cart/NonProducts';
import { UserSlice } from '@/store/slices/user';
import { Order } from '@/types/types';
export default function CartPage() {
  const { cart, user, handleAddToCart, registerUser } = useBearStore(
    (state) => state
  );

  const [buy, data] = useMutation<PostMercadoPagoMutation>(MERCADO_PAGO, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
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
  const handleBuy = async () => {
    const newOrder = await buy({
      variables: {
        cartId: user.cart.id,
        userId: user.id,
      },
    });
    handleAddToCart([]);
    if (newOrder.data && user.order) {
      const updateUser: UserSlice = {
        ...user,
        order: [...user.order, newOrder.data.mercadoPago as Order],
      };
      registerUser(updateUser);
    }
  };
  quotesTotalPrice(cart);
  return (
    <div className="cartpage">
      {data.loading && (
        <Modal>
          {' '}
          <div>Cargando...</div>
        </Modal>
      )}
      <div className="cartpage__page">
        <LinksPrevProduct />
        <h2 className="cartpage__h2">Mi carrito</h2>
        <div className="cartpage__container">
          <div className="cartpage__micart">
            <div className="cartpage__div">
              <table className="cartpage__table">
                <NamesTables />
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((product) => (
                      <CardPage key={product?.product?.id} product={product} />
                    ))
                  ) : (
                    <NonProducts />
                  )}
                </tbody>
              </table>
            </div>
            <div className="cartpage__buy">
              <div className="cartpage__total">
                <div className="cartpage__price">
                  <h3>Total </h3>
                  <PriceCart />
                </div>
                <button className="cartpage__end" onClick={handleBuy}>
                  Finalizar Compra
                </button>
                <span className="cartpage__results">
                  {data.data?.mercadoPago ? 'Compra realizada con exito' : ''}
                </span>
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
