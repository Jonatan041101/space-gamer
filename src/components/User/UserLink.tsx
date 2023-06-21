import { useBearStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import { handleAddStrUrl } from '../ListProducts';
interface Props {
  text: string;
}
export default function UserLink({ text }: Props) {
  const router = useRouter();
  const { handleAddHistoryLink } = useBearStore((state) => state);
  const handleLinkUser = () => {
    const allLinks = handleAddStrUrl('Usuario');

    handleAddHistoryLink(allLinks);
    router.push('/user');
  };
  return (
    <div className="user__link" onClick={handleLinkUser}>
      {text}
    </div>
  );
}
