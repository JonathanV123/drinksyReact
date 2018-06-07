import React from 'react';

const PeopleCard = (props) => {
    return (
        <div className="peopleCard">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
        </div>
    )


}

export default PeopleCard