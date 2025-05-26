import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { added, user_id } from "./Context";
import { AddtoCart } from "./AddtoCart";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [selected_option, setSelected] = useState("Default");
  const [addedItems, setAddedItems] = useState({});
  const { User_id } = useContext(user_id);
  const { Added, setadded } = useContext(added);
  const navigate = useNavigate();

  const display = async () => {
    try {
      const response = await fetch("https://go-pizza-gamma.vercel.app/pi/get");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    display();
  }, []);

  const low_high = async () => {
    try {
      const response = await fetch("https://go-pizza-gamma.vercel.app/pi/low-high");
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setPizzas(data);
      } else {
        console.log("error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const high_low = async () => {
    try {
      const response = await fetch("https://go-pizza-gamma.vercel.app/pi/high-low");
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setPizzas(data);
      } else {
        console.log("error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sorting = (e) => {
    const selected = e.target.value;
    setSelected(selected);
    if (selected === "Default") {
      console.log(selected);
      display();
    } else if (selected === "Low-high") {
      console.log(selected);
      low_high();
    } else if (selected === "High-low") {
      console.log(selected);
      high_low();
    }
  };

  const handleAddToCart = (id) => {
    if (User_id === "") {
      alert("Please sign in to continue.");
      navigate("/login");
    } else {
      AddtoCart(User_id, id, navigate);
      setadded(true);
      setAddedItems((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <>
      <div>
        <select
          className="bg-white border border-red-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={sorting}
          value={selected_option}
        >
          <option value="Default">Default</option>
          <option value="Low-high">Price low-high</option>
          <option value="High-low">Price high-low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 min-h-screen bg-red-500">
        {pizzas.map((pizza) => (
          <div key={pizza._id}>
            <Card
              name={pizza.name}
              description={pizza.description}
              img={pizza.img}
              price={pizza.price}
              category={pizza.category}
              id={pizza._id}
            >
              <button
                onClick={() => handleAddToCart(pizza._id)}
                className="bg-amber-950 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              >
                {addedItems[pizza._id] ? <>Added</> : <>Add</>}
              </button>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
