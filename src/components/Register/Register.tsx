'use client';
import Container from '@/components/Container';
import React, { useRef, useState } from 'react';
import FormRegister from './FormRegister';
import { PostUserMutation } from '@/__generated__/graphql-types';
import { UserSlice } from '@/store/slices/user';
import { useBearStore } from '@/store/store';
import { RegisterUser } from '@/types/types';
import { CREATE_USER } from '@/utils/graphql/query';
import { useMutation } from '@apollo/client';
import { INITIAL_STATE } from './user_register';
import useRegister from '@/hooks/useRegister';
export type NameRegister =
  | 'email'
  | 'password'
  | 'name'
  | 'surName'
  | 'phone'
  | 'address';

export type HandlerErrorRegister = RegisterUser & {
  form?: string;
};

export default function Register() {
  const { registerUser } = useBearStore((state) => state);
  const [createUser] = useMutation<PostUserMutation>(CREATE_USER);
  const [register, setRegister] = useState<RegisterUser>(INITIAL_STATE);
  const { errors, handlerErrorRegister, validateSendForm, handlerForm } =
    useRegister();
  const cacheErrors = useRef<HandlerErrorRegister>({
    ...INITIAL_STATE,
    form: '',
  });

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = evt.target;

    handlerErrorRegister(name, value, cacheErrors);
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const handleRegisterUser = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      validateSendForm(cacheErrors.current, register);
      const postUser = await createUser({
        variables: {
          name: register.name,
          surName: register.surName,
          email: register.email,
          password: register.password,
          phone: register.phone,
          address: register.address,
        },
      });

      registerUser(postUser.data?.createUser as UserSlice);
    } catch (error) {
      const ERROR = error as Error;
      handlerForm(ERROR.message);
    }
  };

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
        <FormRegister
          handleChange={handleChange}
          handleRegisterUser={handleRegisterUser}
          register={register}
          textButton="Crear"
          errors={errors}
        />
      </div>
    </Container>
  );
}
