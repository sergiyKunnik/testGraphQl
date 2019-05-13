module.exports = `
  type Category {
    _id: ID!
    name: String!
  }

  type Query {
    category(_id: ID!): Category
    categories: [Category]
  }

  type Mutation {
    addCategory(name: String!): Category
    editCategory(_id: ID!, name: String): Category
    deleteCategory(_id: ID!): Category
  }

`;
