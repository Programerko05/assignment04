let products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption: "",
    image: "images/tshirt.png",
  },
  {
    id: 2,
    name: "Wool Blend Coat",
    price: 199.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption: "",
    image: "images/coat.png",
  },
  {
    id: 3,
    name: "French Linen Shirt",
    price: 69.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption: "",
    image: "images/shirt.png",
  },
  {
    id: 4,
    name: "Merino Wool Sweater",
    price: 89.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption: "",
    image: "images/sweater.png",
  },

  {
    id: 5,
    name: "Pleated Trousers",
    price: 79.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption: "",
    image: "images/trousers.png",
  },
  {
    id: 6,
    name: "Vintage Washed Hoodie",
    price: 59.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption: "",
    image: "images/hoodie.png",
  },
];

let counter = 0;
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  const cartCounter = document.getElementById("cart-counter");

  const url = new URLSearchParams(window.location.search);
  const productId = parseInt(url.get("id"), 10);

  const selectedProduct = products.filter(
    (product) => product.id === productId,
  );
});
