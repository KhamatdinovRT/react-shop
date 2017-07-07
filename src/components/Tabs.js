import React from 'react';
import styles from './Tabs.css';

const Tabs = () => (
      <ul role="navigation" className={styles.tabs}>
        <li className={styles.tabsItem}> <a href="">Mens t-shirts</a></li>
        <li className={styles.tabsItem}> <a href="">Ladies t-shirts</a></li>
        <li className={styles.tabsItem}> <a href="">Hats</a></li>
        <li className={styles.tabsItem}> <a href="">New Arrivals</a></li>
      </ul>  
)
export default Tabs;
        
