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
