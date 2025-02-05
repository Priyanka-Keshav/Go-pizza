import React, { useState } from "react";

function CartCard({ src, name, children }) {
  return (
    <>
      <div className="flex flex-row mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
        {/* Product Image */}
        <img
          src={src}
          className="h-48 w-48 rounded-lg object-cover"
          alt={name}
        />

        {/* Product Details */}
        <div className="flex flex-col justify-between ml-8 flex-grow">
          <h1 className="text-3xl font-bold">{name}</h1>

          <div className="px-6 pt-4 pb-2"> {children} </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
