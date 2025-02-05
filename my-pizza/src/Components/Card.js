import React from "react";

function Card({ name, description, img, price, category, children, id }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={img}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-amber-900">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="text-gray-900 font-semibold text-lg">
            Price: ₹{price}
          </span>
          <span className="ml-4 text-gray-600 italic text-sm">
            Category: {category}
          </span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {category === "Vegetarian" ? (
          <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            Vegetarian
          </span>
        ) : (
          <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            Non-Vegetarian
          </span>
        )}
        <div className="px-6 pt-4 pb-2"> {children} </div>
      </div>
    </div>
  );
}

export default Card;
