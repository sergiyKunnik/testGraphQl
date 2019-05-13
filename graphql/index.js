const mergeGraphqlSchemas = require('merge-graphql-schemas')
const graphqlTools = require('graphql-tools')
const requireAll = require('require-all');
let typeDefs = [];
let resolvers = [];

requireAll({
  dirname     :  __dirname + '/',
  filter      :  /(.+type)\.js$/,
  recursive   : true,
  resolve     : function (type) {
    typeDefs.push(type);
  },
});
typeDefs = mergeGraphqlSchemas.mergeTypes(typeDefs, { all: true });

requireAll({
  dirname     :  __dirname + '/',
  filter      :  /(.+resolver)\.js$/,
  recursive   : true,
  resolve     : function (resolve) {
    resolvers.push(resolve);
  },
}), { all: true };
resolvers = mergeGraphqlSchemas.mergeResolvers(resolvers, { all: true });

const schema = graphqlTools.makeExecutableSchema({
  typeDefs,
  resolvers
});
module.exports = schema;