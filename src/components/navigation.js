import React from 'react';
import { Link } from 'react-router-dom';

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
