const path = require("path");
const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const app = express();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

//schema is a collection of types of objects for API

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, //types defined
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running our Graphql Server...");
});
