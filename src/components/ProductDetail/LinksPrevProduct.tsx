'use client';
import SquareTitle from '@/atoms/SquareTitle';
import { useBearStore } from '@/store/store';
import React, { useEffect } from 'react';
export interface LinksPrev {
  id: number;
  link: string;
  name: string;
  isFilter?: boolean;
}
enum Storage {
  LinksPrev = 'LinksPrev',
}
export default function LinksPrevProduct() {
  const { links, handleAddHistoryLink } = useBearStore((state) => state);
  const defect: LinksPrev = { id: 1030, link: '/', name: '' };
  useEffect(() => {
    if (links.length > 0) {
      window.localStorage.setItem(Storage.LinksPrev, JSON.stringify(links));
    }
  }, [links]);
  useEffect(() => {
    const existDatesHistory = window.localStorage.getItem(Storage.LinksPrev);
    if (existDatesHistory) {
      const links: LinksPrev[] = JSON.parse(existDatesHistory);
      handleAddHistoryLink(links);
    }
  }, []);
  return (
    <div className="squaret">
      <div className="squaret__links">
        {links.slice(0, links.length - 1).map((link) => (
          <SquareTitle isClick key={link.id} link={link} />
        ))}
      </div>
      <SquareTitle isClick={false} trans link={links.at(-1) || defect} />
    </div>
  );
}
// box-shadow: 0 0 0 2px #f2f2f2 inset;
