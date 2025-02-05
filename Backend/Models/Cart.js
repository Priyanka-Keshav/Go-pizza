const mongoose = require("mongoose");
const { Schema } = mongoose;
const CartSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      pizza: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pizza",
        required: true,
      },
      quantity: { type: Number, default: 1 },
    },
  ],
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
