import React, { Component } from 'react';
import homeBackground from '../../assets/images/blue-chihuly.jpg';
import './Home.css';
import Contact from '../../components/Contact/Contact';

class Home extends Component {
  render() {
    return (
        <div id="sb-site">
            <div className="container">
                <div className="home-image">
                    <picture>
                        <source media="(min-width: 700px)" srcSet={homeBackground} />
                {/* img tag for browsers that do not support picture element */}
                        <img src={homeBackground}  alt="main art" id="picimg" draggable="false" />
                    </picture>
                </div>
                <div className="outer">
                    <div className="middle">
                        <div className="inner">
                            <h1 className="bill">{this.props.title}</h1>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
