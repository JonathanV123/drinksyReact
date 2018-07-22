import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Presentational/ButtonComponent';

const RestaurantCard = (props) => {
    const buttonDesc = "Remove";
    return (
        <div className="peopleCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.drinks}</p>
            <ButtonComponent clickAction={props.onRestaurantRemoval} buttonDesc={buttonDesc} funcArgs={props.id} />
            <Link className="navBarLink" to={`/restaurant/${props.id}`}>View Restaurant</Link>
        </div >
    )
}

const FilterHappyHourNow = (props) => {
    console.log(props.restaurants)
    const today = new Date().getHours();
    const filteredCards = props.restaurantData.map((restaurant, index) => {
        console.log(restaurant);
        if (today >= restaurant.fromMilitary && today <= restaurant.toMilitary) {
            return (
                <RestaurantCard
                    key={restaurant.id}
                    title={restaurant.title}
                    id={restaurant.id}
                    description={restaurant.description}
                    drinks={restaurant.drinks}
                    userId={props.userId}
                    onRestaurantRemoval={props.onRestaurantRemoval}
                    className="peopleCard"
                />
            )
        }
    });
    return (
        <div className="peopleContainer">
            {filteredCards}
        </div>
    )
}

const FoodAndDrinksList = (props) => {
    const filteredCards = props.restaurantData.map((restaurant, index) => {
        console.log(restaurant[props.typeFiltered])
        if (restaurant[props.typeFiltered] !== 'None') {
            return (
                <RestaurantCard
                    key={restaurant.id}
                    title={restaurant.title}
                    id={restaurant.id}
                    description={restaurant.description}
                    drinks={restaurant.drinks}
                    userId={props.userId}
                    onRestaurantRemoval={props.onRestaurantRemoval}
                    className="peopleCard"
                />
            )
        }
    });
    return (
        <div className="peopleContainer">
            {filteredCards}
        </div>
    )
}

class FilterFoodAndDrinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterWine: false,
            filterBeer: false,
            filterHappyHour: false,
            filterFood: false,
            filterCocktails: false,
        }
    }

    render() {
        console.log(this.props)
        if (this.props.foodState.filterHappyHour === true) {
            return (
                <FilterHappyHourNow restaurantData={this.props.restaurantData} typeFiltered={'happyhour'} />
            )
        } else if (this.props.foodState.filterBeer === true) {
            return (
                <FoodAndDrinksList restaurantData={this.props.restaurantData} typeFiltered={'beer'} />
            )
        }
        else if (this.props.foodState.filterWine === true) {
            return (
                <FoodAndDrinksList restaurantData={this.props.restaurantData} typeFiltered={'wine'} />
            )
        }
        else if (this.props.foodState.filterCocktails === true) {
            return (
                <FoodAndDrinksList restaurantData={this.props.restaurantData} typeFiltered={'cocktails'} />
            )
        }
        else if (this.props.foodState.filterFood === true) {
            return (
                <FoodAndDrinksList restaurantData={this.props.restaurantData} typeFiltered={'food'} />
            )
        } else {
            return null
        }
    }
}


export default FilterFoodAndDrinks;
