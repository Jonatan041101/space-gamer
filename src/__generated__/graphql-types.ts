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

export type ArmamentToCart = {
  cartId: Scalars['String']['input'];
  count: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
};

export type Banner = {
  __typename?: 'Banner';
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type Bill = {
  __typename?: 'Bill';
  id: Scalars['String']['output'];
  order?: Maybe<Order>;
  product?: Maybe<Array<Maybe<ProductToCart>>>;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BrandCategory = {
  __typename?: 'BrandCategory';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<ProductToCart>>>;
  userId: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subCategory?: Maybe<Array<Maybe<SubCategory>>>;
};

export type CategoryProduct = {
  __typename?: 'CategoryProduct';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Products>>>;
};

export type Counts = {
  __typename?: 'Counts';
  auricular: Scalars['Int']['output'];
  gabinetes: Scalars['Int']['output'];
  monitores: Scalars['Int']['output'];
  pcs: Scalars['Int']['output'];
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

export type Mutation = {
  __typename?: 'Mutation';
  addArmamentPcToProductToCart?: Maybe<Scalars['String']['output']>;
  addPostToProduct?: Maybe<Post>;
  addProductCart?: Maybe<Scalars['String']['output']>;
  createUser?: Maybe<User>;
  deleteProducCart?: Maybe<Scalars['String']['output']>;
  mercadoPago?: Maybe<OrderMercadoPago>;
  updateProductCount?: Maybe<Scalars['String']['output']>;
  updateUser?: Maybe<User>;
};


export type MutationAddArmamentPcToProductToCartArgs = {
  args: Array<ArmamentToCart>;
};


export type MutationAddPostToProductArgs = {
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};


export type MutationAddProductCartArgs = {
  cartId: Scalars['String']['input'];
  count: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  surName: Scalars['String']['input'];
};


export type MutationDeleteProducCartArgs = {
  cartId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
};


export type MutationMercadoPagoArgs = {
  cartId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateProductCountArgs = {
  cartId: Scalars['String']['input'];
  count: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  surName: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  bill?: Maybe<Bill>;
  date: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type OrderMercadoPago = {
  __typename?: 'OrderMercadoPago';
  preferenceId: Scalars['String']['output'];
};

export type Paragraph = {
  __typename?: 'Paragraph';
  byOrder?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  descriptionId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type ProductToCart = {
  __typename?: 'ProductToCart';
  buy: Scalars['Boolean']['output'];
  count: Scalars['Int']['output'];
  product?: Maybe<Products>;
};

export type Products = {
  __typename?: 'Products';
  brand?: Maybe<BrandCategory>;
  brandId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Description>;
  id: Scalars['ID']['output'];
  image: Array<Maybe<Image>>;
  isCombo?: Maybe<Scalars['Boolean']['output']>;
  motherBoard?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  post?: Maybe<Array<Maybe<Post>>>;
  price: Scalars['Int']['output'];
  product?: Maybe<Array<Maybe<Products>>>;
  quotes?: Maybe<Array<Maybe<Quote>>>;
  stock?: Maybe<Stock>;
  subCategory?: Maybe<SubCategory>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  banner?: Maybe<Array<Maybe<Banner>>>;
  brand?: Maybe<Array<Maybe<Brand>>>;
  category?: Maybe<Array<Maybe<Category>>>;
  countProducts?: Maybe<Counts>;
  getCategoryOrSub?: Maybe<CategoryProduct>;
  getProduct?: Maybe<Products>;
  getProductFilter?: Maybe<Array<Maybe<Products>>>;
  loginUser?: Maybe<User>;
  products?: Maybe<Array<Maybe<Products>>>;
  productsNonVideogames?: Maybe<Array<Maybe<Products>>>;
  searchCategory?: Maybe<Category>;
  searchProducts?: Maybe<Array<Maybe<Products>>>;
};


export type QueryGetCategoryOrSubArgs = {
  motherBoard?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type QueryGetProductArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetProductFilterArgs = {
  brand?: InputMaybe<Scalars['String']['input']>;
  nameC?: InputMaybe<Scalars['String']['input']>;
  nameS?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryProductsNonVideogamesArgs = {
  limit: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
};


export type QuerySearchCategoryArgs = {
  name: Scalars['String']['input'];
};


export type QuerySearchProductsArgs = {
  name: Scalars['String']['input'];
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

export type SubCategory = {
  __typename?: 'SubCategory';
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  cart: Cart;
  code: Scalars['String']['output'];
  confirm?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  img?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  order?: Maybe<Array<Maybe<Order>>>;
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  surName: Scalars['String']['output'];
};

export type ProductsLimitFragment = { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null };

export type UserAllFragment = { __typename?: 'User', id: string, name: string, surName: string, email: string, password: string, address: string, img?: string | null, phone: string, order?: Array<{ __typename?: 'Order', date: string, id: string, status: string, bill?: { __typename?: 'Bill', id: string, product?: Array<{ __typename?: 'ProductToCart', buy: boolean, count: number, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } | null } | null> | null, cart: { __typename?: 'Cart', id: string, products?: Array<{ __typename?: 'ProductToCart', count: number, buy: boolean, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } };

export type GetCountProductsHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountProductsHomeQuery = { __typename?: 'Query', countProducts?: { __typename?: 'Counts', auricular: number, gabinetes: number, monitores: number, pcs: number } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null> | null };

export type GetProductsNoneVideoGamesQueryVariables = Exact<{
  limit?: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetProductsNoneVideoGamesQuery = { __typename?: 'Query', productsNonVideogames?: Array<{ __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null> | null };

export type GetBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannerQuery = { __typename?: 'Query', banner?: Array<{ __typename?: 'Banner', id: string, image?: string | null, link?: string | null } | null> | null };

export type GetCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryQuery = { __typename?: 'Query', category?: Array<{ __typename?: 'Category', name: string, id: string, subCategory?: Array<{ __typename?: 'SubCategory', id: string, name: string } | null> | null } | null> | null };

export type GetBrandQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandQuery = { __typename?: 'Query', brand?: Array<{ __typename?: 'Brand', image: string, name: string, id: string } | null> | null };

export type GetProductDetailQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetProductDetailQuery = { __typename?: 'Query', getProduct?: { __typename?: 'Products', id: string, name: string, price: number, isCombo?: boolean | null, brand?: { __typename?: 'BrandCategory', id: string, name?: string | null } | null, product?: Array<{ __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null> | null, post?: Array<{ __typename?: 'Post', date: string, id: string, name: string, text: string, rating: number } | null> | null, subCategory?: { __typename?: 'SubCategory', name: string } | null, category?: { __typename?: 'Category', id: string, name: string } | null, image: Array<{ __typename?: 'Image', byOrder?: number | null, id: string, image?: string | null } | null>, description?: { __typename?: 'Description', id: string, subTitle?: string | null, textInit?: string | null, title?: string | null, list?: Array<{ __typename?: 'List', title?: string | null, li?: Array<{ __typename?: 'Li', id: string, byOrder?: number | null, content?: string | null } | null> | null } | null> | null, pargraph?: Array<{ __typename?: 'Paragraph', id: string, byOrder?: number | null, content?: string | null, title?: string | null } | null> | null } | null, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', id: string, name?: string | null, priceComplete?: number | null, priceCuote?: number | null } | null> | null } | null };

export type GetProductFilterQueryVariables = Exact<{
  nameC?: InputMaybe<Scalars['String']['input']>;
  nameS?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductFilterQuery = { __typename?: 'Query', getProductFilter?: Array<{ __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null> | null };

export type GetProductSearhQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetProductSearhQuery = { __typename?: 'Query', searchProducts?: Array<{ __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null> | null };

export type PostUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  surName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  address: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name: string, surName: string, email: string, password: string, address: string, img?: string | null, phone: string, order?: Array<{ __typename?: 'Order', date: string, id: string, status: string, bill?: { __typename?: 'Bill', id: string, product?: Array<{ __typename?: 'ProductToCart', buy: boolean, count: number, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } | null } | null> | null, cart: { __typename?: 'Cart', id: string, products?: Array<{ __typename?: 'ProductToCart', count: number, buy: boolean, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } } | null };

export type AddProductToCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  count: Scalars['Int']['input'];
}>;


export type AddProductToCartMutation = { __typename?: 'Mutation', addProductCart?: string | null };

export type UpdateProductToCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  count: Scalars['Int']['input'];
}>;


export type UpdateProductToCartMutation = { __typename?: 'Mutation', updateProductCount?: string | null };

export type GetLoginUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type GetLoginUserQuery = { __typename?: 'Query', loginUser?: { __typename?: 'User', id: string, name: string, surName: string, email: string, password: string, address: string, img?: string | null, phone: string, order?: Array<{ __typename?: 'Order', date: string, id: string, status: string, bill?: { __typename?: 'Bill', id: string, product?: Array<{ __typename?: 'ProductToCart', buy: boolean, count: number, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } | null } | null> | null, cart: { __typename?: 'Cart', id: string, products?: Array<{ __typename?: 'ProductToCart', count: number, buy: boolean, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } } | null };

export type UpdateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  surName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  address: Scalars['String']['input'];
  phone: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name: string, surName: string, email: string, password: string, address: string, img?: string | null, phone: string, order?: Array<{ __typename?: 'Order', date: string, id: string, status: string, bill?: { __typename?: 'Bill', id: string, product?: Array<{ __typename?: 'ProductToCart', buy: boolean, count: number, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } | null } | null> | null, cart: { __typename?: 'Cart', id: string, products?: Array<{ __typename?: 'ProductToCart', count: number, buy: boolean, product?: { __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null } | null> | null } } | null };

export type PostMercadoPagoMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  cartId: Scalars['String']['input'];
}>;


export type PostMercadoPagoMutation = { __typename?: 'Mutation', mercadoPago?: { __typename?: 'OrderMercadoPago', preferenceId: string } | null };

export type DeleteProductCartMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
}>;


export type DeleteProductCartMutation = { __typename?: 'Mutation', deleteProducCart?: string | null };

export type GetSearchCategoryQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetSearchCategoryQuery = { __typename?: 'Query', searchCategory?: { __typename?: 'Category', name: string, subCategory?: Array<{ __typename?: 'SubCategory', name: string } | null> | null } | null };

export type CreatePostMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  text: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', addPostToProduct?: { __typename?: 'Post', name: string, date: string, id: string, rating: number, text: string } | null };

export type GetProductCategorySubQueryVariables = Exact<{
  name: Scalars['String']['input'];
  motherBoard?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductCategorySubQuery = { __typename?: 'Query', getCategoryOrSub?: { __typename?: 'CategoryProduct', name: string, id: string, products?: Array<{ __typename?: 'Products', id: string, name: string, motherBoard?: string | null, price: number, subCategory?: { __typename?: 'SubCategory', name: string } | null, brand?: { __typename?: 'BrandCategory', name?: string | null } | null, image: Array<{ __typename?: 'Image', image?: string | null } | null>, stock?: { __typename?: 'Stock', count?: number | null } | null, quotes?: Array<{ __typename?: 'Quote', name?: string | null, priceCuote?: number | null } | null> | null, category?: { __typename?: 'Category', name: string } | null } | null> | null } | null };

export type CreateArmamentProductToCartMutationVariables = Exact<{
  args: Array<ArmamentToCart> | ArmamentToCart;
}>;


export type CreateArmamentProductToCartMutation = { __typename?: 'Mutation', addArmamentPcToProductToCart?: string | null };
