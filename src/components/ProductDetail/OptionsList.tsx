import React, { useState } from 'react';
import Options from './Options';
import { Description } from '@/__generated__/graphql-types';
import Acordeon from './Acordeon';
interface Props {
  description: Description;
}
export type AcordeonDetail = 'descripcion' | 'consultar' | 'comentarios';
export interface ListAcordeon {
  id: number;
  text: AcordeonDetail;
}
const list: ListAcordeon[] = [
  { id: 1501, text: 'descripcion' },
  // { id: 1502, text: 'consultar' },
  { id: 1503, text: 'comentarios' },
];
export default function OptionsList({ description }: Props) {
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
      <Options acordeon={acordeon} description={description} />
    </div>
  );
}
