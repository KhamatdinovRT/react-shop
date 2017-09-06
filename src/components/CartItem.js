import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import styles from './CartItem.css';

const CartItem = ({id, title, qty, price, size, image, link}) => {
    return (
        <div className={styles.flexbox}>
            <Link to={link}><img src={`/${image}`}/></Link>
            <div className={styles.list}>
                <Link className={styles.name} to={link}><div>{title}</div></Link>
                <div className={styles.details}>
                    <div className={styles.detail}>Quantity: {qty}</div>
                    <div className={styles.detail}>Price: {price}$</div>
                    <div className={styles.detail}>Size: {size}</div>
                </div>
            </div>
            <IconButton tooltip="delete">
                <ClearIcon></ClearIcon>   
            </IconButton>
        </div>
    )
}

export default CartItem;