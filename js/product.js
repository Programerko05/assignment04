// Niz proizvoda
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

// Globalni brojac za postavljanje broja proizvoda u korpi
let counter = 0;

//Cekamo da se DOM ucita
document.addEventListener("DOMContentLoaded", () => {
  // Selektovanje productContaienr i cartCounter
  const productContainer = document.getElementById("product-container");
  const cartCounter = document.getElementById("cart-counter");

  productContainer.innerHTML = "";

  // Uzimamo iz URL-a id proizvoda i pretvaramo ga u broj
  const url = new URLSearchParams(window.location.search);
  const productId = parseInt(url.get("id"), 10);

  // Trazimo rpozivod koji smo selektovali
  const selectedProduct = products.filter(
    (product) => product.id === productId,
  );

  // Kreiranje kontenjera za sliku
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "img-wrapper";

  // Kreiranje slike
  const img = document.createElement("img");
  img.src = selectedProduct[0].image;
  img.alt = selectedProduct[0].name;
  img.className = "detail-img";
  imgWrapper.appendChild(img);

  // Kreiranje diva detailInfo kontenjera
  const detailInfo = document.createElement("div");
  detailInfo.className = "detail-info";

  // Ime proizvoda
  const productName = document.createElement("h1");
  productName.className = "detail-title";
  productName.textContent = selectedProduct[0].name;

  // Cijena proizvoda
  const price = document.createElement("p");
  price.className = "detail-price";
  price.textContent = "$" + selectedProduct[0].price;

  // Opis proizvoda
  const description = document.createElement("p");
  description.className = "detail-description";
  description.textContent = selectedProduct[0].desciption;

  // Kreiranje kontenjera za izbor boje
  const colorGroup = document.createElement("div");
  colorGroup.className = "option-group";

  // Kreiranje label-a
  const colorLabel = document.createElement("label");
  colorLabel.className = "option-label";
  colorLabel.textContent = "Select Color:";

  // Color kontenjer
  const colorContainer = document.createElement("div");
  colorContainer.className = "option-buttons";

  // Izabrana boja
  let chosenColor = selectedProduct[0].colors[0];

  // Prolazimo kroz niz boja izabranog proizvoda
  selectedProduct[0].colors.forEach((color, index) => {
    // Kreiramo dugme za svaku boju
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${index === 0 ? "active" : ""}`;
    btn.textContent = color;
    // Osluskujemo klik na svako dugme i uklanjamo klasu active i dodajemo je samo na dugme koje smo treunto kliknuli
    btn.addEventListener("click", () => {
      colorContainer.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      chosenColor = color;
      btn.classList.add("active");
    });
    // Renderujemo dugme u kontenjeru za boje
    colorContainer.appendChild(btn);
  });

  // Dodavanje color label i colorContainer u colorGroup
  colorGroup.appendChild(colorLabel);
  colorGroup.appendChild(colorContainer);

  // Kreiranje kontenjera za izbor velicine
  const sizeGroup = document.createElement("div");
  sizeGroup.className = "option-group";

  // Kreiranje label-a
  const sizeLabel = document.createElement("label");
  sizeLabel.className = "option-label";
  sizeLabel.textContent = "Select Size: ";

  // Size kontenjer
  const sizeContainer = document.createElement("div");
  sizeContainer.className = "option-buttons";

  // Izabrana velicina
  let chosenSize = selectedProduct[0].sizes[0];

  // Prolazimo kroz niz velicina izabranog proizvoda
  selectedProduct[0].sizes.forEach((size, index) => {
    // Kreiramo dugme za svaku velicinu
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${index === 0 ? "active" : ""}`;
    btn.textContent = size;
    // Osluskujemo klik na svako dugme i uklanjamo klasu active i dodajemo je samo na dugme koje smo treunto kliknuli
    btn.addEventListener("click", () => {
      sizeContainer.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      chosenSize = size;
      btn.classList.add("active");
    });
    // Renderujemo dugme u kontenjeru za velicine
    sizeContainer.appendChild(btn);
  });
  // Dodavanje size label i SizeContainer u sizeGroup
  sizeGroup.appendChild(sizeLabel);
  sizeGroup.appendChild(sizeContainer);

  // Kreiranje dugmeta za dodavanje u korpu
  const addToCartBtn = document.createElement("button");
  addToCartBtn.className = "btn btn-primary full-width";
  addToCartBtn.textContent = "Add to Cart";

  // Osluskujemo klik na dugme i povecavamo broj prozivoda u korpi
  addToCartBtn.addEventListener("click", (e) => {
    counter++;
    cartCounter.textContent = "Cart " + "(" + counter + ")";
  });

  // Dodavanje svih inforamcija u detailInfo
  detailInfo.appendChild(productName);
  detailInfo.appendChild(price);
  detailInfo.appendChild(description);
  detailInfo.appendChild(colorGroup);
  detailInfo.appendChild(sizeGroup);
  detailInfo.appendChild(addToCartBtn);

  // Dodavanje slike i informacija o proizvodu u productContainer
  productContainer.appendChild(imgWrapper);
  productContainer.appendChild(detailInfo);
});
