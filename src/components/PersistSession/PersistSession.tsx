import React from 'react';
import { useEffect } from 'react';
import { Category, GetLoginUserQuery } from '@/__generated__/graphql-types';
import { GET_LOGIN_USER } from '@/utils/graphql/query';
import { useLazyQuery } from '@apollo/client';
import { useBearStore } from '@/store/store';
import { UserSlice } from '@/store/slices/user';
import { Storage } from '../ProductDetail/LinksPrevProduct';
import { ProductToCart } from '@/store/slices/cart';

interface PersistLogin {
  email: string;
  password: string;
}
export default function PersistSession() {
  const [getLogin] = useLazyQuery<GetLoginUserQuery>(GET_LOGIN_USER);
  const { user, cart, registerUser, addFilterCategory, handleAddToCart } =
    useBearStore((state) => state);
  console.log({ cart });

  useEffect(() => {
    if (user.email) {
      const saveUser: PersistLogin = {
        email: user.email,
        password: user.password,
      };
      window.localStorage.setItem(Storage.LOGIN, JSON.stringify(saveUser));
    }
  }, [user]);
  useEffect(() => {
    const userPersistSession = window.localStorage.getItem(Storage.LOGIN);
    if (userPersistSession) {
      const dates: PersistLogin = JSON.parse(userPersistSession);
      const login = async () => {
        const { data } = await getLogin({
          variables: {
            email: dates.email,
            password: dates.password,
          },
        });
        console.log({ data });

        if (data?.loginUser) {
          registerUser(data?.loginUser as UserSlice);
          const productToCart = data?.loginUser?.cart?.products?.map(
            (product) => ({
              count: product?.count,
              product: product?.product,
            })
          ) as ProductToCart[];
          handleAddToCart(productToCart);
        }
      };
      login();
    }
    const categoryJSON = window.localStorage.getItem(Storage.Category);
    if (categoryJSON) {
      const categoryFilter: Category = JSON.parse(categoryJSON);
      addFilterCategory(categoryFilter);
    }
  }, []);

  return <div></div>;
}
