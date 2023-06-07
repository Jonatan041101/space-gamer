import React from 'react';
interface Props {
  children: React.ReactNode;
  name: string;
}

export default function BtnChild({ children, name }: Props) {
  return (
    <div className="btnchild">
      <span className="btnchild__name">{name}</span>
      {children}
    </div>
  );
}
