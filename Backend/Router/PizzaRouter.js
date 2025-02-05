const {
  insertPizzaData,
  get_pizza,
  get_veg,
  get_nonveg,
  sort_low,
  sort_high,
  sort_low_veg,
  sort_high_veg,
  sort_high_non_veg,
  sort_low_non_veg,
  get_pizza_id,
} = require("../Functions/PizzaFunc");
const express = require("express");
const pizzarouter = express.Router();
pizzarouter.post("/pizza", insertPizzaData);
pizzarouter.get("/get", get_pizza);
pizzarouter.get("/veg", get_veg);
pizzarouter.get("/non-veg", get_nonveg);
pizzarouter.get("/low-high", sort_low);
pizzarouter.get("/high-low", sort_high);
pizzarouter.get("/veg-low", sort_low_veg);
pizzarouter.get("/veg-high", sort_high_veg);
pizzarouter.get("/non-veg-high", sort_high_non_veg);
pizzarouter.get("/non-veg-low", sort_low_non_veg);
pizzarouter.get("/:id", get_pizza_id);

module.exports = pizzarouter;
