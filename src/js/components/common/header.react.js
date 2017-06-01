// Common shared header component

"use strict";
var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
    // indicates whether link should be active, if on particular page
    isActivePage(page){
        return (this.props.page == page)? "active" : "";
    }
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-title">ChainLink</div>
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className={this.isActivePage("home")}><a href="#">Home</a></li>
                        <li className={this.isActivePage("categories")}><a href="#">Categories</a></li>
                        <li className={this.isActivePage("tags")}><a href="#">Tags</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

Header.defaultProps = { page: "" };

module.exports = Header;