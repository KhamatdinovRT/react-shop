import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './Navbar.css';
import cart from '../shopping-cart.svg';

const Navbar = () => (
      <nav className={styles.navbar}>
          <div className={styles.logo}><Link to="/">SHOP</Link></div>
          <div className={styles.cart}>
              <a href=""><img src={cart}/></a>
            </div>
      </nav>
)

export default Navbar;