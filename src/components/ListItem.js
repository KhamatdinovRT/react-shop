import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ShopImage from './ShopImage';
import styles from './ListItem.css';

const ListItem = ({link, title, image, price}) => (
    <NavLink to={link}>
        <div className={styles.listItem}>
            <img src={image} />
            <div>{title} 
                <span className={styles.price}> - {price}$</span>
            </div>   
        </div>
    </NavLink>
)

export default ListItem;