import Input from '@/atoms/Input';
import Image from 'next/image';
import React from 'react';
import CartC from './CartC';
import UserC from './UserC';
import NavHeader from './NavHeader/NavHeader';
import { logo } from '@/utils/cloudinary';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <Image src={logo} alt="Logo" width={137} height={60} />
          <div className="header__input">
            <Input placeholder="¿ Que estas buscando ?" icon="search" />
          </div>
          <div className="header__wsp">
            <span>Whatsapp</span>
            <span className="header__number">+5493517719671</span>
          </div>
        </div>
        <div className="header__bottom">
          <NavHeader />
          <ul className="header__icons">
            <CartC />
            <UserC />
          </ul>
        </div>
      </div>
    </header>
  );
}
