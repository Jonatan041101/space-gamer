import { gql } from '@apollo/client';
// export const GET_PRODUCTS = gql`
// query {
//  products {
//     name
//     image {
//       image
//     }
//    price
//    stock {
//      count
//    }
//    quotes {
//      name
//      priceCuote
//    }
//   }
// }
// `
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
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
