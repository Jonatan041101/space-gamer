import Input from '@/atoms/Input';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { logo } from '@/utils/cloudinary';
import Link from 'next/link';
import PositionFixed from './PositionFixed';

export type Fixed = 'static' | 'fixed';

export default function Header() {
  const [pos, setPos] = useState<Fixed>('static');
  const fixedRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        setPos('fixed');
      } else {
        setPos('static');
      }
    });
    if (fixedRef.current) {
      observer.observe(fixedRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top" ref={fixedRef}>
          <Link href={'/'}>
            <Image src={logo} alt="Logo" width={137} height={60} />
          </Link>
          <div className="header__input">
            <Input placeholder="¿ Que estas buscando ?" icon="search" />
          </div>
          <div className="header__wsp">
            <span>Whatsapp</span>
            <span className="header__number">+5493517719671</span>
          </div>
        </div>
        <PositionFixed posi={pos} />
      </div>
    </header>
  );
}
