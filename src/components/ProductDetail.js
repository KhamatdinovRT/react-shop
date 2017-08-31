import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../actions';
import {getProduct} from '../reducers';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './ProductDetail.css';
import RaisedButton from 'material-ui/RaisedButton';

class ProductDetail extends Component {

    state = {
        selected:2
    }

    handleClick = (productId) => (e) => {
        this.props.addToCart({
            id:productId,
            qty:1,
            size:this.state.selected
        })
    }

    handleChange = (e, index, value) => {
        this.setState({selected:value})
    }

    render() {
        const {product} = this.props
            return (
                product!==undefined ? 
                <div className={styles.detailsContainer}>
                    <div className={styles.imgContainer}><img src={'/'+product.image} alt=""/> </div>
                    <div className={styles.details}>
                        <h1>{product.title}</h1>
                        <span className={styles.price}>{'$'+product.price}</span>
                        <SelectField
                                floatingLabelText="Size"
                                value={this.state.selected}
                                onChange={this.handleChange}
                                style={{
                                    width: '100%'
                                }}
                                >
                                <MenuItem value={1} primaryText="S" />
                                <MenuItem value={2} primaryText="M" />
                                <MenuItem value={3} primaryText="L" />
                                <MenuItem value={4} primaryText="XL" />
                        </SelectField>
                        <RaisedButton onClick={this.handleClick(product.id)} label="ADD TO CART"/>
                        <h2>Description</h2>
                        <div className={styles.descrcription}>{product.description}</div>
                    </div>
                </div> 
                : null 
            )
            
        }
}

const mapStateToProps = (state, ownProps) => ({
    product: getProduct(state.productsById, ownProps.match.params.product)
})

export default connect(mapStateToProps, {addToCart})(ProductDetail)