let products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption:
      "Crafted from 100% organic 280gsm combed cotton. Features a relaxed drop-shoulder silhouette, durable rib collar, and pre-shrunk finish for everyday comfort.",
    image: "images/tshirt.png",
  },
  {
    id: 2,
    name: "Wool Blend Coat",
    price: 199.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption:
      "Single-breasted wool-blend overcoat engineered with structured shoulders, notch lapels, and deep side welt pockets.",
    image: "images/coat.png",
  },
  {
    id: 3,
    name: "French Linen Shirt",
    price: 69.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption:
      "Lightweight, breathable French flax linen shirt styled with a refined collar, curved hem, and mother-of-pearl buttons.",
    image: "images/shirt.png",
  },
  {
    id: 4,
    name: "Merino Wool Sweater",
    price: 89.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption:
      "Ultra-soft 100% extrafine Merino wool sweater. Micro-ribbed hem and cuffs provide structure while maintaining a plush drape.",
    image: "images/sweater.png",
  },

  {
    id: 5,
    name: "Pleated Trousers",
    price: 79.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption:
      "Double-pleated wide leg trousers tailored in a fluid twill weave with side adjusters and hidden closure.",
    image: "images/trousers.png",
  },
  {
    id: 6,
    name: "Vintage Washed Hoodie",
    price: 59.99,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"],
    desciption:
      "Heavy French terry fleece hoodie treated with a custom wash process for an authentic worn-in texture.",
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

  const imgWarpper = document.createElement("div");
  imgWarpper.className = "img-warpper";

  const img = document.createElement("img");
  img.src = selectedProduct[0].image;
  img.alt = selectedProduct[0].name;
  img.className = "detail-img";
  imgWarpper.appendChild(img);

  const detailInfo = document.createElement("div");
  detailInfo.className = "detail-info";

  const productName = document.createElement("h1");
  productName.className = "detail-title";
  productName.textContent = selectedProduct[0].name;

  const price = document.createElement("p");
  price.className = "detail-price";
  price.textContent = "$" + selectedProduct[0].price;

  const description = document.createElement("p");
  description.className = "detail-description";
  description.textContent = selectedProduct[0].desciption;

  const colorGroup = document.createElement("div");
  colorGroup.className = "option-group";

  const colorLabel = document.createElement("label");
  colorLabel.className = "option-label";
  colorLabel.textContent = "Select Color:";

  const colorContainer = document.createElement("div");
  colorContainer.className = "option-buttons";

  let chosenColor = selectedProduct[0].colors[0];

  selectedProduct[0].colors.forEach((color, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${index === 0 ? "active" : ""}`;
    btn.textContent = color;
    btn.addEventListener("click", () => {
      colorContainer.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("active");
        chosenColor = color;
      });
      btn.classList.add("active");
    });
    colorContainer.appendChild(btn);
  });

  colorGroup.appendChild(colorLabel);
  colorGroup.appendChild(colorContainer);

  const sizeGroup = document.createElement("div");
  sizeGroup.className = "option-group";

  const sizeLabel = document.createElement("label");
  sizeLabel.className = "option-label";
  sizeLabel.textContent = "Select Size: ";

  const sizeContainer = document.createElement("div");
  sizeContainer.className = "option-buttons";

  let choosenSize = selectedProduct[0].sizes[0];

  selectedProduct[0].sizes.forEach((size, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${index === 0 ? "active" : ""}`;
    btn.textContent = size;
    btn.addEventListener("click", () => {
      sizeContainer.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("active");
        choosenSize = size;
      });
      btn.classList.add("active");
    });
    sizeContainer.appendChild(btn);
  });
  sizeGroup.appendChild(sizeLabel);
  sizeGroup.appendChild(sizeContainer);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.className = "btn btn-primary full-width";
  addToCartBtn.textContent = "Add to Cart";

  addToCartBtn.addEventListener("click", (e) => {
    counter++;
    cartCounter.textContent = "Cart " + "(" + counter + ")";
  });

  detailInfo.appendChild(productName);
  detailInfo.appendChild(price);
  detailInfo.appendChild(description);
  detailInfo.appendChild(colorGroup);
  detailInfo.appendChild(sizeGroup);
  detailInfo.appendChild(addToCartBtn);

  productContainer.appendChild(imgWarpper);
  productContainer.appendChild(detailInfo);
});
