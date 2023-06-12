'use client';
import Button from '@/atoms/Button';
import InputSquare from '@/atoms/InputSquare';
import Container from '@/components/Container';
import React from 'react';

export default function UserPage() {
  return (
    <Container title="Registro">
      <div className="userpage">
        <div className="userpage__intro">
          <h4 className="userpage__h4">Registrarme</h4>
          <p className="userpage__p">
            Puedes registrarte como un usuario del sitio, podras gestionar tus
            compras, consultas y datos personales.
          </p>
        </div>
        <form className="userpage__form">
          <InputSquare
            input
            labelText="Email"
            placeholder=""
            value=""
            handleChange={() => {}}
          />
          <InputSquare
            input
            labelText="Contraseña"
            placeholder=""
            value=""
            handleChange={() => {}}
          />
          <div className="userpage__inputs">
            <InputSquare
              input
              labelText="Nombre"
              placeholder=""
              value=""
              handleChange={() => {}}
            />
            <InputSquare
              input
              labelText="Apellido"
              placeholder=""
              value=""
              handleChange={() => {}}
            />
          </div>
          <InputSquare
            input
            labelText="Telefono"
            placeholder=""
            value=""
            handleChange={() => {}}
          />
          <InputSquare
            input
            labelText="Direccion"
            placeholder=""
            value=""
            handleChange={() => {}}
          />
          <button className="userpage__btn">Crear</button>
        </form>
      </div>
    </Container>
  );
}
