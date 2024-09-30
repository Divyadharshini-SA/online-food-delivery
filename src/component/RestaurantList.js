import React from 'react';
import './RestaurantList.css';

const RestaurantList = () => {
  const restaurants = [
    { id: 1, name: 'Pizza Place', image: '/image/pizza.jpg' },
    { id: 2, name: 'Burger Joint', image: '/image/burgers.jpg' },
    { id: 3, name: 'Sushi Spot', image: '/image/sishi.jpg' },
  ];

  return (
    <div className="restaurant-list">
      <h2>Available Restaurants</h2>
      <div className="restaurants">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

