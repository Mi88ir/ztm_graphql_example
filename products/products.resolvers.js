const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productsByID: (_, args) => {
      return productsModel.getProductByID(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      productsModel.addNewProduct(args.id, args.description, args.price);
    },
  },
};
