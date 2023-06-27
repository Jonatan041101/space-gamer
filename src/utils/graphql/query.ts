import { gql } from '@apollo/client';

const FRAGMENT_LIMIT_DETAIL_PRODUCT = gql`
  fragment ProductsLimit on Products {
    id
    name
    motherBoard
    image {
      image
    }
    price
    stock {
      count
    }
    quotes {
      name
      priceCuote
    }
    category {
      name
    }
  }
`;
const FRAGMENT_USER = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  fragment UserAll on User {
    id
    name
    surName
    email
    password
    address
    img
    phone
    order {
      date
      id
      status
      bill {
        id
        product {
          buy
          count
          product {
            ...ProductsLimit
            brand {
              name
            }
          }
        }
      }
    }
    cart {
      id
      products {
        count
        buy
        product {
          ...ProductsLimit
          brand {
            name
          }
        }
      }
    }
  }
`;
export const GET_COUNT_PRODUCT_HOME = gql`
  query GetCountProductsHome {
    countProducts {
      auricular
      gabinetes
      monitores
      pcs
    }
  }
`;
export const GET_PRODUCTS = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetProducts {
    products {
      ...ProductsLimit
    }
  }
`;
export const GET_PRODUCTS_NONE_GAMES = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetProductsNoneVideoGames($limit: Int! = 5, $skip: Int = 0) {
    productsNonVideogames(limit: $limit, skip: $skip) {
      ...ProductsLimit
    }
  }
`;
export const GET_BANNER = gql`
  query GetBanner {
    banner {
      id
      image
      link
    }
  }
`;
export const GET_CATEGORY = gql`
  query GetCategory {
    category {
      name
      id
      subCategory {
        id
        name
      }
    }
  }
`;
export const GET_BRAND = gql`
  query GetBrand {
    brand {
      image
      name
      id
    }
  }
`;
export const PRODUCT_DETAIL = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetProductDetail($name: String!) {
    getProduct(name: $name) {
      id
      name
      price
      isCombo
      brand {
        id
        name
      }
      product {
        ...ProductsLimit
      }
      post {
        date
        id
        name
        text
        rating
      }
      subCategory {
        name
      }
      category {
        id
        name
      }
      image {
        byOrder
        id
        image
      }
      description {
        id
        subTitle
        textInit
        title
        list {
          title
          li {
            id
            byOrder
            content
          }
        }
        pargraph {
          id
          byOrder
          content
          title
        }
      }
      stock {
        count
      }
      quotes {
        id
        name
        priceComplete
        priceCuote
      }
    }
  }
`;
export const GET_PRODUCT_FILTER = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetProductFilter($nameC: String, $nameS: String, $brand: String) {
    getProductFilter(nameC: $nameC, nameS: $nameS, brand: $brand) {
      ...ProductsLimit
      brand {
        name
      }
    }
  }
`;
export const PRODUCT_SEARCH = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetProductSearh($name: String!) {
    searchProducts(name: $name) {
      ...ProductsLimit
      brand {
        name
      }
    }
  }
`;
export const CREATE_USER = gql`
  ${FRAGMENT_USER}
  mutation PostUser(
    $name: String!
    $surName: String!
    $email: String!
    $password: String!
    $address: String!
    $phone: String!
    $img: String
  ) {
    createUser(
      name: $name
      surName: $surName
      email: $email
      password: $password
      address: $address
      phone: $phone
      img: $img
    ) {
      ...UserAll
    }
  }
`;
export const ADD_PRODUCT_CART = gql`
  mutation AddProductToCart(
    $cartId: String!
    $productId: String!
    $count: Int!
  ) {
    addProductCart(cartId: $cartId, productId: $productId, count: $count)
  }
`;
export const UPDATE_PRODUCT_CART = gql`
  mutation UpdateProductToCart(
    $cartId: String!
    $productId: String!
    $count: Int!
  ) {
    updateProductCount(cartId: $cartId, productId: $productId, count: $count)
  }
`;

export const GET_LOGIN_USER = gql`
  ${FRAGMENT_USER}
  query GetLoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      ...UserAll
    }
  }
`;
export const UPDATE_USER = gql`
  ${FRAGMENT_USER}
  mutation UpdateUser(
    $name: String!
    $surName: String!
    $email: String!
    $password: String!
    $address: String!
    $phone: String!
  ) {
    updateUser(
      name: $name
      surName: $surName
      email: $email
      password: $password
      address: $address
      phone: $phone
    ) {
      ...UserAll
    }
  }
`;
export const MERCADO_PAGO = gql`
  mutation PostMercadoPago($userId: String!, $cartId: String!) {
    mercadoPago(cartId: $cartId, userId: $userId) {
      preferenceId
    }
  }
`;
export const DELETE_PRODUCT_TO_CART = gql`
  mutation DeleteProductCart($cartId: String!, $productId: String!) {
    deleteProducCart(cartId: $cartId, productId: $productId)
  }
`;
export const GET_CATEGORY_SEARCH = gql`
  query GetSearchCategory($name: String!) {
    searchCategory(name: $name) {
      name
      subCategory {
        name
      }
    }
  }
`;
export const CREATE_POST = gql`
  mutation CreatePost(
    $productId: String!
    $name: String!
    $text: String!
    $rating: Int!
  ) {
    addPostToProduct(
      productId: $productId
      name: $name
      text: $text
      rating: $rating
    ) {
      name
      date
      id
      rating
      text
    }
  }
`;
export const GET_PRODUCT_CATEGORY_SUB = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetProductCategorySub($name: String!, $motherBoard: String) {
    getCategoryOrSub(name: $name, motherBoard: $motherBoard) {
      name
      id
      products {
        ...ProductsLimit
        subCategory {
          name
        }
        brand {
          name
        }
      }
    }
  }
`;
export const ARMAMENT_PC = gql`
  mutation createArmamentProductToCart($args: [ArmamentToCart!]!) {
    addArmamentPcToProductToCart(args: $args)
  }
`;
