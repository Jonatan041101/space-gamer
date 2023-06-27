import React, { useState } from 'react';
import Options from './Options';
import { Description, Post } from '@/__generated__/graphql-types';
import Acordeon from './Acordeon';
export interface posts {
  post: Post[];
}
interface Props extends posts {
  description: Description;
  id: string;
}
export type AcordeonDetail = 'descripcion' | 'comentarios';
export interface ListAcordeon {
  id: number;
  text: AcordeonDetail;
}
const list: ListAcordeon[] = [
  { id: 1501, text: 'descripcion' },
  { id: 1503, text: 'comentarios' },
];
export default function OptionsList({ description, post, id }: Props) {
  const [acordeon, setAcordeon] = useState<AcordeonDetail>('descripcion');
  const handleChangePageAcordeon = (acordeon: AcordeonDetail) => {
    setAcordeon(acordeon);
  };
  return (
    <div className="optionslist">
      <div className="optionslist__div">
        {list.map((list) => (
          <Acordeon
            acordeon={acordeon}
            key={list.id}
            list={list}
            handleChangePageAcordeon={handleChangePageAcordeon}
          />
        ))}
      </div>
      <Options
        id={id}
        acordeon={acordeon}
        description={description}
        post={post}
      />
    </div>
  );
}
