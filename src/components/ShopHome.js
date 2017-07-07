import React, { Component } from 'react';
import styles from'./ShopHome.css';
import { Link } from 'react-router-dom';
import ShopImage from './ShopImage';

const PUBLIC_URL = process.env.PUBLIC_URL;

class ShopHome extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
        this.loadCategories()
    }

    loadCategories() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'data/categories.json');
        xhr.onload = () => {
            if (xhr.status === 200) {
                this.setState ({categories: JSON.parse(xhr.responseText)})
            }
        };
        xhr.send();        
    }

    render() {
        console.log(this.state.categories);
        return (
            <div className={styles.container}>
                {this.state.categories.map ((item)=> (
                     <div className={styles.item}>
                        <Link to={`/list/${item.name}`}>
                            <ShopImage src={PUBLIC_URL + item.image}></ShopImage>
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