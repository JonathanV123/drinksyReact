import React, { Component } from 'react';
import PeopleCard from './PeopleCard'

let display;

const PeopleList = (props) => {
    const display = props.people.map((person, i) => {
        return <PeopleCard key={person.id} name={person.name} email={person.email} className="peopleCard" />
    });

    return (
        <div className="peopleContainer">
            {display}
        </div>
    )
}


export default PeopleList;