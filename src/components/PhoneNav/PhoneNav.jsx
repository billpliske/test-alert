import React, { Component } from 'react';
// Need to to hyperlink the react-router way
import './PhoneNav.css';
import { Link } from 'react-router';

class PhoneNav extends Component {
    
    render() {

        return ( 
            <div className={this.props.menu}>
                <ul>
                    <h4 className="menu-label">Menu</h4>
                    <li><Link to="/" className="menu-side" onClick={() => this.menuClose()}>Home</Link></li>
                    <li><Link to="/about" className="menu-side" onClick={() => this.menuClose()}>About</Link></li>
                    <li><Link to="/fsjfjshfs" className="menu-side" onClick={() => this.menuClose()}>Bad link</Link></li>
                </ul>
            </div>
        );
    }
}

export default PhoneNav;
