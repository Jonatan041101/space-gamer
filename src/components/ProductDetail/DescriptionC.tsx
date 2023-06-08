import { Description } from '@/__generated__/graphql-types';
import React from 'react';
interface Props {
  description: Description;
}
export default function DescriptionC({ description }: Props) {
  console.log({ description });

  return <div className="options__description">{description?.textInit}</div>;
}
