import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './ProductDetail.css';
import RaisedButton from 'material-ui/RaisedButton';

const ProductDetail = ({product, onAddClick}) =>(
            product!==undefined ?
            <div className={styles.detailsContainer}>
                    <div className={styles.imgContainer}><img src={'/'+product.image} alt=""/> </div>
                    <div className={styles.details}>
                        <h1>{product.title}</h1>
                        <span className={styles.price}>{'$'+product.price}</span>
                        <SelectField
                                floatingLabelText="Size"
                                value={2}
                                style={{
                                    width: '100%'
                                }}
                                >
                                <MenuItem value={1} primaryText="S" />
                                <MenuItem value={2} primaryText="M" />
                                <MenuItem value={3} primaryText="L" />
                                <MenuItem value={4} primaryText="XL" />
                        </SelectField>
                        <RaisedButton onClick={()=>handleClick(product.id)} label="ADD TO CART"/>
                        <h2>Description</h2>
                        <div className={styles.descrcription}>{product.description}</div>
                    </div>    
            
            </div>
            : null
)

const getProduct = (products, productName) =>
    Object.keys(products).reduce ((obj, key)=>{
        let item= products[key];
        if (item.handle===productName)
            obj = item
            return obj
    },{})

const mapStateToProps = (state, ownProps) => ({
    product: getProduct(state.productsById, ownProps.match.params.product)
})

export default connect(mapStateToProps, null, null, {pure:true})(ProductDetail)