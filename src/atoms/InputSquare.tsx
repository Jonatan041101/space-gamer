import React from 'react';

interface Props {
  input?: boolean;
  labelText: string;
  value: string;
  placeholder: string;
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function InputSquare({
  input,
  labelText,
  value,
  placeholder,
  handleChange,
}: Props) {
  return (
    <div className="inputsquare">
      <label className="inputsquare__label">
        <span className="inputsquare__span">{labelText}</span>
        {input ? (
          <input
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            className="inputsquare__input"
          />
        ) : (
          <textarea
            onChange={handleChange}
            value={value}
            className="inputsquare__input inputsquare__textarea"
          />
        )}
      </label>
    </div>
  );
}
