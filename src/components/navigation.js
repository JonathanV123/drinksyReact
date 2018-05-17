import React, {Component} from 'react';

function Navigation(props) {
    return (
        <nav className="navigationContainer">
            <a href="null">Add</a>
            <a href="null">Edit</a>
            <a href="null">Find</a>
            <a href="null">Delete</a>
        </nav>
    )
}

export default Navigation;
// export default class Navigation extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div class="navContainer">
//                 <nav></nav>
//             </div>
//         )
//     }
// }