import React from 'react';
import './style/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <p>BreakFast</p>
      </div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>Delivery</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <div className="buttons">
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
