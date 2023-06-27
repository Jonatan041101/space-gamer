import {
  HandlerErrorRegister,
  NameRegister,
} from '@/components/Register/Register';
import {
  INITIAL_STATE,
  errorsHandler,
  verifyUser,
} from '@/components/Register/user_register';
import { RegisterUser } from '@/types/types';
import React, { useRef, useState } from 'react';

export default function useRegister() {
  const [errors, setErrors] = useState<HandlerErrorRegister>({
    ...INITIAL_STATE,
    form: '',
  });
  const timerId = useRef<NodeJS.Timeout>();
  const handlerErrorRegister = (
    name: string,
    value: string,
    cacheErrors: React.MutableRefObject<HandlerErrorRegister>
  ) => {
    clearTimeout(timerId.current);

    if (!verifyUser[name as NameRegister].test(value)) {
      setErrors({ ...errors, [name]: errorsHandler[name as NameRegister] });
      cacheErrors.current = {
        ...cacheErrors.current,
        [name]: errorsHandler[name as NameRegister],
      };

      timerId.current = setTimeout(
        () => setErrors({ ...errors, [name]: '' }),
        500
      );
    } else {
      setErrors({ ...errors, [name]: '' });
      cacheErrors.current = { ...cacheErrors.current, [name]: '' };
    }
  };
  const handlerForm = (message: string | undefined) => {
    setErrors({ ...errors, form: message ?? '' });
    setTimeout(() => setErrors({ ...errors, form: '' }), 500);
  };
  const validateSendForm = (
    cacheErrors: HandlerErrorRegister,
    register: RegisterUser
  ) => {
    Object.values(register).forEach((str) => {
      if (typeof str === 'string') {
        if (str.length === 0) {
          throw new Error('Llene los campos');
        }
      }
    });
    Object.values(cacheErrors).forEach((err) => {
      if (typeof err === 'string') {
        if (err.length > 0) {
          throw new Error('Datos incorrectos');
        }
      }
    });
  };
  return {
    errors,
    handlerErrorRegister,
    validateSendForm,
    handlerForm,
  };
}
