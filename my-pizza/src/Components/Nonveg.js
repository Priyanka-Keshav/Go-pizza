import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useContext } from "react";
import { user_id } from "./Context";
import { useNavigate } from "react-router-dom";
import { AddtoCart } from "./AddtoCart";
import { added } from "./Context";
function NonVeg() {
  const [nonveg, setnonVeg] = useState([]);
  const [selected_option, setSelected] = useState("Default");
  const { User_id } = useContext(user_id);
  const { Added, setadded } = useContext(added);
  const [addedItems, setAddedItems] = useState({});
  const navigate = useNavigate();
  const get_non_veg = async () => {
    const data = await fetch("https://go-pizza-gamma.vercel.app/pi/non-veg");
    const response = await data.json();
    setnonVeg(response);
    console.log(response);
  };
  const get_non_veg_low = async () => {
    const data = await fetch("https://go-pizza-gamma.vercel.app/pi/non-veg-low");
    const response = await data.json();
    setnonVeg(response);
    console.log(response);
  };
  const get_non_veg_high = async () => {
    const data = await fetch("https://go-pizza-gamma.vercel.app/pi/non-veg-high");
    const response = await data.json();
    setnonVeg(response);
    console.log(response);
  };
  useEffect(() => {
    get_non_veg();
  }, []);
  const sorting = (e) => {
    const selected = e.target.value;
    setSelected(selected);
    if (selected === "Default") {
      console.log(selected);
      get_non_veg();
    } else if (selected === "Low-high") {
      console.log(selected);
      get_non_veg_low();
    } else if (selected === "High-low") {
      console.log(selected);
      get_non_veg_high();
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
        {nonveg.map((pizza, index) => (
          <>
            <div key={index}>
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
          </>
        ))}
      </div>
    </>
  );
}

export default NonVeg;
