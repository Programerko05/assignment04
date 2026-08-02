// Niz sa proizvodima
let products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    descrption:
      "Crafted from 100% organic 280gsm combed cotton. Features a relaxed drop-shoulder silhouette, durable rib collar, and pre-shrunk finish for everyday comfort.",
    image: "images/tshirt.png",
  },
  {
    id: 2,
    name: "Wool Blend Coat",
    price: 199.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    description:
      "Single-breasted wool-blend overcoat engineered with structured shoulders, notch lapels, and deep side welt pockets.",
    image: "images/coat.png",
  },
  {
    id: 3,
    name: "French Linen Shirt",
    price: 69.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    description:
      "Lightweight, breathable French flax linen shirt styled with a refined collar, curved hem, and mother-of-pearl buttons.",
    image: "images/shirt.png",
  },
  {
    id: 4,
    name: "Merino Wool Sweater",
    price: 89.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    description:
      "Ultra-soft 100% extrafine Merino wool sweater. Micro-ribbed hem and cuffs provide structure while maintaining a plush drape.",
    image: "images/sweater.png",
  },

  {
    id: 5,
    name: "Pleated Trousers",
    price: 79.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    description:
      "Double-pleated wide leg trousers tailored in a fluid twill weave with side adjusters and hidden closure.",
    image: "images/trousers.png",
  },
  {
    id: 6,
    name: "Vintage Washed Hoodie",
    price: 59.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    description:
      "Heavy French terry fleece hoodie treated with a custom wash process for an authentic worn-in texture.",
    image: "images/hoodie.png",
  },
];

// Globalni brojac za broj proizvoda u korpi
let counter = 0;

// Cekamo da se DOM ucita
document.addEventListener("DOMContentLoaded", () => {
  // Selektovanje productContainer-a i cartCounter
  const productContainer = document.getElementById("product-container");
  const cartCounter = document.getElementById("cart-counter");

  // Prolazimo kroz niz proizvoda
  products.forEach((product) => {
    // Kreiranje kartice
    const card = document.createElement("div");
    card.className = "product-card";

    // Kreiranje slike
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
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
    btn.textContent = "Add to Cart";

    // Pratimo klik na dugme add to cart
    btn.addEventListener("click", () => {
      counter++;
      cartCounter.textContent = "Cart " + "(" + counter + ")";
    });

    // Dodavanje elemenata u card
    card.appendChild(img);
    card.appendChild(productName);
    card.appendChild(price);
    card.appendChild(btn);

    // Dodavanje card elementa u productContainer
    productContainer.appendChild(card);
  });
});
