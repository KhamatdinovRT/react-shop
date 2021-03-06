import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/action/shopping-cart';
import styles from './Navbar.css';
import cart from '../shopping-cart.svg';
import menu from '../menu.svg';

const Navbar = ({ hideMenu, onToggleSideNav, cartQty }) => (
      <nav className={styles.navbar}>
            <div hidden={!hideMenu}><img role="presentation" onClick={onToggleSideNav} src={menu} /></div>
            <div className={styles.logo}><Link to="/">SHOP</Link></div>
            <Link to = "/cart">
                  <Badge
                        badgeContent={cartQty}
                        primary={true}>
                        <NotificationsIcon />
                  </Badge>
            </Link>
      </nav>
)

export default Navbar;