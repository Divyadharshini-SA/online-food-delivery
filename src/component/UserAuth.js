import React from 'react';
import './UserAuth.css';

const UserAuth = ({ onLogin, isLoggedIn }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();  // Call the onLogin function passed as a prop
  };

  return (
    <div className="user-auth">
      <h2>User Authentication</h2>
      {isLoggedIn ? (
        <div>
          <p>You are already logged in!</p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" required />
          
          <label>Password:</label>
          <input type="password" required />
          
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default UserAuth;

