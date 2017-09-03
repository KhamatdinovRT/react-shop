import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from './Cart.css';
import {getTotal} from '../reducers';

const Cart = ({total}) => {
    return (
        <div>
            {total!=undefined ? total : ""}
        </div>
    )
}

const mapStateToProps = state => ({
    total: getTotal(state)
})

export default connect (mapStateToProps)(Cart)
