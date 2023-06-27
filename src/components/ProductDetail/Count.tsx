import { Products } from '@/__generated__/graphql-types';
import { ProductToCart } from '@/store/slices/cart';
import { useBearStore } from '@/store/store';
import { utilExistProduct } from '@/utils/filters';
import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import useAddCart from '@/hooks/useAddCart';
import { toastNotify } from '@/utils/notify';

interface Props {
  product: Products;
}

export default function Count({ product }: Props) {
  const [count, setCount] = useState<number>(1);
  const { handleAddToCart, cart, user } = useBearStore((state) => state);
  const { handleAddProductCart } = useAddCart();

  const handleAddCart = async () => {
    const copyCart = [...cart];
    const existProduct = utilExistProduct(copyCart, product.id);
    toastNotify(`📌 ${product.name} agregado al carrito`); // Arreglar
    if (existProduct) {
      if (existProduct.count + count >= Number(product.stock?.count)) {
        if (product.stock?.count) {
          setCount(1);
          if (existProduct.count === product.stock.count) return;

          const count = product.stock.count - existProduct.count;
          existProduct.count = existProduct.count + count;
          if (user.hasOwnProperty('email')) {
            await handleAddProductCart({
              variables: {
                cartId: user.cart.id,
                productId: product.id,
                count,
              },
            });
          }
          handleAddToCart(copyCart);
        }
        return;
      }
    }
    if (user.hasOwnProperty('email')) {
      await handleAddProductCart({
        variables: {
          cartId: user.cart.id,
          productId: product.id,
          count,
        },
      });
    }

    if (!existProduct) {
      const productCart: ProductToCart = {
        product,
        count,
      };
      handleAddToCart([...cart, productCart]);
      setCount(1);
      return;
    }
    existProduct.count = existProduct.count + count;
    handleAddToCart([...copyCart]);

    setCount(1);
  };

  const handleClickCounter = (add: number) => {
    if (product.stock && product.stock.count) {
      if (count + add < 1 || count + add > product.stock.count) return;
      setCount((count) => count + add);
    }
  };
  const productCount = product?.stock?.count === 0 ? 0 : count;
  return (
    <div className="count">
      <p className="count__p">Cantidad</p>
      <div className="count__container">
        <Counter
          handleClickCounter={
            productCount === 0 ? () => {} : handleClickCounter
          }
          counter={productCount}
        />
        <button
          className="count__add"
          onClick={productCount === 0 ? () => {} : handleAddCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
