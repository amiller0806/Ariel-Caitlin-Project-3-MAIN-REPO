import {
    gql
} from "@apollo/client";

export const PRODUCT_BY_CATEGORY = gql `
  query productByCategory($category: String!) {
    productByCategory(category: $category) {
      _id
      title
      description
      main_image
      price
      rating
      ratings_total
      brand
      link
      category
    }
  }
`;

export const QUERY_ME = gql `
  query me {
    me {
      _id
      username
      favoriteProducts {
        _id
      }
    }
  }
`;