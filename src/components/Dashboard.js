import React, { Component } from 'react';
import FilterBar from '../components/Presentational/FilterBar';
import FilterFoodAndDrinks from '../components/Restaurant/FilterFoodAndDrinks';
import { Link } from 'react-router-dom';
import ButtonComponent from './Presentational/ButtonComponent'
import LoaderAnimation from './Presentational/Loaders';
import RestaurantCard from './Restaurant/RestaurantCard';

let isVisible = false;
let prevFilter = null;


const RestaurantList = (props) => {
    const restaurantCards = props.restaurants.map((restaurant, index) => {
        return (
            <RestaurantCard
                key={restaurant.id}
                title={restaurant.title}
                restaurantId={restaurant.id}
                description={restaurant.description}
                userId={restaurant.owner}
                beer={restaurant.beer}
                cocktails={restaurant.cocktails}
                food={restaurant.food}
                wine={restaurant.wine}
                toStandard={restaurant.toStandard}
                fromStandard={restaurant.fromStandard}
                fromTimeOfDay={restaurant.fromTimeOfDay}
                toTimeOfDay={restaurant.toTimeOfDay}
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
        if (this.props.restaurantPending === true) {
            return (
                <LoaderAnimation />
            )

        } else if (this.state.filterActive === true) {
            return (
                <div>
                    <FilterBar filterFoodAndDrink={this.filterFoodAndDrink} />
                    <FilterFoodAndDrinks foodState={this.state} restaurantData={this.props.restaurantData} />
                </div>
            )
        }
        else if (this.props.restaurantData.length >= 1) {
            return (
                <div>
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


