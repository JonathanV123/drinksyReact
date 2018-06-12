import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={() => { props.onPersonRemoval(props.name) }}>
            {props.buttonDesc}
        </button>
    )
}

export default Button