'use client';
import React, { useState } from 'react';

interface Props {
  counter?: number;
  handleClickCounter: (value: number) => void;
}

export default function Counter({ counter = 1, handleClickCounter }: Props) {
  return (
    <div className="count__div">
      <button className="count__menos" onClick={() => handleClickCounter(-1)}>
        -
      </button>
      <span className="count__count">{counter}</span>
      <button className="count__more" onClick={() => handleClickCounter(1)}>
        +
      </button>
    </div>
  );
}
