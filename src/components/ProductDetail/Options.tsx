import { Description } from '@/__generated__/graphql-types';
import React from 'react';
import DescriptionC from './DescriptionC';
import Comentarios from './Comentarios';
import { AcordeonDetail } from './OptionsList';

interface Props {
  description: Description;
  acordeon: AcordeonDetail;
}

export default function Options({ description, acordeon }: Props) {
  return (
    <div className="options">
      {acordeon === 'descripcion' && <DescriptionC description={description} />}
      {acordeon === 'comentarios' && <Comentarios />}
      {/* {acordeon === 'consultar' && <Consultar />} */}
    </div>
  );
}
