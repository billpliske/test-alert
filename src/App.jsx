import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import PhoneNav from './components/PhoneNav/PhoneNav';
import hamburger from './assets/images/hamburger.png';


class App extends Component { 
    
    // You need to set a state here because you're using it to write
    // in a class name ("sidenav") for the div that controls 
    // the position of the side menu.
    // We actually pass this value on as a prop to the PhoneNav component
    constructor() {
        super();
        this.state = { 
            menu: "sidenav"
        }
    }
    
    /* this function looks for the sidenav class, and either
       adds or removes the additional "open" class to that same div
       the use of menu as the name of the var is meaningless. */
    menuToggle() {
        var menu = document.querySelector('.sidenav')    
        menu.classList.toggle('open');
        //console.log("test");
    }
    
    // this function removes the open class from the phonemenu div
    menuClose() {
        var outer = document.querySelector('.open')    
        outer.classList.remove('open');
    } 
    
    render() {
        return (
            <div className="App">
                {/* This onClick event is fired off when you click the hamburger menu
                You might look this up to verify, but I believe I needed to
                use bind(this) because I'm using it in the same component that
                is declaring that function */}
                <span className="menu" onClick={this.menuToggle.bind(this)}>
                    <img src={hamburger} alt="menu icon" />
                </span>
                {/* here, I'm passing on the prop for the class value used in
                the PhoneNav component main div */}
                <PhoneNav menu={this.state.menu} />
                <TopNav />
                {/* When I try to bind(this), I get an error. I need to investigate this.
                    Unclear whether it's because I can only bind one function per
                    component, or possibly it's because I'm USING this function
                    on a child component, and bind(this) is only for THIS component? */}
                <div id="main" onClick={this.menuClose}>
                    {this.props.children}  
                </div>               
            </div>
        );
    }
}

export default App;
