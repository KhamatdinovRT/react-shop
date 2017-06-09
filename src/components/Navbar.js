import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import cart from '../shopping-cart.svg';

const Navbar = () => (
      <nav className="navbar">
          <div className="logo">SHOP</div>
          <div className="cart">
              <a href=""><img src={cart}/></a>
            </div>
      </nav>
)

export default Navbar;