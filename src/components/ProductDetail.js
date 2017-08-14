import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from'./ProductDetail.css';
import { Link } from 'react-router-dom';
import ShopImage from './ShopImage';

class ProductDetail extends Component {
    render() {
        return (
            <div >
                {this.props.match.params.product}
            </div>
        );
    }
}

const mapStateToProps = state = ({products:state.products})

export default connect(mapStateToProps, null, null, {pure:false})(ProductDetail)