import { Description, Post } from '@/__generated__/graphql-types';
import React from 'react';
import DescriptionC from './DescriptionC';
import Comentarios from './Comentarios';
import { AcordeonDetail } from './OptionsList';

interface Props {
  description: Description;
  acordeon: AcordeonDetail;
  post: Post[];
  id: string;
}

export default function Options({ description, acordeon, post, id }: Props) {
  return (
    <div className="options">
      {acordeon === 'descripcion' && <DescriptionC description={description} />}
      {acordeon === 'comentarios' && <Comentarios post={post} id={id} />}
      {/* {acordeon === 'consultar' && <Consultar />} */}
    </div>
  );
}
