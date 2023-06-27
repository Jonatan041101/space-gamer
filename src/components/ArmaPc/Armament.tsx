'use client';
import React from 'react';
import InputCheck from './InputCheck';
import { parsePriceValueMoneyARS } from '@/utils/parses';
import Button from '@/atoms/Button';
import { ProductToCart } from '@/store/slices/cart';
import CardCar from './CardCar';
import { utilTotalPrice } from '../Cart/PriceCart';
import { ArmamentPCProduct } from '@/app/arma/page';
import { useBearStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import { handleAddStrUrl } from '../ListProducts';
import { useMutation, useQuery } from '@apollo/client';
import {
  ArmamentToCart,
  CreateArmamentProductToCartMutation,
  GetProductCategorySubQuery,
  Products,
} from '@/__generated__/graphql-types';
import { ARMAMENT_PC, GET_PRODUCT_CATEGORY_SUB } from '@/utils/graphql/query';
interface Props {
  products: ProductToCart[];
  handleChange: ArmamentPCProduct;
}
export default function Armament({ products, handleChange }: Props) {
  const { cart, user, handleAddToCart, handleAddHistoryLink } = useBearStore(
    (state) => state
  );
  const [postProductsCart] =
    useMutation<CreateArmamentProductToCartMutation>(ARMAMENT_PC);
  const { data } = useQuery<GetProductCategorySubQuery>(
    GET_PRODUCT_CATEGORY_SUB,
    {
      variables: {
        name: 'armament',
      },
    }
  );
  const router = useRouter();
  const PRICE = utilTotalPrice(products);
  const handleClick = async () => {
    const allLinks = handleAddStrUrl('Mi carrito', false);
    if (user.hasOwnProperty('email')) {
      const productCart: ArmamentToCart[] = products.map((product) => ({
        cartId: user.cart.id,
        count: product.count,
        productId: product.product?.id ?? '',
      }));
      const { data } = await postProductsCart({
        variables: {
          args: productCart,
        },
      });
    }
    handleAddHistoryLink(allLinks);

    handleAddToCart([...cart, ...products]);
    router.push('/cart');
  };
  return (
    <div className="armapc__cost">
      <h3 className="armapc__pedido">Tu Pedido</h3>
      <div className="armapc__products">
        <div className="armapc__titles">
          <p>Producto</p>
          <p>Total</p>
        </div>
        <section className="cardarma">
          {products.map((product) => (
            <CardCar key={product.product?.id} product={product} />
          ))}
        </section>
      </div>
      <div className="armapc__total">
        <h3 className="armapc__total--h3">Total </h3>
        <p className="armapc__total--price">{parsePriceValueMoneyARS(PRICE)}</p>
      </div>
      {data?.getCategoryOrSub?.products?.map((pc) => (
        <article className="armapc__windows" key={pc?.id}>
          <InputCheck
            handleChange={handleChange}
            product={pc as Products}
            text={`${pc?.name} ${parsePriceValueMoneyARS(pc?.price)}`}
          />
        </article>
      ))}
      <div className="armapc__continue" onClick={handleClick}>
        <Button text="Continuar" />
      </div>
    </div>
  );
}
