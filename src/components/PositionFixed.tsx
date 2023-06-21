import React from 'react';
import NavHeader from './NavHeader/NavHeader';
import CartC from './CartC';
import UserC from './UserC';
import { Fixed } from './Header';

interface Props {
  posi: Fixed;
}
export default function PositionFixed({ posi }: Props) {
  return (
    <div
      className="header__fixed"
      style={{ position: posi, zIndex: 60, top: 0 }}
    >
      <div className="header__bottom">
        <NavHeader />
        <ul className="header__icons">
          <CartC />
          <UserC />
        </ul>
      </div>
    </div>
  );
}
