import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={() => { props.onPersonRemoval(props.name) }}>
            Remove Person
        </button>
    )
}

// class Button extends Component {
//     constructor(props) {
//         super(props);
//         console.log(this);
//     }
//     render() {
//         return (
//             <button onClick={this.props.removePerson(this.props.name)}>
//                 Remove Person
//             </button>
//         )
//     }
// }

export default Button