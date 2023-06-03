import React from 'react';

interface Props {
  title: string;
}
export default function TitleProducts({ title }: Props) {
  return (
    <div className="titlep">
      <p className="titlep__p">{title}</p>
      <div className="titlep__ray"></div>
    </div>
  );
}
