import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleSideNav} from '../actions';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import Header from './Header';
import ShopList from './ShopList';
import {ShopHome} from './ShopHome';

class App extends Component {
  render() {
    return(
    <div>
        <Header/>
        <Drawer
          docked={false}
          width={200}
          open={this.props.sideNavIsOpen}
          onRequestChange={() => this.props.toggleSideNav()}
        >
          <NavLink to="/list/mens_tshirts"><MenuItem onTouchTap={() => this.props.toggleSideNav()}>Men's T-Shirts</MenuItem></NavLink>
          <NavLink to="/list/ladies_tshirts"><MenuItem onTouchTap={() => this.props.toggleSideNav()}>Ladies T-Shirts</MenuItem></NavLink>
          <NavLink to="/list/hats"><MenuItem onTouchTap={() => this.props.toggleSideNav()}>Hats</MenuItem></NavLink>
          <NavLink to="/list/new_arrivals"><MenuItem onTouchTap={() => this.props.toggleSideNav()}>New Arrivals</MenuItem></NavLink>        
        </Drawer>
        <main>
          <Switch>
            <Route exact path='/' component={ShopHome}/>
            <Route path="/list/:category" component={ShopList}/>
          </Switch>
        </main>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  sideNavIsOpen: state.sideNav.sideNavIsOpen
})

export default connect(mapStateToProps, {toggleSideNav}, null, {pure: false}) (App);
