'use client';
import InputSquare from '@/atoms/InputSquare';
import React from 'react';
import UserLink from './UserLink';
import { ProductToCart } from '@/__generated__/graphql-types';
import { useBearStore } from '@/store/store';
import { UserSlice } from '@/store/slices/user';
import Icons from '@/atoms/Icons';
import useLogin from '@/hooks/useLogin';
import { UserLoginWithBack } from '../UserC';
import { Storage } from '../ProductDetail/LinksPrevProduct';

interface UserLogin {
  email: string;
  password: string;
}

interface Props {
  login: UserLogin;
  errors: UserLoginWithBack;
  cacheErrors: UserLoginWithBack;
  handleChangeError: (err: string) => void;
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function User({
  login,
  errors,
  cacheErrors,
  handleChange,
  handleChangeError,
}: Props) {
  const { handleAddToCart, registerUser, user } = useBearStore(
    (state) => state
  );

  const { getLogin } = useLogin();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      Object.values(cacheErrors).forEach((err) => {
        if (typeof err === 'string') {
          if (err.length > 0) {
            throw new Error('Datos incorrectos');
          }
        }
      });
      const data = await getLogin({
        variables: {
          email: login.email,
          password: login.password,
        },
      });
      if (data.error) {
        throw new Error(data.error.message);
      }
      if (data && data.data?.loginUser) {
        registerUser(data.data.loginUser as UserSlice);
        const productsCart = data.data.loginUser.cart
          .products as ProductToCart[];
        handleAddToCart(productsCart);
      }
    } catch (error) {
      const ERROR = error as Error;
      handleChangeError(ERROR.message);
    }
  };
  const handleLogout = () => {
    registerUser({} as UserSlice);
    window.localStorage.removeItem(Storage.LOGIN);
  };

  return (
    <div className="user__container" onClick={(evt) => evt.stopPropagation()}>
      {user.hasOwnProperty('email') ? (
        <div className="user__on">
          <p className="user__on--email">
            <i className="user__on--i">
              <Icons icon="user" />
            </i>
            <UserLink text={user.email} />
          </p>
          <button className="user__on--exit" onClick={handleLogout}>
            Salir
          </button>
        </div>
      ) : (
        <>
          <h3 className="user__h3">Ingresar a tu cuenta</h3>
          <form className="user__div" onSubmit={handleSubmit}>
            <div className="user__inputs">
              <div>
                <InputSquare
                  err={errors.email}
                  value={login.email}
                  handleChange={handleChange}
                  placeholder="Correo"
                  input
                  name="email"
                  labelText=""
                />
              </div>
              <div>
                <InputSquare
                  err={errors.password}
                  value={login.password}
                  handleChange={handleChange}
                  placeholder="Contraseña"
                  input
                  name="password"
                  labelText=""
                />
              </div>
            </div>
            <button className="user__btn">Ingresar</button>
            <UserLink text="Regístrarme" />
            <span className="userpage__error">{errors.form}</span>
          </form>
        </>
      )}
    </div>
  );
}
