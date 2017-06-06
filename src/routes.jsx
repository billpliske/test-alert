import React from 'react';
import { Router, Route } from 'react-router';

// import all our Components
import App from './App';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

// import the Routes for each Component
const Routes = (props) => (
    <Router {...props}>
            <Route component={App}>
                { /* these are defined as children of App.js */}
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Route>
    </Router>
);

// exporting the Routes file .. so index.js will need to use it
export default Routes;