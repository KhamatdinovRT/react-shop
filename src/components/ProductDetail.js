import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './ProductDetail.css';


const ProductDetail = ({product}) =>(
            product!==undefined ?
            <div className={styles.detailsContainer}>
                    <div className={styles.imgContainer}><img src={'/'+product.image} alt=""/> </div>
                    <div className={styles.details}>
                        <h1>{product.title}</h1>
                        <div>{'$'+product.price}</div>
                        <SelectField
                                floatingLabelText="Size"
                                value={2}
                                style={styles.customWidth}
                                >
                                <MenuItem value={1} primaryText="S" />
                                <MenuItem value={2} primaryText="M" />
                                <MenuItem value={3} primaryText="L" />
                                <MenuItem value={4} primaryText="XL" />
                        </SelectField>
                        <SelectField
                                floatingLabelText="Quantity"
                                value={1}
                                style={styles.customWidth}
                                >
                                <MenuItem value={1} primaryText="1" />
                                <MenuItem value={2} primaryText="2" />
                                <MenuItem value={3} primaryText="3" />                   
                                <MenuItem value={4} primaryText="4" />
                        </SelectField>
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