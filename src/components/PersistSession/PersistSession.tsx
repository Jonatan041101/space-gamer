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
  const { user, registerUser, addFilterCategory, handleAddToCart } =
    useBearStore((state) => state);

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
          handleAddToCart(data?.loginUser?.cart.products as ProductToCart[]);
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
