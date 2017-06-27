import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Tabs.css';

const Tabs = () => (
      <ul role="navigation" className={styles.tabs}>
        <li className={styles.tabsItem}> <a href="">Mens t-shirts</a></li>
        <li className={styles.tabsItem}> <a href="">Ladies t-shirts</a></li>
      </ul>  
)
export default Tabs;
        
