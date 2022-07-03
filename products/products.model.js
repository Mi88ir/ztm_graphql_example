const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 779.99,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 699.0,
  },
];

function getAllProducts() {
  return products;
}

module.exports = { getAllProducts };
