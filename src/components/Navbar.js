import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.css';
import cart from '../shopping-cart.svg';
import menu from '../menu.svg';

const Navbar = ({hideMenu, onToggleSideNav}) => (
      <nav className={styles.navbar}>
            <div hidden={!hideMenu}><img role="presentation" onClick={onToggleSideNav} src={menu}/></div>
            <div className={styles.logo}><Link to="/">SHOP</Link></div>
            <div className={styles.cart}>
                  <a href=""><img role="presentation" src={cart}/></a>
            </div>
      </nav>
)

export default Navbar;