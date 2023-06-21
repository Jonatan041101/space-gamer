import { gql } from '@apollo/client';

const FRAGMENT_LIMIT_DETAIL_PRODUCT = gql`
  fragment ProductsLimit on Products {
    id
    name
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
      id
      name
      email
      password
      address
      img
      phone
      surName
      cart {
        id
      }
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
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}
  query GetLoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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
  }
`;

export const MERCADO_PAGO = gql`
  ${FRAGMENT_LIMIT_DETAIL_PRODUCT}

  mutation PostMercadoPago($userId: String!, $cartId: String!) {
    mercadoPago(cartId: $cartId, userId: $userId) {
      status
      id
      date
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
