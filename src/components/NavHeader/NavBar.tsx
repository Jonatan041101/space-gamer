import Icons from '@/atoms/Icons';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Select from '@/atoms/Select';
import AnimationList, { CategoryBrand } from './AnimationList';
import useCategory from '@/hooks/useCategory';
import useBrand from '@/hooks/useBrand';
import List from './List';
import Link from 'next/link';
export interface ListMenu {
  id: number;
  name: string;
  dates: CategoryBrand[];
}
export default function NavBar() {
  const data = useCategory();
  const brand = useBrand();
  const [viewList, setViewList] = useState<boolean>(false);
  const handleClick = () => {
    setViewList(!viewList);
  };
  const list: ListMenu[] = [
    { id: 2000, dates: data?.category as CategoryBrand[], name: 'Productos' },
    { id: 2001, dates: brand?.brand as CategoryBrand[], name: 'Marcas' },
  ];
  return (
    <>
      <div className="header__media" onClick={handleClick}>
        <i className="header__media--i">
          <Icons icon="bar" />
        </i>
      </div>
      {viewList && (
        <Modal end>
          <div className="menu">
            <div className="menu__div">
              <div className="menu__top">
                <h4 className="menu__menu">Menu</h4>

                <i className="menu__close" onClick={handleClick}>
                  <Icons icon="close" />
                </i>
              </div>

              <div className="menu__container">
                {list.map((li) => (
                  <List key={li.id} data={li} />
                ))}
                <Link href={'/'} className="menu__h4">
                  Arma tu Pc
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
