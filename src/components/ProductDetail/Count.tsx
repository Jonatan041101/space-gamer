import { Products } from '@/__generated__/graphql-types';
import { ProductToCart } from '@/store/slices/cart';
import { useBearStore } from '@/store/store';
import { utilExistProduct } from '@/utils/filters';
import React, { useState } from 'react';

interface Props {
  product: Products;
}

export default function Count({ product }: Props) {
  const [count, setCount] = useState<number>(1);
  const { handleAddToCart, cart } = useBearStore((state) => state);

  const handleAddCart = () => {
    const copyCart = [...cart];
    const existProduct = utilExistProduct(copyCart, product.id);
    if (!existProduct) {
      const productCart: ProductToCart = {
        ...product,
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
    setCount((count) => count + add);
  };
  return (
    <div className="count">
      <p className="count__p">Cantidad</p>
      <div className="count__container">
        <div className="count__div">
          <button
            className="count__menos"
            onClick={() => handleClickCounter(-1)}
          >
            -
          </button>
          <span className="count__count">{count}</span>
          <button className="count__more" onClick={() => handleClickCounter(1)}>
            +
          </button>
        </div>
        <button className="count__add" onClick={handleAddCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
