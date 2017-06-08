// app entry point

var $ = jQuery = require('jquery'); var jQuery = $;

// React Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import App from './js/components/app.react';

// Data/Flux
// var AppDispatcher = require('./js/dispatcher');

ReactDOM.render(<App />, document.getElementById('app'));