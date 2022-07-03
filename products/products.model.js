const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 779.99,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 699.0,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((x) => {
    return x.price >= min && x.price <= max;
  });
}

function getProductByID(id) {
  return products.find((x) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  console.log(products);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductByID(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
  }
  matchedProduct.reviews.push(newProductReview);

  return newProductReview;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
  addNewProduct,
  addNewProductReview,
};
