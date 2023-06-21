import { useRouter } from 'next/navigation';
import React from 'react';
import { handleAddStrUrl } from '../ListProducts';
import { useBearStore } from '@/store/store';

export default function LinkCart() {
  const router = useRouter();
  const { handleAddHistoryLink } = useBearStore((state) => state);
  const handleLinkCart = () => {
    const allLinks = handleAddStrUrl('Mi carrito', false);
    handleAddHistoryLink(allLinks);
    router.push('/cart');
  };
  return (
    <div onClick={handleLinkCart} className="viewcart__btn viewcart__btncart">
      Ver Carrito
    </div>
  );
}
