const express = require("express");
const {
  addCart,
  get_cart,
  delete_item,
  increment,
  decrement,
} = require("../Functions/CartFunc");

const cart = express.Router();
cart.post("/addcart", addCart);
cart.get("/getitems", get_cart);
cart.delete("/deleteitem", delete_item);
cart.post("/increment", increment);
cart.post("/decrement", decrement);

module.exports = cart;
