import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom styles

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <h1>Food Delivery App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/history">Order History</Link>
        <div className="auth-button">
          {isLoggedIn ? (
            <button onClick={onLogout} className="auth-btn">Logout</button>
          ) : (
            <Link to="/login">
              <button className="auth-btn">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';

// import './Header.css'; // Custom styles

// const Header = ({ isLoggedIn, onLogout }) => {
//   return (
//     <header className="header">
//       <h1>Food Delivery App</h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/restaurants">Restaurants</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/history">Order History</Link>
//         <div className="auth-button">
//           {isLoggedIn ? (
//             <button onClick={onLogout} className="auth-btn">Logout</button>
//           ) : (
//             <Link to="/login">
//               <button className="auth-btn">Login</button>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';

// import './Header.css'; // Assuming custom styles

// const Header = ({ isLoggedIn, onLogout }) =>  {
//   return (
//     <header className="header">
//       <h1>Food Delivery App</h1>
//       <nav>
//         <Link to="/">Restaurants</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/history">Order History</Link>
//         <div className="auth-button">
//           {isLoggedIn ? (
//             <button onClick={onLogout}>Logout</button>
//           ) : (
//             <Link to="/login">
//               <button>Login</button>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
