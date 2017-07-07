import React from 'react';
import styles from './ShopImage.css';

const ShopImage = ({src}) => (
        <div className={styles.imgContainer}>
            <img role="presentation" className={styles.img} src={src}/>
        </div>
)
export default ShopImage;