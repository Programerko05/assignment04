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

  products.forEach((product) => {
    // Kreiranje kartice
    const card = document.createElement("div");
    card.className = "product-card";

    // Kreiranje slike
    const img = document.createElement("img");
    img.src = product.image;
    // img.alt = product.name;
    img.className = "product-img";

    // Ime proizvoda
    const productName = document.createElement("h3");
    productName.className = "product-name";
    const nameLink = document.createElement("a");
    nameLink.href = "product.html?id=" + product.id;
    nameLink.textContent = product.name;
    productName.appendChild(nameLink);

    // Cijena proizvoda
    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = "$" + product.price;

    // Dugme za dodavanje u korpu
    const btn = document.createElement("button");
    btn.className = "add-to-cart-btn";
    btn.href = "#";
    btn.textContent = "Add to Cart";

    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      counter++;
      cartCounter.textContent = "Cart " + counter;
    });

    card.appendChild(img);
    card.appendChild(productName);
    card.appendChild(price);
    card.appendChild(btn);

    productContainer.appendChild(card);
  });
});
