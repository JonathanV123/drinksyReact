import React, { Component } from 'react';
import Button from './Button'



const PeopleCard = (props) => {
        return (
            <div className="peopleCard">
                <h1>{props.name}</h1>
                <h2>{props.email}</h2>
                <Button index= {props.index} onPersonRemoval={props.onPersonRemoval} name={props.name}/>
            </div>
        )
}


class PeopleList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        const display = this.props.peopleData.map((person, index) => {
            return <PeopleCard key={person.id} name={person.name} email={person.email} index={index} {...this.props} className="peopleCard" />
        });
        return (
            <div className="peopleContainer">
                {display}
            </div>
        )
    }
}


export default PeopleList;