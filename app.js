// VARIABLES

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector("close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//CART

let cart = [];

//GETTING THE PRODUCTS

class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

//DISPLAY PRODUCTS

class UI {}

//LOCAL STORAGE

class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //GET ALL PRODUCTS
  products.getProducts().then(data => console.log(data));
});
