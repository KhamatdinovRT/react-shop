import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Navbar from './Navbar';
import Tabs from './Tabs';

const Header = () => (
      <header id="header">
        <Navbar/>
        <Tabs> </Tabs>
      </header> 
)

export default Header;