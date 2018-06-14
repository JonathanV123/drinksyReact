import React, { Component } from 'react';
import Button from '../Button'
import EditPeopleForm from './EditPeopleForm';




const PeopleCard = (props) => {
    const removePersonButton = "Remove Person";
    const editPersonButton = "Edit Person";
    return (
        <div className="peopleCard">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <Button clickAction={props.onPersonRemoval} buttonDesc={removePersonButton} funcArgs={props.name} />
            <Button clickAction={props.onPersonRemoval} buttonDesc={editPersonButton} />
            <EditPeopleForm {...props} />
        </div>
    )
}

const PeopleList = (props) => {
    const peopleCards = props.peopleData.currentPeopleData.map((person, index) => {
        return (
            <PeopleCard
                key={person.id}
                id={person.id}
                name={person.name}
                email={person.email}
                onPersonRemoval={props.onPersonRemoval}
                onEditPeopleData={props.onEditPeopleData}
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

