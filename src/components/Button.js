import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={() => { props.onPersonRemoval(props.name) }}>
            {props.buttonInfo}
        </button>
    )
}

export default Button