import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ProductDetail.css';
import { Link } from 'react-router-dom';
import ShopImage from './ShopImage';

const ProductDetail = ({product}) =>(
            product!==undefined ?
            <div className={styles.detailsContainer}>
                    <img src={'/'+product.image} alt=""/> 
                    <div className={styles.details}>
                        <h1>{product.title}</h1>
                        <div>{'$'+product.price}</div>
                        <h2>Description</h2>
                        <div className={styles.description}>{product.description}</div>
                    </div>    
            
            </div>
            : null
)

const getProduct = (products, productName) => {
    for (let item of products){
        if (item.handle===productName)
            return item
    }
}

const mapStateToProps = (state, ownProps) => ({
    product: getProduct(state.products, ownProps.match.params.product)
})

export default connect(mapStateToProps, null, null, {pure:true})(ProductDetail)