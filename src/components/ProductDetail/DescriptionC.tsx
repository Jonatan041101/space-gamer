import { Description } from '@/__generated__/graphql-types';
import React from 'react';
interface Props {
  description: Description;
}
export default function DescriptionC({ description }: Props) {
  return (
    <div className="options__description">
      {description?.title}
      {description?.subTitle}
      {description?.textInit}
      {description?.pargraph?.map((paragraph) => (
        <p key={paragraph?.id}>{paragraph?.content}</p>
      ))}
      {description?.typeList}
      {description?.list?.map((li) => (
        <li key={li?.id}>
          {li?.title}
          {li?.li?.map((list) => (
            <li key={list?.id}>{list?.content}</li>
          ))}
        </li>
      ))}
    </div>
  );
}
