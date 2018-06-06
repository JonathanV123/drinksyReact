import React, { Component } from 'react';

const PeopleCard = (props) => {
    console.log(props);
    return (
        <div className="peopleCard">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
        </div>
    )


}

export default PeopleCard