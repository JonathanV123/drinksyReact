import React from 'react';
import { Link } from 'react-router-dom';
import SimpleMenu from './SimpleMenu';
import PropTypes from 'prop-types';

const Navigation = (props) => {
    return (
        <header id="header">
            <div id="welcomeContainer">
                <Link id="homeLink" to={`/home/${props.user.id}`}>
                    {props.user.name}
                </Link>
            </div>
            <nav id="nav">
                <SimpleMenu userId={props.user.id} logout={props.logout} />
            </nav>
        </header>
    )
}

Navigation.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

export default Navigation
