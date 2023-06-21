'use client';
import InputSquare from '@/atoms/InputSquare';
import React from 'react';
import UserLink from './UserLink';
import { ProductToCart } from '@/__generated__/graphql-types';
import { useBearStore } from '@/store/store';
import { UserSlice } from '@/store/slices/user';
import Icons from '@/atoms/Icons';
import useLogin from '@/hooks/useLogin';

interface UserLogin {
  email: string;
  password: string;
}

interface Props {
  login: UserLogin;
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export default function User({ login, handleChange }: Props) {
  const { handleAddToCart, registerUser, user } = useBearStore(
    (state) => state
  );

  const { getLogin } = useLogin();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { data } = await getLogin({
      variables: {
        email: login.email,
        password: login.password,
      },
    });
    if (data && data.loginUser) {
      registerUser(data.loginUser as UserSlice);
      const productsCart = data.loginUser.cart.products as ProductToCart[];
      handleAddToCart(productsCart);
    }
  };
  const handleLogout = () => {
    registerUser({} as UserSlice);
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
          </form>
        </>
      )}
    </div>
  );
}
