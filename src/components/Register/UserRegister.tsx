import React from 'react';
import Container from '../Container';
import { useBearStore } from '@/store/store';
import Dates from './Dates';
import Orders from './Orders';
import { UserSlice } from '@/store/slices/user';
import { Order } from '@/types/types';
interface List {
  id: number;
  text: string;
  functionList?: () => void;
}
export default function UserRegister() {
  const { user, registerUser } = useBearStore((state) => state);
  const handleLogout = () => {
    registerUser({} as UserSlice);
  };
  const mapLi: List[] = [
    { id: 5000, text: 'Mis Compras' },
    { id: 5001, text: 'Salir', functionList: handleLogout },
  ];

  return (
    <Container title="Mis Datos">
      <div className="register">
        <div className="register__menu">
          <h2 className="register__menu--text">
            <span className="register__span">Menu</span>
          </h2>
          <ul className="register__ul">
            {mapLi.map((list, index) => (
              <li
                className="register__li"
                data-li-select={0 === index}
                key={list.id}
                onClick={list.functionList}
              >
                {list.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="register__dates">
          <Dates user={user} />
          <Orders order={user.order as Order[]} />
        </div>
      </div>
    </Container>
  );
}
