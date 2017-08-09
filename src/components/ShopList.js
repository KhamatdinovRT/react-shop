import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../actions';
import ShopImage from './ShopImage';
// import { Switch, Route } from 'react-router-dom'

const PUBLIC_URL = process.env.PUBLIC_URL;

class ShopList extends Component {
    constructor (props) {
        super(props)
        this.get_Products()
    }
    get_Products = () => {
        let category = this.get_category()
        fetch(`/data/${category}.json`).then(
        response=> response.json()
        ).then (
            json => this.props.getProducts(json)
        )
    }
    get_category = () => this.props.match.params.category;
    render() {
        return (
            <ShopImage src={'/data/images/' + this.get_category()+'.jpg'}/>      
        )
    }
}
const mapStateToProps = state => ({products:state.products})

export default connect(mapStateToProps, {getProducts}, null, {pure: false}) (ShopList);