import React from 'react';

interface Props {
  input?: boolean;
  labelText: string;
}

export default function InputSquare({ input, labelText }: Props) {
  return (
    <div className="inputsquare">
      <label className="inputsquare__label">
        <span className="inputsquare__span">{labelText}</span>
        {input ? (
          <input className="inputsquare__input" />
        ) : (
          <textarea className="inputsquare__input inputsquare__textarea" />
        )}
      </label>
    </div>
  );
}
