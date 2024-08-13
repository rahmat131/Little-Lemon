// src/components/Dish.js
import React from "react";

const Dish = ({ dish, addToCart, removeFromCart, isInCart }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{dish.name}</h3>
      <p>Price: ${dish.price}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(dish.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(dish)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Dish;
