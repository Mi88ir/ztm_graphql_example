const orders = [
  {
    date: "2005-05-05",
    subtotal: 1000.0,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 500.0,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = { getAllOrders };
