export const verifyUser = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3}$/,
  // password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  password: /.{6,}/,
  phone: /^([0-9]{5,10})$/,
  name: /^[a-zA-Z]{5,20}$/,
  surName: /^[a-zA-Z]{5,20}$/,
  address: /^[a-zA-Z0-9\s]{1,30}$/,
};
export const errorsHandler = {
  email: 'El correo electonico no es valido',
  password: 'La contraseña debe tener minimo 6 caracteres',
  phone: 'El numero de telefono no es valido',
  name: 'El nombre no es valido minimo 5 letras y maximo 20',
  surName: 'El apellido no es valido minimo 5 letras y maximo 20',
  address: '',
};
export const errHandler = {
  email: 'Correo no valido',
  password: 'Contraseña no aceptable',
};
export const INITIAL_STATE = {
  email: '',
  name: '',
  surName: '',
  address: '',
  password: '',
  phone: '',
};
