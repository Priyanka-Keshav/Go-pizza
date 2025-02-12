require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const connectDB = require("./Config/GoPizza");
const cors = require("cors");

// Connect to Database
connectDB().then(() => {
  console.log("Database connected successfully");
  
  // Middleware
 app.use(express.json());
  app.use(
    cors({
      origin: ["http://localhost:3000", "https://go-pizza.netlify.app"],
      credentials: true,
    })
  );

  // Routes
  const userRouter = require("./Router/UserRouter");
  const pizzaRouter = require("./Router/PizzaRouter");
  const cartRouter = require("./Router/CartRouter");

  app.use("/user", userRouter);
  app.use("/pi", pizzaRouter); 
  app.use("/cart", cartRouter);

  // Start Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Database connection failed:", err);
  process.exit(1);
});
