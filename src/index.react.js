// app entry point

var $ = jQuery = require('jquery'); var jQuery = $;

// React Modules
var React = require('react');
var ReactDOM = require('react-dom');

// Index Component
export class App extends React.Component {
    render(){
        return (<b>Placeholder</b>);
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