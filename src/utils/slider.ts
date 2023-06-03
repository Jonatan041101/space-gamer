import { Banner } from '@/__generated__/graphql-types';
import {
  BannerState,
  SliderContainer,
  SliderContainerNonNull,
  countTranslate,
} from '@/types/types';

export const moveCarruzel = (refCarruzel: SliderContainer) => {
  if (refCarruzel.current) {
    refCarruzel.current.style.transform = `translateX(-${100}%)`;
    refCarruzel.current.style.transition = '0s';
  }
};
export const animationSlider = (
  translate: number,
  refCarruzel: SliderContainerNonNull,
  refTranslate: countTranslate,
  count: number
) => {
  refCarruzel.style.transform = `translateX(${translate}%)`;
  refCarruzel.style.transition = '.1s';
  refTranslate.current = count;
};
export const updateStateBanner = (
  setBanner: BannerState,
  banner: Banner[],
  first: boolean,
  refCarruzel: SliderContainer,
  changeIdImage: (id: string) => void
) => {
  let reorderBanner = [...banner];
  if (!first) {
    let lastElement = reorderBanner.pop();
    if (lastElement) {
      reorderBanner = [lastElement, ...reorderBanner];
      setBanner(reorderBanner);
      changeIdImage(reorderBanner[1].id);
    }
    moveCarruzel(refCarruzel);
    return;
  }

  let firstElement = reorderBanner.shift();
  if (firstElement) {
    reorderBanner = [...reorderBanner, firstElement];
    setBanner(reorderBanner);
    changeIdImage(reorderBanner[1].id);
  }
  moveCarruzel(refCarruzel);
};
