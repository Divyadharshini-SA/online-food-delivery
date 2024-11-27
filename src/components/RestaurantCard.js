import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Rating: ⭐ {restaurant.rating}</p>
        <Link to={`/restaurant/${restaurant.id}`} className="menu-link">View Menu</Link>
      </div>
    </div>
  );
};

export default RestaurantCard;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './RestaurantCard.css';

// const RestaurantCard = ({ restaurant }) => {
//   return (
//     <div className="restaurant-card">
//       <h3>{restaurant.name}</h3>
//       <p>Cuisine: {restaurant.cuisine}</p>
//       <p>Rating: {restaurant.rating}</p>
//       <Link to={`/restaurant/${restaurant.id}`} className="menu-link">View Menu</Link>
//     </div>
//   );
// };

// export default RestaurantCard;
