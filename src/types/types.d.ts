import { ProductToCart } from '@/__generated__/graphql-types';

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
export interface Bill {
  id: string;
  order: Order;
  product: ProductToCart[];
}
export interface Order {
  id: string;
  bill: Bill;
  user: UserRegister;
  status: string;
  date: string;
}
export interface RegisterUser {
  id?: string;
  email: string;
  password: string;
  name: string;
  surName: string;
  phone: string;
  address: string;
}
