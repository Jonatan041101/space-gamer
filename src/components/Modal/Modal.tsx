import React from 'react';

interface Props {
  children: React.ReactNode;
  end?: boolean;
}

export default function Modal({ children, end }: Props) {
  return (
    <div className="modal" data-modal={end}>
      {children}
    </div>
  );
}
