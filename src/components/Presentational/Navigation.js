import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <header id="header">
            <div id="logoContainer">
                Drinksy
            </div>
            <nav id="nav">
                <Link className="navBarLink" to={'/'}>Home</Link>
                <Link className="navBarLink" to={'/restaurant'}>Restaurants</Link>
                <Link className="navBarLink" to={'/'} onClick={props.logout}>Logout</Link>
            </nav>

        </header>
    )
}

export default Navigation
