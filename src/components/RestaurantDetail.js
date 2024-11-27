import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './RestaurantDetail.css';

const RestaurantDetail = ({ match }) => {
  const [menuItems] = useState([
    // { id: 1, name: 'Margherita Pizza', price: 8.99 },
    // { id: 2, name: 'Pepperoni Pizza', price: 9.99 },
    // { id: 3, name: 'Spaghetti Bolognese', price: 12.99 },
    {
      id: 1,
      name: 'Burger',
      description: 'Juicy beef burger with cheese',
      price: 8.99,
      image: '/images/burger.jpg'
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Margherita pizza with fresh basil',
      price: 12.99,
      image: '/images/pizza.jpg'
    },
    {
      id: 3,
      name: 'Pasta',
      description: 'Creamy Alfredo pasta',
      price: 10.49,
      image: '/images/pasta.jpg'
    },
    {
      id: 4,
      name: 'Sushi',
      description: 'Assorted sushi platter',
      price: 15.99,
      image: '/images/sushi.jpg'
    },
    {
      id: 5,
      name: 'Salad',
      description: 'Fresh garden salad',
      price: 7.99,
      image: '/images/salad.jpg'
    },
    {
      id: 6,
      name: 'Tacos',
      description: 'Spicy chicken tacos',
      price: 9.99,
      image: '/images/tacos.jpg'
    },
    {
      id: 7,
      name: 'Steak',
      description: 'Grilled ribeye steak',
      price: 22.99,
      image: '/images/steak.jpg'
    },
    {
      id: 8,
      name: 'Ice Cream',
      description: 'Vanilla ice cream with chocolate sauce',
      price: 4.99,
      image: '/images/icecream.jpg'
    },
    {
      id: 9,
      name: 'Fries',
      description: 'Crispy French fries',
      price: 3.99,
      image: '/images/fries.jpg'
    },
    {
      id: 10,
      name: 'Chicken Wings',
      description: 'Spicy buffalo wings',
      price: 10.99,
      image: '/images/chicken wings.jpg'
    },
    {
      id: 11,
      name: 'Ramen',
      description: 'Japanese noodle soup',
      price: 11.99,
      image: '/images/ramen.jpg'
    },
    {
      id: 12,
      name: 'Pancakes',
      description: 'Fluffy pancakes with maple syrup',
      price: 8.49,
      image: '/images/pancakes.jpg'
    }
  ]);

  // const addToCart = (item) => {
  //   let cart = JSON.parse(localStorage.getItem('cart')) || [];
  //   cart.push(item);
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // };
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} has been added to the cart!`); // Show alert message
  };

  return (
    <div className="restaurant-detail">
      <h2>Menu</h2>
      <div className="menu-list">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
