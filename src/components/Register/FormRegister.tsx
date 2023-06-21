'use client';
import InputSquare from '@/atoms/InputSquare';
import { RegisterUser } from '@/types/types';
import React, { useState } from 'react';

interface Props {
  register: RegisterUser;
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleRegisterUser: (evt: React.FormEvent<HTMLFormElement>) => void;
  textButton: string;
  all?: boolean;
}
export default function FormRegister({
  register,
  textButton,
  all,
  handleChange,
  handleRegisterUser,
}: Props) {
  return (
    <form className="userpage__form" onSubmit={handleRegisterUser}>
      <InputSquare
        input
        labelText="Email"
        placeholder=""
        name="email"
        value={register.email}
        handleChange={handleChange}
      />
      <InputSquare
        input
        labelText="Contraseña"
        placeholder=""
        value={register.password}
        name="password"
        handleChange={handleChange}
      />
      <div className="userpage__inputs">
        <InputSquare
          input
          labelText="Nombre"
          placeholder=""
          name="name"
          value={register.name}
          handleChange={handleChange}
        />
        <InputSquare
          input
          labelText="Apellido"
          placeholder=""
          value={register.surName}
          name="surName"
          handleChange={handleChange}
        />
      </div>
      <InputSquare
        input
        labelText="Telefono"
        placeholder=""
        name="phone"
        value={register.phone}
        handleChange={handleChange}
      />
      <InputSquare
        input
        labelText="Direccion"
        placeholder=""
        value={register.address}
        name="address"
        handleChange={handleChange}
      />
      <button
        className="userpage__btn"
        style={{ width: all ? '100%' : 'auto' }}
      >
        {textButton}
      </button>
    </form>
  );
}
