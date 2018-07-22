import React from 'react';
import { Link } from 'react-router-dom';
import SimpleMenu from './SimpleMenu';

const Navigation = (props) => {
    return (
        <header id="header">
            <div id="logoContainer">
                <Link to={`/home/${props.userId}`}>
                    Drinksy
                </Link>
            </div>
            <nav id="nav">
                <SimpleMenu />
            </nav>

        </header>
    )
}

export default Navigation
