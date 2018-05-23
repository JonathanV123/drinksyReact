import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import About from './about.js';
import Topics from './topics.js';

const  Navigation = (props) => {
    return (
            <div>
                <div id="navigationContainer">
                    <nav id="nav">
                        <Link className="navLink" to='/'>Home</Link>
                        <Link className="navLink" to='/about'>About</Link>
                        <Link className="navLink" to='/topics'>Topics</Link>
                    </nav>
                </div>
            </div>
    )
}

export default Navigation;
// export default class Navigation extends Component {     constructor(props) {
//     super(props);     }     render() {         return (             <div
// class="navContainer">                 <nav></nav>             </div> )     }
// }