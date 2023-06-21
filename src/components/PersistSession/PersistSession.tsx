import React from 'react';
import { useEffect } from 'react';
import useLogin from '@/hooks/useLogin';
import { GetLoginUserQuery } from '@/__generated__/graphql-types';
import { GET_LOGIN_USER } from '@/utils/graphql/query';
import { useLazyQuery } from '@apollo/client';
import { useBearStore } from '@/store/store';
import { UserSlice, userSlice } from '@/store/slices/user';
enum Storage {
  LOGIN = 'Login',
}
interface PersistLogin {
  email: string;
  password: string;
}
export default function PersistSession() {
  const [getLogin] = useLazyQuery<GetLoginUserQuery>(GET_LOGIN_USER);
  const { user, registerUser } = useBearStore((state) => state);
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
        if (data?.loginUser) registerUser(data?.loginUser as UserSlice);
      };
      login();
    }
  }, []);
  return <div></div>;
}
