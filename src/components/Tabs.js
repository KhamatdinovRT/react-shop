import React from 'react';
import styles from './Tabs.css';
import { NavLink } from 'react-router-dom'

const Tabs = ({hideTabs}) => (
      <ul role="navigation" hidden={hideTabs} className={styles.tabs}>
        <li className={styles.tabsItem}> <NavLink to="/list/mens_tshirts" activeClassName={styles.selected}>Mens t-shirts</NavLink></li>
        <li className={styles.tabsItem}> <NavLink to="/list/ladies_tshirts" activeClassName={styles.selected}>Ladies t-shirts</NavLink></li>
        <li className={styles.tabsItem}> <NavLink to="/list/hats" activeClassName={styles.selected}>Hats</NavLink></li>
        <li className={styles.tabsItem}> <NavLink to="/list/new_arrivals" activeClassName={styles.selected}>New Arrivals</NavLink></li>
      </ul>  
)
export default Tabs;

        
