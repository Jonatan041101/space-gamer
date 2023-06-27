import React from 'react';
import Icons from './Icons';

interface Props {
  handleClick: () => void;
  width?: boolean;
}

export default function Close({ handleClick, width = false }: Props) {
  return (
    <i className="cardf__i" data-close={width} onClick={handleClick}>
      <Icons icon="close" />
    </i>
  );
}
