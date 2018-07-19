import React from 'react';

const ButtonComponent = (props) => {
    return (
        <button onClick={() => { props.clickAction(props.funcArgs) }}>
            {props.buttonDesc}
        </button>
    )
}

export default ButtonComponent
