import React, { Component } from 'react';
import styles from'./ProductDetail.css';
import { Link } from 'react-router-dom';
import ShopImage from './ShopImage';

class ProductDetail extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div >
                {this.props.match.params.product}
            </div>
        );
    }
}

export { ProductDetail }