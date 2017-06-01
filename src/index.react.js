// app entry point

var $ = jQuery = require('jquery'); var jQuery = $;

// React Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Data/Flux
var AppDispatcher = require('./js/dispatcher');

// Components
var Header = require('./js/components/common/header.react');
var User = require('./js/components/users/user.react');

// Index Component, passes route along to Header page prop
class App extends React.Component {
    render(){
        return (
            <div>
            <div className="row">
                <Header page={this.props.route}/>
            </div>
            <div className="row">
                <Router>
                </Router>
            </div>
            </div>
        );
    }
}


// Routing
var router = {
    routing: function(){
        let route = window.location.hash.substr(1);
        ReactDOM.render(<App route={route} />, document.getElementById('app'));
    }
}

// Listen to route changes
window.addEventListener('hashchange', router.routing);
router.routing();