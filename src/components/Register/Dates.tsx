import { UserSlice } from '@/store/slices/user';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import FormRegister from './FormRegister';
import Icons from '@/atoms/Icons';
import { RegisterUser } from '@/types/types';
import useRegister from '@/hooks/useRegister';
import { useMutation } from '@apollo/client';
import { UpdateUserMutation } from '@/__generated__/graphql-types';
import { UPDATE_USER } from '@/utils/graphql/query';
import { HandlerErrorRegister } from './Register';
import { INITIAL_STATE } from './user_register';

interface Props {
  user: UserSlice;
}

export default function Dates({ user }: Props) {
  const [view, setView] = useState<boolean>(false);
  const [update, setUpdate] = useState<RegisterUser>({
    name: user.name,
    surName: user.surName,
    password: user.password,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });
  const [updateUser] = useMutation<UpdateUserMutation>(UPDATE_USER);
  const { errors, handlerErrorRegister, handlerForm, validateSendForm } =
    useRegister();
  const cacheErrors = useRef<HandlerErrorRegister>({
    ...INITIAL_STATE,
    form: '',
  });

  const handleClickOpenModal = () => {
    setView(!view);
  };
  const handleUpdateUser = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      validateSendForm(cacheErrors.current, update);
      const userApollo = await updateUser({
        variables: {
          name: update.name,
          surName: update.surName,
          password: update.password,
          email: update.email,
          phone: update.phone,
          address: update.address,
        },
      });
    } catch (error) {
      const ERROR = error as Error;
      handlerForm(ERROR.message);
    }
  };
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    handlerErrorRegister(name, value, cacheErrors);
    setUpdate({ ...update, [name]: value });
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
              errors={errors}
              register={update}
              textButton="Guardar"
              handleChange={handleChange}
              handleRegisterUser={handleUpdateUser}
              all
            />
          </div>
        </Modal>
      )}
    </>
  );
}
