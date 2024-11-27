import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
