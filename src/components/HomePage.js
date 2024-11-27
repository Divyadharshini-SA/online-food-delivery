import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Custom styles

const Home = () => {
  const backgroundImageUrl = '/image/restaurant11.jpg'; // Change to your image path

  const homeStyle = {
    display: 'flex', /* Flexbox for layout */
    flexDirection: 'column', /* Stack elements vertically */
    justifyContent: 'center', /* Center content vertically */
    alignItems: 'center', /* Center content horizontally */
    height: '100vh', /* Full viewport height */
    backgroundImage: `url(${backgroundImageUrl})`, /* Background image */
    backgroundSize: 'cover', /* Cover the entire container */
    backgroundPosition: 'center', /* Center the background image */
    color: 'white', /* White text color */
    textAlign: 'center', /* Center text */
  };

  return (
    <div style={homeStyle}>
      <h1 style={{ color: 'white' }}>Welcome to the Food Delivery App</h1>
      <p style={{ color: 'black' }}>Explore our wide range of restaurants and order your favorite food.</p>
      <Link to="/restaurants">
        <button className="explore-btn">Explore Restaurants</button>
      </Link>
    </div>
  );
};

export default Home;
