'use client';
import Icons, { IconType } from '@/atoms/Icons';
import useCategory from '@/hooks/useCategory';
import { LiProducts } from '@/types/types';
import { logo } from '@/utils/cloudinary';
import Image from 'next/image';
import React from 'react';
type List = Omit<LiProducts, 'link'> & { icon?: IconType };
const listMap: List[] = [
  {
    id: 601,
    name: 'Tienda Gamer de computación y videojuegos, ubicada en Córdoba, contamos con variedad en juegos de Ps4, Nintendo Switch.',
  },
  {
    id: 602,
    name: 'Mouse, tecaldos mecánicos y componentes para que armes tu Pc a medida.',
  },
  { id: 603, name: '' },
  { id: 604, name: 'Tucumán 127, Córdoba, Argentina', icon: 'location' },
  { id: 605, name: 'ventas@spacegamer.com.ar', icon: 'email' },
  { id: 606, name: '+5493517719671', icon: 'phone' },
  { id: 607, name: '+5493517719671', icon: 'wsp' },
  {
    id: 608,
    name: 'Lunes a viernes de 10:00 a 18:30 hs - Sábados 10 a 14 hs',
    icon: 'clock',
  },
];
const linksPage: LiProducts[] = [
  {
    id: 610,
    link: '/',
    name: 'Home',
  },
  { id: 611, link: '/', name: 'Contacto' },
  { id: 612, link: '/', name: 'Mis Pedidos' },
  { id: 613, link: '/', name: 'Arma tu Pc' },
  { id: 614, link: '/', name: 'Terminos y condiciones' },
];
export default function ListFooter() {
  const brand = useCategory();
  return (
    <section className="listf">
      <ul className="listf__ul">
        <Image
          src={logo}
          width={137}
          height={60}
          alt="logo"
          className="listf__logo"
        />
        <h3 className="listf__h3">Space Tienda Gamer</h3>
        {listMap.map((li) => (
          <li key={li.id} className="listf__li">
            {li.icon && (
              <i className="listf__i">
                <Icons icon={li.icon} />
              </i>
            )}
            <span className="listf__span">{li.name}</span>
          </li>
        ))}
      </ul>
      <ul className="listf__ul listf__footer">
        <h3 className="listf__h3">Información</h3>
        {linksPage.map((list) => (
          <li key={list.id}>
            <span className="listf__span">{list.name}</span>
          </li>
        ))}
      </ul>
      <ul className="listf__ul listf__footer">
        <h3 className="listf__h3">Categorias</h3>
        {brand?.category &&
          brand.category.map((list) => (
            <li key={list?.id}>
              <span className="listf__span">{list?.name}</span>
            </li>
          ))}
      </ul>
    </section>
  );
}
