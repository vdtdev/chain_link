import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './common/header.react';
import User from './users/user.react';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <div className="row">
                        <Header page='home'/>
                    </div>
                    <div className="row">
                        <Route path="/users" component={User} />
                    </div>
                </div>
            </Router>
        );
    }
}

module.exports = App;