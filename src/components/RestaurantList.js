import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants] = useState([
    { id: 1, name: 'Pizza Paradise', cuisine: 'Italian', rating: 4.5  ,image: '/image/Pizza Paradise.jpg'},
    { id: 2, name: 'Sushi Delight', cuisine: 'Japanese', rating: 4.7,image:  '/image/Sushi Delight.jpg'},
    { id: 3, name: 'Burger Hub', cuisine: 'American', rating: 4.2,image: '/image/Burger Hub.jpg'},
    { id: 4, name: 'Taco Fiesta', cuisine: 'Mexican', rating: 4.6 , image: '/image/Taco Fiesta.jpg' },
  ]);

  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
