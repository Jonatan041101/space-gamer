import React, { useState } from 'react';
import AnimationList, { CategoryBrand } from './AnimationList';
import { ListMenu } from './NavBar';
import Icons from '@/atoms/Icons';
interface Props {
  data?: ListMenu;
}
export default function List({ data }: Props) {
  const [view, setView] = useState<boolean>(false);
  const handleOpenView = () => {
    setView(!view);
  };
  return (
    <article className="menu__article">
      <div className="menu__h4" onClick={handleOpenView}>
        <h4 className="menu__name">{data?.name}</h4>
        <i
          className="menu__down"
          style={{ transform: `rotate(${view ? '180deg' : '0deg'})` }}
        >
          <Icons icon="down" />
        </i>
      </div>
      {view && (
        <AnimationList
          down
          listDown
          list={data?.dates as CategoryBrand[]}
          viewListProduct
          column
        />
      )}
    </article>
  );
}
