import React from 'react';
import styles from './Header.css';
import Navbar from './Navbar';
import Tabs from './Tabs';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        scrollingLock: false
      };
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
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
            <Navbar/>
            <Tabs/>
        </header> 
  }
}

export default Header;