import React from 'react';

const Button = (props) => {
    return (
        <button onClick={() => { props.clickAction(props.funcArgs) }}>
            {props.buttonDesc}
        </button>
    )
}

export default Button