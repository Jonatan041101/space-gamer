import React, { useEffect, useRef } from 'react';

export default function useView(
  changeImage: (name: string | undefined) => void,
  IMAGE: string
) {
  const imgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          changeImage(IMAGE);
        }
      },
      { threshold: 0.7 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return imgRef;
}
