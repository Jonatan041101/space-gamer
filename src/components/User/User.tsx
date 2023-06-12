import InputSquare from '@/atoms/InputSquare';
import Link from 'next/link';
import React from 'react';

export default function User() {
  return (
    <div className="user__container">
      <h3 className="user__h3">Ingresar a tu cuenta</h3>
      <div className="user__div">
        <div className="user__inputs">
          <div>
            <InputSquare
              value=""
              handleChange={() => {}}
              placeholder="Correo"
              input
              labelText=""
            />
          </div>
          <div>
            <InputSquare
              value=""
              handleChange={() => {}}
              placeholder="Contraseña"
              input
              labelText=""
            />
          </div>
        </div>
        <button className="user__btn">Ingresar</button>
        <Link href={'/user'} className="user__link">
          Regístrarme
        </Link>
      </div>
    </div>
  );
}
