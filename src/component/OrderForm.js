import React from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted!');
  };

  return (
    <div className="order-form">
      <h2>Order Your Meal</h2>
      <form onSubmit={handleSubmit}>
        <label>Restaurant</label>
        <input name="restaurant" type="text" required />
        
        <label>Dish</label>
        <input name="dish" type="text" required />
        
        <label>Quantity</label>
        <input name="quantity" type="number" min="5S" required />
        
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
