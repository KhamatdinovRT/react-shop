import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../actions';
import ShopImage from './ShopImage';
import ListItem from './ListItem';
import styles from './ShopList.css';
import { withRouter } from 'react-router-dom';

class ShopList extends Component {
    constructor (props) {
        super(props)
        this.get_Products()
        this.state = {
            smallScreen:window.innerWidth <= 768
      };
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }
    onRouteChanged() {
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
            <div>
                <ShopImage hidden={this.state.smallScreen} src={'/data/images/' + this.get_category()+'.jpg'}/>
                <header className={styles.header}>
                    <h1>{this.get_category()}</h1>
                    <hr/>
                </header>
                <div className={styles.listContainer}>
                    {this.props.products.map((item, i)=>(
                        <ListItem title={item.title} image={'/'+item.image} price={item.price} key={i}></ListItem>
                    ))}
                </div>
                <hr/>
            </div>
        )
    }
}
const mapStateToProps = state => ({products:state.products})

export default withRouter(connect(mapStateToProps, {getProducts}, null, {pure: false}) (ShopList));