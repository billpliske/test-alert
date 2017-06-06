import React, { Component } from 'react';
// Need to to hyperlink the react-router way
import topLogo from '../../assets/images/ldsn-logo.gif';

import { Link } from 'react-router';
import './TopNav.css';

class TopNav extends Component {

  render() {
    return (          
        <div className="nav">
            <div className="nav-wrapper">
                <Link to="/"><img src={topLogo} className="top-logo" alt="main logo" /></Link>
                
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/fsjfjshfs">Bill</Link></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default TopNav;