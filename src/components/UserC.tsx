'use client';
import Icons from '@/atoms/Icons';
import React, { useRef, useState } from 'react';
import User from './User/User';
import { useBearStore } from '@/store/store';
import {
  errHandler,
  errorsHandler,
  verifyUser,
} from './Register/user_register';
export interface UserLogin {
  email: string;
  password: string;
}
export interface UserLoginWithBack extends UserLogin {
  form: string;
}
const INITIAL_STATE = {
  email: '',
  password: '',
};
const TIMER = 1000;
export default function UserC() {
  const [login, setLogin] = useState<UserLogin>(INITIAL_STATE);
  const [errors, setErrors] = useState<UserLoginWithBack>({
    ...INITIAL_STATE,
    form: '',
  });
  const { viewUser, handleViewUser } = useBearStore((state) => state);
  const timerId = useRef<NodeJS.Timeout>();
  const cacheErrors = useRef<UserLoginWithBack>({
    ...INITIAL_STATE,
    form: '',
  });
  const handleViewUserModal = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    handleViewUser(!viewUser);
  };
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = evt.target;
    clearTimeout(timerId.current);
    if (name === 'password' || name === 'email') {
      if (!verifyUser[name].test(value)) {
        setErrors({ ...errors, [name]: errHandler[name] });
        cacheErrors.current = {
          ...cacheErrors.current,
          [name]: errHandler[name],
        };
        timerId.current = setTimeout(
          () => setErrors({ ...errors, [name]: '' }),
          TIMER
        );
      } else {
        setErrors({ ...errors, [name]: '' });
        cacheErrors.current = { ...cacheErrors.current, [name]: '' };
      }
    }
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleChangeError = (err: string) => {
    setErrors({ ...errors, form: err });

    setTimeout(() => setErrors({ ...errors, form: '' }), TIMER);
  };
  return (
    <li className="user cart" onClick={handleViewUserModal}>
      <i className="cart__icon">
        <Icons icon="user" />
      </i>
      {viewUser && (
        <User
          handleChangeError={handleChangeError}
          errors={errors}
          cacheErrors={cacheErrors.current}
          handleChange={handleChange}
          login={login}
        />
      )}
    </li>
  );
}
