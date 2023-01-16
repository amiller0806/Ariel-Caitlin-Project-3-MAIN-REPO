// import the gql tagged template function
const {
    gql
} = require("apollo-server-express");
const {
    productData
} = require('../seeds/seeds.json')
const {
    _id,
    title,
    description
} = {
    productData
};

// create our typeDefs
const typeDefs = gql `
  
  

  type Product {
    _id: ID!
    title: String
    description: String
    main_image: String
    price: String
    rating: Float
    ratings_total: Int
    brand: String
    link: String
    category: String
  }

  type User {

    _id: ID!
    username: String
    email: String
    favoriteProducts: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    products(username: String): [Product]
    productByCategory(category: String!): [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProduct(productData: ID!): User
    removeProduct(productId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
