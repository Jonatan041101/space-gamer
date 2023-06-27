import { toast } from 'react-toastify';
export const toastNotify = (message: string) => {
  toast.success(`${message}`.toLocaleUpperCase(), {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
