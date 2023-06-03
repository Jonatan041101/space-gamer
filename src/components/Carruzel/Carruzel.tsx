'use client';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Banner, GetBannerQuery } from '@/__generated__/graphql-types';
import { GET_BANNER } from '@/utils/graphql/query';
import BannerC from './BannerC';
import useSliderMouse from '@/hooks/useSliderMouse';
export default function Carruzel() {
  const { data, loading } = useQuery<GetBannerQuery>(GET_BANNER);

  const {
    banner,
    // left,
    move,
    idImage,
    refCarruzel,
    changeBanner,
    handleMove,
    handleMoveCarruzel,
    handleMoveEndCarruzel,
  } = useSliderMouse();
  useEffect(() => {
    if (!loading) {
      if (data?.banner) {
        changeBanner(data.banner as Banner[]);
      }
    }
  }, [loading]);
  return (
    <div className="banner">
      <div
        className="banner__div"
        ref={refCarruzel}
        onMouseDown={handleMoveCarruzel}
        onMouseMove={handleMove}
        onMouseUp={handleMoveEndCarruzel}
        onMouseLeave={handleMoveEndCarruzel}
      >
        {banner.map((img) => (
          <BannerC key={img?.id} img={img as Banner} />
        ))}
      </div>
      <div className="banner__buttons">
        {/* {Array.from({ length: data?.banner?.length ?? 0 }, (_, index) => (
          <button className="banner__btn" key={`${index}-${index}`}></button>
        ))} */}
        {data?.banner?.map((img) => (
          <button
            className="banner__btn"
            key={img?.image}
            style={{
              background: `${img?.id === idImage ? '#262626' : '#b2b2b2'}`,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
