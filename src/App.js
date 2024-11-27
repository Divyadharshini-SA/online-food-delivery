import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Cart from './components/Cart';
import OrderCheckout from './components/OrderCheckout';
import OrderHistory from './components/OrderHistory';
import LoginSignUp from './components/LoginSignUp';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic (if needed)
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<OrderCheckout />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path='/login' element={<LoginSignUp setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Header from './components/Header';
// import RestaurantList from './components/RestaurantList';
// import RestaurantDetail from './components/RestaurantDetail';
// import Cart from './components/Cart';
// import OrderCheckout from './components/OrderCheckout';
// import OrderHistory from './components/OrderHistory';
// import './App.css';
// import LoginSignUp from './components/LoginSignUp';
// import Footer from './components/Footer';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     // Additional logout logic (if needed)
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/restaurantList" element={<RestaurantList />} />
//           <Route path="/restaurant/:id" element={<RestaurantDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<OrderCheckout />} />
//           <Route path="/history" element={<OrderHistory />} />
//           <Route path='/login' element={<LoginSignUp setIsLoggedIn={setIsLoggedIn} />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
 



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Header from './components/Header';
// import RestaurantList from './components/RestaurantList';
// import RestaurantDetail from './components/RestaurantDetail';
// import Cart from './components/Cart';
// import OrderCheckout from './components/OrderCheckout';
// import OrderHistory from './components/OrderHistory';
// import './App.css';
// import LoginSignUp from './components/LoginSignUp';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage/>}/>
//           <Route path="/restaurantList" element={<RestaurantList />} />
//           <Route path="/restaurant/:id" element={<RestaurantDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<OrderCheckout />} />
//           <Route path="/history" element={<OrderHistory />} />
//           <Route path='/login' element={<LoginSignUp/>}/>
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;








