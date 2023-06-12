'use client';
import useBrand from '@/hooks/useBrand';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useBearStore } from '@/store/store';
import { handleAddStrUrl } from '../ListProducts';
import { useRouter } from 'next/navigation';
const MAX_WIDTH = 1170;
const MIN_TRANSLATE = 1556;
export default function CarruzelBrand() {
  const brand = useBrand();
  const router = useRouter();
  const [translate, setTranslate] = useState<number>(MIN_TRANSLATE);
  const [repeat, setRepeat] = useState<boolean>(false);
  const refCarruzel = useRef<HTMLDivElement | null>(null);
  const { handleAddHistoryLink, handleFilterCB } = useBearStore(
    (state) => state
  );
  useEffect(() => {
    const handleTranslate = () => {
      if (refCarruzel.current) {
        const widthDIV = MAX_WIDTH - refCarruzel.current?.clientWidth;
        const width = widthDIV + MIN_TRANSLATE;
        setTranslate(width);
      }
    };
    handleTranslate();
    window.addEventListener('resize', handleTranslate);
    return () => window.removeEventListener('resize', handleTranslate);
  }, []);
  useEffect(() => {
    const idTime = setInterval(() => {
      setRepeat(!repeat);
    }, 60700);

    return () => {
      clearInterval(idTime);
    };
  }, [repeat]);

  const handleFilter = (name: string, image: string) => {
    const allLinks = handleAddStrUrl(name);
    router.push('/products');
    handleAddHistoryLink(allLinks);
    if (image) {
      handleFilterCB(null, null, name, image, null);
    }
  };
  return (
    <div className="sliderbrand">
      <div className="sliderbrand__div">
        <motion.div
          ref={refCarruzel}
          className="sliderbrand__container"
          initial={{
            translateX: repeat ? -translate : 0,
          }}
          animate={{
            translateX: repeat ? 0 : -translate,
          }}
          transition={{
            duration: 60,
          }}
        >
          {brand?.brand?.map((brand) => (
            <Image
              onClick={() =>
                handleFilter(brand?.name ?? '', brand?.image ?? '')
              }
              className="sliderbrand__image"
              src={`${brand?.image}`}
              key={brand?.id}
              width={130}
              height={130}
              alt={`${brand?.image}`}
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
