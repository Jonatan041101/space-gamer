'use client';
import { ProductToCart } from '@/store/slices/cart';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Image from 'next/image';
import React, { useRef } from 'react';
import Counter from '../ProductDetail/Counter';
import { useBearStore } from '@/store/store';
import { useMutation } from '@apollo/client';
import { UpdateProductToCartMutation } from '@/__generated__/graphql-types';
import { UPDATE_PRODUCT_CART } from '@/utils/graphql/query';
import { toastNotify } from '@/utils/notify';

interface Props {
  product: ProductToCart;
}
export default function CardPage({ product }: Props) {
  const [updateProductCount] =
    useMutation<UpdateProductToCartMutation>(UPDATE_PRODUCT_CART);
  const { cart, user } = useBearStore((state) => state);
  const timerId = useRef<NodeJS.Timeout>();

  const IMAGE = product?.product?.image[0]?.image ?? '';
  const PRICE = Number(product.product?.price) * product.count;

  const handleClickCounter = async (add: number) => {
    const copyCart = [...cart];
    const productFind = copyCart.find(
      (p) => p.product?.id === product.product?.id
    );
    if (productFind) {
      if (product.product) {
        if (product.product.stock?.count) {
          if (
            product.count + add > product.product.stock.count ||
            product.count + add < 1
          ) {
            return;
          }
        }
      }
      console.log(
        { add, count: productFind.count },
        product.count,
        product.count + add
      );
      if (user.hasOwnProperty('email')) {
        clearTimeout(timerId.current);
        timerId.current = setTimeout(async () => {
          toastNotify(
            `📌 Cantidad del producto ${product.product?.name} actualizado`
          );
          await updateProductCount({
            variables: {
              cartId: user.cart.id,
              productId: product.product?.id,
              count: product.count,
            },
          });
        }, 500);
      }
      productFind.count = product.count + add;
    }
  };
  return (
    <tr className="cartpage__article cartpage__tr">
      <td className="cartpage__img cartpage__td">
        <div>
          <Image
            className="cartpage__image"
            src={IMAGE}
            alt={`Demuestra del producto ${product.product?.name}`}
            width={100}
            height={80}
          />
        </div>
      </td>
      <td className="cartpage__td">
        {parsePriceValueMoneyARS(product.product?.price)}
      </td>
      <td className="cartpage__td">
        <Counter
          handleClickCounter={handleClickCounter}
          counter={product.count}
        />
      </td>
      <td className="cartpage__td">{parsePriceValueMoneyARS(PRICE)}</td>
    </tr>
  );
}
