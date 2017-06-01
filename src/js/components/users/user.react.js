// User view component

"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// User components
import UserEdit from './edit.react';
import UserShow from './show.react';
import UserRegister from './register.react';

class UserController extends React.Component {
    constructor(props){
        super(props);
        this.state = { signedIn: false, user: null };
    }
    render(){

        return (
            <Router>
                <Route path="/user" component={UserShow} />
                <Route path="/user/edit" component={UserEdit} />
                <Route path="/user/register" component={UserRegister} />
            </Router>
        );

    }

};

module.exports = UserController;