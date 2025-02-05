const Cart = require("../Models/Cart");

const addCart = async (req, res) => {
  try {
    const { user, pizza } = req.query;

    // Find the cart for the user
    const cart = await Cart.findOne({ user });

    if (cart) {
      // Check if the pizza already exists in the cart
      const add_pizza = cart.items.findIndex(
        (item) => item.pizza.toString() === pizza
      );

      if (add_pizza > -1) {
        // If pizza already exists, return a conflict response
        return res.status(409).json({ message: "Pizza already in the cart" });
      } else {
        // Add the pizza to the cart
        cart.items.push({ pizza });
        await cart.save();
        return res.status(201).json({ message: "Item added successfully" });
      }
    } else {
      // If no cart exists, create a new one
      const newCart = new Cart({
        user,
        items: [{ pizza }],
      });
      await newCart.save();
      return res.status(201).json({ message: "Item added successfully" });
    }
  } catch (error) {
    // Handle server errors
    return res
      .status(500)
      .json({ message: "Failed to add item", error: error.message });
  }
};

const get_cart = async (req, res) => {
  try {
    const { user } = req.query;
    const already_user = await Cart.findOne({ user });
    if (already_user) {
      if (already_user.items.length === 0) {
        return res.status(200).json({ message: "Your cart is empty" });
      } else {
        return res.status(201).json(already_user.items);
      }
    } else {
      return res.status(400).json({ message: "Your cart is empty" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const delete_item = async (req, res) => {
  const { user, pizza } = req.query;
  try {
    const already_user = await Cart.findOne({ user });
    if (!already_user) {
      res.status(401).json({ message: "Cart not found" });
    }

    const item_index = already_user.items.findIndex(
      (item) => item.pizza.toString() === pizza
    );
    if (item_index > -1) {
      already_user.items.splice(item_index, 1);
      await already_user.save();
      return res.status(201).json({ message: "Item has been removed" });
    } else {
      return res.status(500).json({ message: "Item does not exist" });
    }
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
const increment = async (req, res) => {
  try {
    const { user, pizza } = req.body;
    const find_user = await Cart.findOne({ user });
    if (find_user) {
      const pizza_find = find_user.items.findIndex(
        (item) => item.pizza.toString() === pizza
      );
      if (pizza_find > -1) {
        find_user.items[pizza_find].quantity += 1;

        await find_user.save();
        return res.status(201).json({ message: pizza.quantity });
      } else {
        return res.status(401).json({ message: "no such pizzas exist" });
      }
    }
  } catch (err) {
    return res.status(401).json({ message: "error occured" });
  }
};

const decrement = async (req, res) => {
  try {
    const { user, pizza } = req.body;

    // Find the user's cart
    const find_user = await Cart.findOne({ user });
    if (!find_user) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the pizza in the cart
    const find_pizza = find_user.items.findIndex(
      (item) => item.pizza.toString() === pizza
    );

    if (find_pizza === -1) {
      return res.status(404).json({ message: "Pizza not found in cart" });
    }

    // Check the quantity and decrement or remove the item
    if (find_user.items[find_pizza].quantity === 1) {
      // Remove the item if quantity is 1
      find_user.items.splice(find_pizza, 1);
    } else {
      // Decrement the quantity
      find_user.items[find_pizza].quantity -= 1;
    }

    // Save the updated cart
    await find_user.save();

    return res.status(200).json({ message: "Decremented successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error occurred", error: err.message });
  }
};

module.exports = { addCart, get_cart, delete_item, increment, decrement };
