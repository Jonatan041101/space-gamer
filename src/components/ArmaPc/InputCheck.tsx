import { Products } from '@/__generated__/graphql-types';
import { ArmamentPCProduct } from '@/app/arma/page';
import React from 'react';

interface Props {
  text: string;
  product: Products;
  handleChange: ArmamentPCProduct;
}

export default function InputCheck({ text, product, handleChange }: Props) {
  return (
    <div className="inputcheck">
      <label className="inputcheck__label">
        <input
          onChange={(evt) => handleChange(evt, product)}
          type="checkbox"
          className="inputcheck__check"
        />
        {text}
      </label>
    </div>
  );
}
