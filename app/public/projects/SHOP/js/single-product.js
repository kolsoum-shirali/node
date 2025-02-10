// localStorage.clear();
var productInfo = [];
function showSingle(product) {
  let res = [];
  let imgProduct = product.previousElementSibling;
  Array.from(product.children).forEach((element) => {
    res.push(element.textContent);
  });
  res.push(imgProduct.src);
  localStorage.setItem("product", JSON.stringify(res));
}
let saveProduct = localStorage.getItem("product");
productInfo = JSON.parse(saveProduct);
let titleImage = document.querySelector(".img-title");
let imgP = document.querySelector(".product-img");
let priceP = document.querySelector(".price");
titleImage.textContent = productInfo[0];
priceP.textContent = productInfo[1];
imgP.src = productInfo[2];

// basket
var cart = [];
var ProductOrd = [];

function creatProductInfo(name, price) {
  this.nameProduct = name;
  this.priceProduct = price;
}

function addBasket(btn) {
  let parentTag = btn.parentElement;
  let valProduct = [];
  Array.from(parentTag.children).forEach((item) => {
    if (item.classList.contains("info")) {
      valProduct.push(item.textContent);
    }
  });
  ProductOrd.push(new creatProductInfo(valProduct[0], valProduct[1]));
  localStorage.setItem("dressOrders", JSON.stringify(ProductOrd));
}
if (localStorage.getItem("dressOrders")) {
  let getProducts = localStorage.getItem("dressOrders");
  cart = JSON.parse(getProducts);
} else {
  cart=[]
}
console.log(cart, "ProductOrd2");
