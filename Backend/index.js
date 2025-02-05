const express = require("express");
const app = express();
const connectDB = require("./Config/GoPizza");
const cors = require("cors");
connectDB();
const userrouter = require("./Router/UserRouter");
const pizzarouter = require("./Router/PizzaRouter");
const cart = require("./Router/CartRouter");
// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
// Routes
app.use("/user", userrouter);
app.use("/pi", pizzarouter);
app.use("/cart", cart);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
