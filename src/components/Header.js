import React from 'react';
import {connect} from 'react-redux';
import {toggleSideNav} from '../actions';
import styles from './Header.css';
import Navbar from './Navbar';
import Tabs from './Tabs';

class Header extends React.Component {
  constructor() {
      super();
      this.state = {
        scrollingLock: false,
        smallScreen:window.innerWidth <= 768,
      };
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({smallScreen:window.innerWidth <= 768})
  }

  handleScroll = () => {
    if (window.scrollY > 64) {
      this.setState({
        scrollingLock: true
      });
    } 
    else if (window.scrollY < 64) {
      this.setState({
        scrollingLock: false
      });
    }
  }
  render() {
  return <header className={this.state.scrollingLock ? styles.header + ' ' + styles.headerScrolling : styles.header}>
            <Navbar hideMenu={this.state.smallScreen} onToggleSideNav={()=>this.props.toggleSideNav()}/>
            <Tabs hideTabs={this.state.smallScreen}/>
        </header> 
  }
}

export default connect(null, {toggleSideNav})(Header);