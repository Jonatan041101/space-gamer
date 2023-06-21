'use client';
import Icons from '@/atoms/Icons';
import React, { useState } from 'react';
import User from './User/User';
import { useBearStore } from '@/store/store';
export interface UserLogin {
  email: string;
  password: string;
}
export default function UserC() {
  const [login, setLogin] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const { viewUser, handleViewUser } = useBearStore((state) => state);
  const handleViewUserModal = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    handleViewUser(!viewUser);
  };
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = evt.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  return (
    <li className="user cart" onClick={handleViewUserModal}>
      <i className="cart__icon">
        <Icons icon="user" />
      </i>
      {viewUser && <User handleChange={handleChange} login={login} />}
    </li>
  );
}
