import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from '../actions';
import ShopImage from './ShopImage';
import ListItem from './ListItem';
import styles from './ShopList.css';
import { withRouter } from 'react-router-dom';
import { Switch, Route, NavLink } from 'react-router-dom';
import ProductDetail from  './ProductDetail';

class ShopList extends Component {
    componentDidMount(){
        this.get_Products()
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
    getLink = (link) => '/list/'+this.get_category()+'/'+link
    
    get_category = () => this.props.match.params.category;

    render() {
        return (
            <div>
                <Route path="/list/:category/:product" component={ProductDetail}/>
                <Route exact path="/list/:category" render={()=>(
                    <div>
                        <ShopImage src={'/data/images/' + this.get_category()+'.jpg'}/>
                        <header className={styles.header}>
                            <h1>{this.get_category()}</h1>
                            <hr/>
                        </header>
                        <div className={styles.listContainer}>
                            {this.props.products.map((item, i)=>(
                                <ListItem link={this.getLink(item.handle)} title={item.title} image={'/'+item.image} price={item.price} key={i}></ListItem>
                            ))}
                        </div>
                        <hr/>
                    </div>
                )}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({products:state.products})

export default withRouter(connect(mapStateToProps, {getProducts}, null, {pure: false}) (ShopList));