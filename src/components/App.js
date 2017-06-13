import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import {ShopList} from './ShopList';
import {ShopHome} from './ShopHome';

class App extends Component {
  render() {
    return(
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={ShopHome}/>
          <Route path="/list" component={ShopList}/>
        </Switch>
    </div>
    );
  }
}
export default App;
