import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.css';
import cart from '../shopping-cart.svg';

const Navbar = ({hideMenu}) => (
      <nav className={styles.navbar}>
            <div hidden={!hideMenu}>menu</div>
            <div className={styles.logo}><Link to="/">SHOP</Link></div>
            <div className={styles.cart}>
                  <a href=""><img role="presentation" src={cart}/></a>
            </div>
      </nav>
)

export default Navbar;