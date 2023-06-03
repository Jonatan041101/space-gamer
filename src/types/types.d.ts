export interface LinksHeader {
  id: number;
  text: string;
  link: string;
}

export interface LiProducts {
  id: number;
  name: string;
  link: string;
  subList?: LiProducts[];
}
export type SliderContainer = React.MutableRefObject<HTMLDivElement | null>;
export type SliderContainerNonNull = HTMLDivElement;
export type countTranslate = React.MutableRefObject<number>;
export type BannerState = React.Dispatch<React.SetStateAction<Banner[]>>;
