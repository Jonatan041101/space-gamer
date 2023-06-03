import React from 'react';
import Square from './Square';
import Search from './Search';
import Down from './Down';
import Bar from './Bar';
import User from './User';
import Cart from './Cart';
export type IconType = 'square' | 'search' | 'down' | 'bar' | 'user' | 'cart';

interface Props {
  icon: IconType;
}

export default function Icons({ icon }: Props) {
  return (
    <>
      {icon === 'square' && <Square />}
      {icon === 'search' && <Search />}
      {icon === 'down' && <Down />}
      {icon === 'bar' && <Bar />}
      {icon === 'user' && <User />}
      {icon === 'cart' && <Cart />}
    </>
  );
}
