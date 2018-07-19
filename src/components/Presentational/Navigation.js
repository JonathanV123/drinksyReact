import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <header id="header">
            <div id="logoContainer">
                <Link to={`/home/${props.userId}`}>
                    Drinksy
                </Link>
            </div>
            <nav id="nav">
                <Link className="navBarLink" to={`/home/${props.userId}`}>My Restaurants</Link>
                <Link className="navBarLink" to={`/addRestaurant/${props.userId}`}>Add Restaurant</Link>
                <Link className="navBarLink" to={'/'} onClick={props.logout}>Logout</Link>
            </nav>

        </header>
    )
}

export default Navigation
