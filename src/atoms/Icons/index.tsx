import React from 'react';
import Square from './Square';
import Search from './Search';
import Down from './Down';
import Bar from './Bar';
import User from './User';
import Cart from './Cart';
import Email from './Email';
import Location from './Location';
import Phone from './Phone';
import Whatsapp from './Whatsapp';
import Clock from './Clock';
import Zoom from './Zoom';
import Close from './Close';
import Filters from './Filters';
export type IconType =
  | 'square'
  | 'search'
  | 'down'
  | 'bar'
  | 'user'
  | 'cart'
  | 'email'
  | 'phone'
  | 'clock'
  | 'wsp'
  | 'location'
  | 'zoom'
  | 'close'
  | 'Filters';

interface Props {
  icon: IconType;
}

export default function Icons({ icon }: Props) {
  return (
    <>
      {icon === 'Filters' && <Filters />}
      {icon === 'square' && <Square />}
      {icon === 'close' && <Close />}
      {icon === 'search' && <Search />}
      {icon === 'down' && <Down />}
      {icon === 'bar' && <Bar />}
      {icon === 'user' && <User />}
      {icon === 'cart' && <Cart />}
      {icon === 'location' && <Location />}
      {icon === 'email' && <Email />}
      {icon === 'phone' && <Phone />}
      {icon === 'wsp' && <Whatsapp />}
      {icon === 'clock' && <Clock />}
      {icon === 'zoom' && <Zoom />}
    </>
  );
}
