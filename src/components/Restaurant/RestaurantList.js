import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'




const RestaurantCard = (props) => {
    const removePersonButton = "Remove Person";
    // const editPersonButton = "Edit Person";
    return (
        <div className="peopleCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.drinks}</p>
            <Button clickAction={props.onPersonRemoval} buttonDesc={removePersonButton} funcArgs={props.name} />
            <Link className="navBarLink" to={'/people/editPeople'}>Edit Person</Link>
        </div>
    )
}

const RestaurantList = (props) => {
    const restaurantCards = props.restaurantData.map((restaurant, index) => {
        return (
            <RestaurantCard
                key={restaurant.owner}
                title={restaurant.title}
                description={restaurant.description}
                drinks={restaurant.drinks}
                className="peopleCard"
            />
        )
    });
    return (
        <div className="peopleContainer">
            {restaurantCards}
        </div>
    )
}

export default RestaurantList

