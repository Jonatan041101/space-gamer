import { NameRegister } from '@/components/Register/Register';
import React from 'react';

interface Props {
  input?: boolean;
  labelText: string;
  value: string;
  name?: NameRegister;
  placeholder: string;
  err?: string;
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function InputSquare({
  input,
  labelText,
  value,
  err,
  placeholder,
  name,
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
            name={name ?? ''}
            className="inputsquare__input"
          />
        ) : (
          <textarea
            onChange={handleChange}
            value={value}
            className="inputsquare__input inputsquare__textarea"
          />
        )}
        <span className="inputsquare__err">{err}</span>
      </label>
    </div>
  );
}
