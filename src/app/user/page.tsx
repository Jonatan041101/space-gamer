'use client';
import Register from '@/components/Register/Register';
import UserRegister from '@/components/Register/UserRegister';
import { useBearStore } from '@/store/store';

export default function UserPage() {
  const { user } = useBearStore((state) => state);

  return <>{user.hasOwnProperty('email') ? <UserRegister /> : <Register />}</>;
}
