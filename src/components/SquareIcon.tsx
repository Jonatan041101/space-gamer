import Icons from '@/atoms/Icons';
import React from 'react';

interface Props {
  handleClick: () => void;
}

export default function SquareIcon({ handleClick }: Props) {
  return (
    <div
      onClick={handleClick}
      className="card__div"
      id="card__divid"
      title="Resumen"
    >
      <i className="card__i">
        <Icons icon="square" />
      </i>
    </div>
  );
}
