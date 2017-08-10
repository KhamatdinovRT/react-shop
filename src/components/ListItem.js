import React from 'react';
import {Link} from 'react-router-dom';
import ShopImage from './ShopImage';
import styles from './ListItem.css';

const ListItem = ({title, image, price}) => (
    <div className={styles.listItem}>
        <img src={image} />
        <div>{title} 
            <span className={styles.price}> - {price}$</span>
        </div>   
    </div>
)

export default ListItem;