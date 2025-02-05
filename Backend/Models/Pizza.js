const mongoose = require("mongoose");
const { Schema } = mongoose;
const PizzaSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});
const Pizza = mongoose.model("Pizza", PizzaSchema);
module.exports = Pizza;
