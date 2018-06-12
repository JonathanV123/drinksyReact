import React, { Component } from 'react';
import Button from './Button'

const buttonContent = "Remove Person";
const PeopleCard = (props) => {
    return (
        <div className="peopleCard">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <Button onPersonRemoval={props.onPersonRemoval} buttonDesc={buttonContent} name={props.name} />
        </div>
    )
}

// class PeopleList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const display = this.props.peopleData.currentPeopleData.map((person, index) => {
//             return (
//                 <PeopleCard
//                     key={person.id}
//                     name={person.name}
//                     email={person.email}
//                     onPersonRemoval={this.props.onPersonRemoval}
//                     buttonInfo={this.props.peopleButtonDescription}
//                     className="peopleCard"
//                 />
//             )
//         });
//         return (
//             <div className="peopleContainer">
//                 {display}
//             </div>
//         )
//     }
// }

const PeopleList = (props) => {
    console.log("PEOPLE LIST RAN");
    const display = props.peopleData.currentPeopleData.map((person, index) => {
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
            {display}
        </div>
    )
}




export default PeopleList;