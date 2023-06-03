import React from 'react';
import Icons, { IconType } from './Icons';

interface Props {
  text: string;
  icon?: IconType;
  barIcon?: IconType;
  width?: string;
}

export default function Select({ text, icon, barIcon, width = '.7em' }: Props) {
  return (
    <div className="select header__link">
      <span className="select__text">
        {barIcon && (
          <i className="select__bar">
            <Icons icon={barIcon} />
          </i>
        )}
        {text}
      </span>
      {icon && (
        <i className="select__i" style={{ width }}>
          <Icons icon={icon} />
        </i>
      )}
    </div>
  );
}
