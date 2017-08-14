import React, { Component } from 'react';
import styles from'./ShopHome.css';
import { Link } from 'react-router-dom';
import ShopImage from './ShopImage';

class ShopHome extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        this.loadCategories()
    }

    loadCategories() {
        let xhr = new XMLHttpRequest();
        fetch('data/categories.json').then(
            response=> response.json()
        ).then (
            json => this.setState ({categories:json})
        )
    }

    render() {
        return (
            <div className={styles.container}>
                {this.state.categories.map ((item,i)=> (
                     <div key={i} className={styles.item}>
                        <Link to={`/list/${item.name}`}>
                            <ShopImage src={item.image}></ShopImage>
                        </Link>
                        <h2>{item.title}</h2>
                     </div>    
                     )
                    )
                }
            </div>
        );
    }
}

export { ShopHome }