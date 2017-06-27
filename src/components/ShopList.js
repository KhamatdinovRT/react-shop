import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

class ShopList extends Component {
    get_category = () => this.props.match.params.category;
    
    render() {
        
        return (
            <ul className="">
                 {this.get_category()}
            </ul>
        );
    }
}

export { ShopList }