import { UserSlice } from '@/store/slices/user';
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import FormRegister from './FormRegister';
import Icons from '@/atoms/Icons';

interface Props {
  user: UserSlice;
}

export default function Dates({ user }: Props) {
  const [view, setView] = useState<boolean>(false);
  const handleClickOpenModal = () => {
    setView(!view);
  };
  return (
    <>
      <div className="register__init">
        <div className="register__image">
          <Image
            className="register__img"
            src={user?.img ?? ''}
            alt=""
            width={100}
            height={100}
          />
          <div className="register__major">
            <p className="register__name">
              <span>{user?.name}</span> <span>{user?.surName}</span>
            </p>
            <p className="register__email">{user?.email}</p>
          </div>
          <div className="register__btn">
            <button className="register__edit" onClick={handleClickOpenModal}>
              Editar perfil
            </button>
          </div>
        </div>

        <div className="register__address">
          <div className="register__mis">Mis Datos</div>
          <div className="register__textinit">
            <h2 className="register__h2">
              {user?.name} {user?.surName}
            </h2>
            <div className="register__content">
              <span className="register__info">Direccion</span>
              <p>{user?.address}</p>
            </div>
          </div>
          <div className="register__content">
            <span className="register__info">Telefono</span>
            <span>{user?.phone}</span>
          </div>
          <div className="register__content">
            <span className="register__info">Email</span>
            <span>{user?.email}</span>
          </div>
          <button className="register__button">Editar direccion</button>
        </div>
      </div>
      {view && (
        <Modal>
          <div className="register__modal">
            <i className="register__i" onClick={handleClickOpenModal}>
              <Icons icon="close" />
            </i>
            <h2 className="register__informacion">
              Manten tu información actualizada
            </h2>
            <FormRegister
              register={user}
              textButton="Guardar"
              handleChange={(
                evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {}}
              handleRegisterUser={(evt: React.FormEvent<HTMLFormElement>) => {}}
              all
            />
          </div>
        </Modal>
      )}
    </>
  );
}
