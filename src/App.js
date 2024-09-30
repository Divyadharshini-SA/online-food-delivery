import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './component/HomePage';
import RestaurantList from './component/RestaurantList';
import OrderForm from './component/OrderForm';
import UserAuth from './component/UserAuth';
import Reviews from './component/Reviews';
import Help from './component/Help';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeView = (newView) => {
    setCurrentView(newView);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'restaurants':
        return <RestaurantList />;
      case 'order':
        return <OrderForm />;
      case 'login':
        return <UserAuth onLogin={handleLogin} isLoggedIn={isLoggedIn} />;
      case 'reviews':
        return <Reviews />;
      case 'help':
        return <Help />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header 
        changeView={changeView} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
      />
      {renderView()}
      <Footer />
    </div>
  );
};

export default App;







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
