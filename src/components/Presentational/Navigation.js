import React from 'react';
import { Link } from 'react-router-dom';
import SimpleMenu from './SimpleMenu';

const Navigation = (props) => {
    console.log(props)
    return (
        <header id="header">
            <div id="welcomeContainer">
                <Link id="homeLink" to={`/home/${props.user.id}`}>
                    {props.user.name}
                </Link>
            </div>
            <nav id="nav">
                <SimpleMenu />
            </nav>

        </header>
    )
}

export default Navigation
