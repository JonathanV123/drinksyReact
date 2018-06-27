import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Button from '../Button'




const PeopleCard = (props) => {
    const removePersonButton = "Remove Person";
    const editPersonButton = "Edit Person";
    return (
        <div className="peopleCard">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <Button clickAction={props.onPersonRemoval} buttonDesc={removePersonButton} funcArgs={props.name} />
            <Link className="navBarLink" to={'/people/editPeople'}>Edit Person</Link>
        </div>
    )
}

const PeopleList = (props) => {
    const peopleCards = props.peopleData.map((person, index) => {
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

