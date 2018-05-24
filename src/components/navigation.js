import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id="navigationContainer">
            <nav id="nav">
                <Link className="navLink" to='/'>Home</Link>
                <Link className="navLink" to='/places'>Places</Link>
            </nav>
        </div>
    )
}

export default Navigation;
