import React from 'react';
import Icons, { IconType } from './Icons';

interface Props {
  icon?: IconType;
  placeholder: string;
}

export default function Input({ icon, placeholder }: Props) {
  return (
    <div className="input">
      <input className="input__input" placeholder={placeholder} />
      {icon && (
        <i className="input__i">
          <Icons icon={icon} />
        </i>
      )}
    </div>
  );
}
