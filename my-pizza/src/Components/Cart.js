import React, { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { isLogin } from "./Context";
import { Link } from "react-router-dom";
import { user_id } from "./Context";
import { delete_cart } from "./AddtoCart";

function Cart() {
  const { Islogin } = useContext(isLogin);
  const { User_id } = useContext(user_id);
  const [pizza_array, setpizza_array] = useState([]);
  const [display_cart, setcart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  const cart_items = async () => {
    try {
      const response = await fetch(
        `https://go-pizza-gamma.vercel.app/cart/getitems?user=${User_id}`
      );
      const items = await response.json();
      console.log(response.status);
      console.log(items);

      if (response.status === 200) {
        alert("Your cart is empty");
      } else if (response.status === 201) {
        const pizzas = items.map((item) => item.pizza);
        setpizza_array(pizzas);

        const initialQuantities = {};
        pizzas.forEach((pi) => {
          initialQuantities[pi] = 1;
        });
        setQuantities(initialQuantities);
      } else if (response.status === 404) {
        alert("Dude, still error");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const get_pizza = async () => {
    try {
      // Fetch all pizza details
      const promises = pizza_array.map(async (pi) => {
        const response = await fetch(`https://go-pizza-gamma.vercel.app/pi/${pi}`);
        const data = await response.json();
        return { data, ok: response.ok };
      });

      const results = await Promise.all(promises);
      setcart(results);

      results.forEach((result) => {
        if (result.ok) {
          console.log(result.data);
        } else {
          console.log("Error detected in fetching", result.data);
        }
      });

      const totalPrice = results.reduce(
        (sum, result) => sum + result.data.price * quantities[result.data._id],
        0
      );
      setTotal(totalPrice);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    cart_items();
  }, [User_id]);

  useEffect(() => {
    if (pizza_array.length > 0) {
      get_pizza();
    }
  }, [pizza_array, quantities]);

  const handleDelete = async (userId, pizzaId) => {
    try {
      await delete_cart(userId, pizzaId);

      cart_items();
      get_pizza();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const quantity_increment = (pi) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [pi]: prevQuantities[pi] + 1,
      };

      const updatedTotal = Object.keys(newQuantities).reduce(
        (sum, id) =>
          sum +
          display_cart.find((item) => item.data._id === id).data.price *
            newQuantities[id],
        0
      );
      setTotal(updatedTotal);
      return newQuantities;
    });
  };

  const quantity_decrement = (pi) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [pi]: prevQuantities[pi] > 1 ? prevQuantities[pi] - 1 : 1,
      };

      const updatedTotal = Object.keys(newQuantities).reduce(
        (sum, id) =>
          sum +
          display_cart.find((item) => item.data._id === id).data.price *
            newQuantities[id],
        0
      );
      setTotal(updatedTotal);
      return newQuantities;
    });
  };

  const placeOrder = () => {
    alert("Order placed successfully");
  };

  return (
    <div>
      {Islogin ? (
        <div>
          {display_cart.map((pi, index) => (
            <CartCard key={index} src={pi.data.img} name={pi.data.name}>
              <p className="text-xl mt-2">
                Price: Rs.{pi.data.price * quantities[pi.data._id]}
              </p>
              <div className="flex items-center mt-4 space-x-2">
                <button
                  onClick={() => quantity_decrement(pi.data._id)}
                  className="bg-red-500 text-white font-bold py-1 px-3 rounded-l-lg border-r-2 text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  -
                </button>
                <span className="text-lg font-semibold px-3">
                  {quantities[pi.data._id]}
                </span>
                <button
                  onClick={() => quantity_increment(pi.data._id)}
                  className="bg-red-500 text-white font-bold py-1 px-3 rounded-r-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleDelete(User_id, pi.data._id)}
                className="bg-red-500 w-24 text-center text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mt-4"
              >
                Delete
              </button>
            </CartCard>
          ))}
          <div className="mt-4 p-4 bg-white">
            <h2>Total: Rs. {total}</h2>
            <button
              onClick={placeOrder}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <button className="text-3xl font-bold mb-4 bg-red-600 text-white p-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            <Link to="/login">You need to login first</Link>
          </button>
          <img
            src="https://cdn0.iconfinder.com/data/icons/pizza-slice-emoji-cartoons/358/pizza-slice-emoji-cartoon-smiley-046-1024.png"
            alt="Pizza Emoji"
            className="w-32 h-32"
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
