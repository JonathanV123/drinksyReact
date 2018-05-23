import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import AddPlace from './AddPlace.js';

const Navigation = () => {
    return (
        <div>
            <div id="navigationContainer">
                <nav id="nav">
                    <Link className="navLink" to='/'>Home</Link>
                    <Link className="navLink" to='/places/addPlace'>Add</Link>
                    <Link className="navLink" to='/edit/removePlace'>Remove</Link>
                </nav>
                <Route path="/places/:addPlaceId" component={AddPlace}/>
            </div>
        </div>
    )
}

export default Navigation;
// export default class Navigation extends Component {     constructor(props) {
//    super(props);     }     render() {         return (             <div
// class="navContainer">                 <nav></nav>             </div> )     }
// }