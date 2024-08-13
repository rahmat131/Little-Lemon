// src/pages/DishesPage.js
import React, { useState } from "react";
import Dish from "./Dish.js";

const DishesPage = () => {
  const [dishes] = useState([
    { id: 1, name: "Spaghetti", price: 12.99 },
    { id: 2, name: "Chicken Alfredo", price: 14.99 },
    { id: 3, name: "Caesar Salad", price: 8.99 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart([...cart, dish]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((dish) => dish.id !== id));
  };

  return (
    <div>
      <h1>Dishes</h1>
      <div>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            dish={dish}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={cart.some((cartDish) => cartDish.id === dish.id)}
          />
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DishesPage;
