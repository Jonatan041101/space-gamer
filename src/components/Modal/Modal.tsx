import React from 'react';

interface Props {
  children: React.ReactNode;
  end?: boolean;
  superModal?: boolean;
  start?: boolean;
  off?: boolean;
}

export default function Modal({
  children,
  end,
  superModal = false,
  start,
  off = false,
}: Props) {
  return (
    <div
      className="modal"
      data-modal={end}
      data-super={superModal}
      data-modal-start={start}
      data-pad={off}
    >
      {children}
    </div>
  );
}
