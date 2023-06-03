import { Banner } from '@/__generated__/graphql-types';
import { animationSlider, updateStateBanner } from '@/utils/slider';
import React, { useEffect, useRef, useState } from 'react';

export default function useSliderMouse() {
  const refCarruzel = useRef<HTMLDivElement | null>(null);
  const refTranslate = useRef<number>(0);
  const refLeft = useRef<boolean>(false);
  const refCurrentMouse = useRef<number>(0);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [move, setMove] = useState<boolean>(false); //
  const [banner, setBanner] = useState<Banner[]>([]);
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);
  const [idImage, setIdImage] = useState<string>('');
  console.log({ banner });

  useEffect(() => {
    const idTime = setTimeout(
      () =>
        move &&
        updateStateBanner(
          setBanner,
          banner,
          refLeft.current,
          refCarruzel,
          changeIdImage
        ),
      300
    );
    return () => clearTimeout(idTime);
  }, [move]);
  const changeIdImage = (id: string) => {
    setIdImage(id);
  };
  const changeBanner = (newListBanner: Banner[]) => {
    setBanner(newListBanner);
    setIdImage(newListBanner[1].id);
    console.log('hola ');
  };
  const handleMoveCarruzel = (evt: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition(evt.pageX);
    if (refCarruzel.current)
      setCurrentTranslate(-refCarruzel.current.clientWidth);
  };
  const handleMoveEndCarruzel = () => {
    if (!isDragging) return;
    if (refCarruzel.current && refLeft.current) {
      const count = -refCarruzel.current.clientWidth;
      animationSlider(-200, refCarruzel.current, refTranslate, count);
    }
    if (refCarruzel.current && !refLeft.current) {
      animationSlider(0, refCarruzel.current, refTranslate, 0);
    }
    setIsDragging(false);
    setMove(true);
    setTimeout(() => setMove(false), 350);
  };
  const handleMove = (evt: React.MouseEvent) => {
    if (!isDragging) return;
    const currentPosition = evt.pageX;
    const diff = currentPosition - startPosition;
    const currentMouse = evt.clientX;
    if (currentMouse > refCurrentMouse.current) {
      refLeft.current = false;
    }
    if (currentMouse < refCurrentMouse.current) {
      refLeft.current = true;
    }
    refCurrentMouse.current = currentMouse;
    if (refCarruzel.current) {
      refTranslate.current = currentTranslate + diff;
      refCarruzel.current.style.transform = `translateX(${refTranslate.current}px)`;
    }
  };

  return {
    handleMove,
    handleMoveCarruzel,
    handleMoveEndCarruzel,
    changeBanner,
    banner,
    move,
    idImage,
    // left,
    refCarruzel,
  };
}
