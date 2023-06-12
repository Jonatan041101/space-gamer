import Icons from '@/atoms/Icons';
import React from 'react';
import User from './User/User';
import { useBearStore } from '@/store/store';

export default function UserC() {
  const { viewUser, handleViewUser } = useBearStore((state) => state);
  const handleViewUserModal = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    handleViewUser(!viewUser);
  };
  return (
    <li className="user cart">
      <i className="cart__icon" onClick={handleViewUserModal}>
        <Icons icon="user" />
      </i>
      {viewUser && <User />}
    </li>
  );
}
