import React from 'react';

interface Props {
  text: string;
  handleClick: () => void;
}
export default function Button({ handleClick, text }: Props) {
  return (
    <div className="button">
      <button className="button__btn" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
