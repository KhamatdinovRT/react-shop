import React, { Component } from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CartItem from './CartItem';
import styles from './Cart.css';
import {getTotal, getCartProducts} from '../reducers';

const Cart = ({total, addedProducts}) => {
    const cartIsEmpty = total == 0
    const cartContent = !cartIsEmpty ? (
        addedProducts.map((product, index) =>
            <CartItem
                key={index}
                id={product.id}
                title={product.title}
                qty={product.qty}
                price={product.price}
                size={product.size}
                image={product.image}
                link={`/list/${product.category}/${product.handle}`}
            />
        ) 
    ) : <p className={styles.center}>Your cart seems to be empty.</p>

    return (
        <div className={styles.container}>
            <header hidden={cartIsEmpty}>
                <h1 className={styles.center}>Your cart</h1>
                <hr/>
            </header>
            {cartContent}
            <hr/>
            <div hidden={cartIsEmpty} className={styles.checkout}>
               Total:<span className={styles.total}>{total}$</span>
                <RaisedButton label="Checkout" />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    total: getTotal(state),
    addedProducts: getCartProducts(state)
})

export default connect (mapStateToProps)(Cart)
