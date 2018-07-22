import React, { Component } from 'react';
import FilterBar from '../components/Presentational/FilterBar';
import FilterFoodAndDrinks from '../components/Restaurant/FilterFoodAndDrinks';
import { Link } from 'react-router-dom';
import ButtonComponent from './Presentational/ButtonComponent'

let isVisible = false;
let prevFilter = null;

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

const RestaurantList = (props) => {
    const restaurantCards = props.restaurants.map((restaurant, index) => {
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
    });
    return (
        <div className="peopleContainer">
            {restaurantCards}
        </div>
    )
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.userProfile.id
        if (this.props.loading === false) {
            this.props.fetchAllRestaurantDataForUser(userId);
        }
        this.state = {
            filterActive: false,
            filterWine: false,
            filterBeer: false,
            filterHappyHour: false,
            filterFood: false,
            filterCocktails: false,
        }
    }

    filterFoodAndDrink = (type) => {
        console.log('running!')
        console.log(isVisible);
        isVisible = !isVisible;
        console.log(isVisible);
        if (type !== 'filterActive') {
            this.setState((prevState, props) => {
                for (var key in prevState) {
                    if (prevState[key] === true) {
                        prevFilter = key
                    }
                }
                console.log(prevFilter);
                return {
                    [type]: ![prevState][type],
                    [prevFilter]: false,
                    filterActive: true,
                }
            })
        } else {
            this.setState((prevState, props) => {
                for (var key in prevState) {
                    if (prevState[key] === true && prevState[key] !== 'filterActive') {
                        prevFilter = key
                    }
                }
                return {
                    [prevFilter]: false,
                    filterActive: false,
                }
            })
        }
    }

    render() {
        console.log(this.state);
        if (this.props.restaurantPending === true) {
            return (
                <div>
                    <h1>Loading Data</h1>
                </div>
            )
        } else if (this.state.filterActive === true) {
            return (
                <div>
                    <h1>Welcome {this.props.userProfile.name}</h1>
                    <FilterBar filterFoodAndDrink={this.filterFoodAndDrink} />
                    <FilterFoodAndDrinks foodState={this.state} restaurantData={this.props.restaurantData} />
                </div>
            )
        }
        else if (this.props.restaurantData.length >= 1) {
            return (
                <div>
                    <h1>Welcome {this.props.userProfile.name}</h1>
                    <FilterBar filterFoodAndDrink={this.filterFoodAndDrink} filterHappyHour={this.filterHappyHour} />
                    <RestaurantList
                        loadingRestaurants={this.props.loading}
                        restaurants={this.props.restaurantData}
                        onRestaurantRemoval={this.props.onRestaurantRemoval}
                        userId={this.props.userProfile.id}
                    />
                </div>
            )
        }
        else {
            return (
                <Link className="navBarLink" to={`/addRestaurant/${this.props.userProfile.id}`}>Add A Restaurant</Link>
            )
        }
    }
}


export default Dashboard;


