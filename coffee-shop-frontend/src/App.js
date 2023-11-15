import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const coffee = { name: 'Coffee' }; // You can extend this object with more details

  const addToCart = async () => {
    try {
      const response = await axios.post('http://localhost:5000/add-to-cart', { coffee });
      console.log('Response:', response);
      setShoppingCart(response.data.shoppingCart);
      setCoffeeCount(coffeeCount + 1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="App">
      <h1>Coffee Shop</h1>
      <button onClick={addToCart}>Add to Cart</button>
      <p>Number of Coffees in Cart: {coffeeCount}</p>
      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
