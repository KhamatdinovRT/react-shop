import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import styles from './Header.css';
import Navbar from './Navbar';
import Tabs from './Tabs';

class Header extends React.Component {
  constructor() {
      super();
      this.state = {
        scrollingLock: false,
        smallScreen:window.innerWidth <= 768,
        drawerOpen:false
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
            <Drawer
              docked={false}
              width={200}
              open={this.state.drawerOpen}
              onRequestChange={(open) => this.setState({open})}
              >
              <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
            <Navbar hideMenu={this.state.smallScreen}/>
            <Tabs hideTabs={this.state.smallScreen}/>
        </header> 
  }
}

export default Header;