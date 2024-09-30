import React from 'react';
import './Header.css';

const Header = ({ changeView }) => {
  return (
    <header className="header">
      <h1>Online Food Delivery</h1>
      <nav>
        <ul>
          <button className="login-button" onClick={() => changeView('login')}>Login</button>
          <li onClick={() => changeView('home')}>Home</li>
          <li onClick={() => changeView('restaurants')}>Restaurants</li>
          <li onClick={() => changeView('order')}>Order</li>
          <li onClick={() => changeView('reviews')}>Reviews</li>
          <li onClick={() => changeView('help')}>Help</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;