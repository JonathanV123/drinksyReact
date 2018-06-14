import React, { Component } from 'react';
import Button from '../Button'


const PeopleCard = (props) => {
    const buttonContent = "Remove Person";
    return (
        <div className="peopleCard">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <Button onPersonRemoval={props.onPersonRemoval} buttonDesc={buttonContent} name={props.name} />
        </div>
    )
}

const PeopleList = (props) => {
    const peopleCards = props.peopleData.currentPeopleData.map((person, index) => {
        return (
            <PeopleCard
                key={person.id}
                name={person.name}
                email={person.email}
                onPersonRemoval={props.onPersonRemoval}
                buttonInfo={props.peopleButtonDescription}
                className="peopleCard"
            />
        )
    });
    return (
        <div className="peopleContainer">
            {peopleCards}
        </div>
    )
}

export default PeopleList

