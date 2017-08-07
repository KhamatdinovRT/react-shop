import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleSideNav} from '../actions';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import Header from './Header';
import {ShopList} from './ShopList';
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
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
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
  sideNavIsOpen: state.sideNavIsOpen
})

export default connect (mapStateToProps, {toggleSideNav}, null, {pure: false}) (App);
