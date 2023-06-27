'use client';
import { useBearStore } from '@/store/store';
import React, { useState } from 'react';
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
import { Wallet } from '@mercadopago/sdk-react';
import '@/utils/wallets/mercadopago';
import { modal } from '@/components/Footer';
import ArticleFooter from '@/atoms/ArticleFooter';
import Close from '@/atoms/Close';
import Spinner from '@/atoms/Spinner';

export default function CartPage() {
  const { cart, user, handleAddToCart } = useBearStore((state) => state);
  const [buy, data] = useMutation<PostMercadoPagoMutation>(MERCADO_PAGO, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
  const [view, setView] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
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
  const handleBuyMercadoPago = async () => {
    if (cart.length <= 0) {
      setMessage('No hay productos en el carrito para comprar');
      setTimeout(() => setMessage(null), 800);
      return;
    }
    try {
      const newOrder = await buy({
        variables: {
          cartId: user.cart.id,
          userId: user.id,
        },
      });
      if (newOrder.data && user.order) {
        setPreferenceId(newOrder.data.mercadoPago?.preferenceId ?? null);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  const handleViewListPayer = () => {
    setView(!view);
  };
  const cleanCart = () => {
    console.log('clean cart');
    handleAddToCart([]);
    setPreferenceId(null);
  };
  quotesTotalPrice(cart);
  return (
    <div className="cartpage">
      {data.loading && (
        <Modal superModal>
          {' '}
          <Spinner />
        </Modal>
      )}
      {view && (
        <Modal>
          <div className="cartpage__modal">
            <Close handleClick={handleViewListPayer} />
            <ArticleFooter modal={modal} pasarela />
            <div className="cartpage__buyss">
              <span
                onClick={handleBuyMercadoPago}
                className="cartpage__mercadopago"
              >
                Realizar peticion de pago con Mercado Pago
              </span>
              {message && <div className="cartpage__message">{message}</div>}
            </div>
            <div className="cartpage__preferences">
              {preferenceId && (
                <div className="cartpage__mercadopago--buy" onClick={cleanCart}>
                  <Wallet
                    onReady={() => {
                      console.log('LIST');
                    }}
                    // onSubmit={async()=>{console.log('QUE ES')}}
                    onBinChange={() => {
                      console.log('HOLAX');
                    }}
                    onError={(x) => {
                      console.log('err');
                    }}
                    initialization={{
                      preferenceId,
                      redirectMode: 'modal',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
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
                <button className="cartpage__end" onClick={handleViewListPayer}>
                  Finalizar Compra
                </button>

                {/* <span className="cartpage__results">
                  {data.data?.mercadoPago ? 'Compra realizada con exito' : ''}
                </span> */}
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
