import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  link: string;
}

export default function LinkCategory({ text, link }: Props) {
  return (
    <Link href={link} className="linkcategory">
      {text}
    </Link>
  );
}
