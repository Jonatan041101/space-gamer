'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/utils/graphql/query';
import { GetProductsQuery, Products } from '@/__generated__/graphql-types';
import Card from './Card';
const MAX_WIDTH = 1070;
const TRANSLATE = -1290;
export default function Cards() {
  const { data } = useQuery<GetProductsQuery>(GET_PRODUCTS);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isAbilitedClick, setIsAbilitedClick] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const widthContainer = useRef<number>(TRANSLATE);
  const translateX = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerCarruzel = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [timeoutRef]);
  const dragStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    setCurrentTranslate(getTranslateX());
  };
  const drag = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsAbilitedClick(false);
    if (containerCarruzel.current) {
      if (containerCarruzel.current.offsetWidth === MAX_WIDTH) {
        widthContainer.current = TRANSLATE;
      } else {
        const translateMax = containerCarruzel.current.offsetWidth - MAX_WIDTH;
        widthContainer.current = TRANSLATE + translateMax;
      }
    }
    const currentPosition = getPositionX(event);

    const diff = currentPosition - startPosition;
    translateX.current =
      currentTranslate + diff > 0
        ? 0
        : currentTranslate + diff <= widthContainer.current
        ? widthContainer.current
        : currentTranslate + diff;

    if (containerRef.current) {
      if (
        translateX.current < 10 &&
        translateX.current >= widthContainer.current
      ) {
        containerRef.current.style.transform = `translateX(${translateX.current}px)`;
      }
    }
  };
  const dragEnd = () => {
    setIsDragging(false);
    timeoutRef.current = setTimeout(() => {
      setIsAbilitedClick(true);
    }, 100);
  };

  const getPositionX = (event: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in event) {
      return event.touches[0].clientX;
    }
    return event.pageX;
  };

  const getTranslateX = () => {
    return translateX.current;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="cards" ref={containerCarruzel}>
        <section
          className="cards__container"
          ref={containerRef}
          onMouseDown={dragStart}
          onMouseMove={drag}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={dragStart}
          onTouchMove={drag}
          onTouchEnd={dragEnd}
        >
          {data &&
            data.products?.map((product) => (
              <Card
                isAbilitedClick={isAbilitedClick}
                key={product?.id}
                product={product as Products}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
