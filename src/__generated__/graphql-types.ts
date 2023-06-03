export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Banner = {
  __typename?: 'Banner';
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type BrandCategory = {
  __typename?: 'BrandCategory';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Description = {
  __typename?: 'Description';
  id: Scalars['ID']['output'];
  list?: Maybe<Array<Maybe<List>>>;
  pargraph?: Maybe<Array<Maybe<Paragraph>>>;
  productId?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
  textInit?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  typeList?: Maybe<Scalars['Boolean']['output']>;
};

export type Image = {
  __typename?: 'Image';
  byOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
};

export type Li = {
  __typename?: 'Li';
  byOrder?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listId?: Maybe<Scalars['String']['output']>;
};

export type List = {
  __typename?: 'List';
  descriptionId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  li?: Maybe<Array<Maybe<Li>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Paragraph = {
  __typename?: 'Paragraph';
  byOrder?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  descriptionId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Products = {
  __typename?: 'Products';
  brand?: Maybe<BrandCategory>;
  brandId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<BrandCategory>;
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Description>;
  id: Scalars['ID']['output'];
  image?: Maybe<Array<Maybe<Image>>>;
  isCombo?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  quotes?: Maybe<Array<Maybe<Quote>>>;
  stock?: Maybe<Stock>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  banner?: Maybe<Array<Maybe<Banner>>>;
  products?: Maybe<Array<Maybe<Products>>>;
};

export type Quote = {
  __typename?: 'Quote';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  priceComplete?: Maybe<Scalars['Int']['output']>;
  priceCuote?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  quotes?: Maybe<Scalars['Int']['output']>;
};

export type Stock = {
  __typename?: 'Stock';
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  productId?: Maybe<Scalars['String']['output']>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Products', id: string, name?: string | null, price?: number | null, image?: Array<{ __typename?: 'Image', image?: string | null } | null> | null, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null } | null> | null };

export type GetBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannerQuery = { __typename?: 'Query', banner?: Array<{ __typename?: 'Banner', id: string, image?: string | null, link?: string | null } | null> | null };
