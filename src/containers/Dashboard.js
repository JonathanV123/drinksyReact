import React, { Component } from 'react';
import FilterBar from '../components/Presentational/FilterBar';
import FilterFoodAndDrinks from '../components/Restaurant/FilterFoodAndDrinks';
import { Link } from 'react-router-dom';
import LoaderAnimation from '../components/Presentational/Loaders';
import RestaurantCard from '../components/Restaurant/RestaurantCard';
import PropTypes from 'prop-types';


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
                className="restaurantCard"
            />
        )
    });
    return (
        <div className="defaultContainer">
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
            nowFiltering: false,
            filterWine: false,
            filterBeer: false,
            filterHappyHour: false,
            filterFood: false,
            filterCocktails: false,
        }
    }

    // Possible refactor
    filterFoodAndDrink = (type) => {
        // Type would be equal to filterHappyHour, filterBeer, ect...
        isVisible = !isVisible;
        /// If type is not nowFiltering, then a certain filter is being applied to wine, beer, ect...
        if (type !== 'nowFiltering') {
            this.setState((prevState, props) => {
                // Iterate over keys in state
                for (var key in prevState) {
                    // Example -- prevState[key] = filterCocktails: false,
                    // Check if any filters were true in previous state
                    if (prevState[key] === true) {
                        // If true set the prevFilter to the key. Example key would be filterWine.    
                        prevFilter = key
                    }
                }
                // Example -- return:
                // [filterWine]: set to opposite of prev state. If true, now false.
                // Set any previous filters from true to false.
                // filterWine: false
                return {
                    [type]: ![prevState][type],
                    [prevFilter]: false,
                    nowFiltering: true,
                }
            })
        } else {
            this.setState((prevState, props) => {
                for (var key in prevState) {
                    if (prevState[key] === true && prevState[key] !== 'nowFiltering') {
                        prevFilter = key
                    }
                }
                // Set previous filter to false,
                // Set nowFiltering to false. All restaurants will now show
                return {
                    [prevFilter]: false,
                    nowFiltering: false,
                }
            })
        }
    }
    render() {
        if (this.props.restaurantPending === true) {
            return (
                <LoaderAnimation />
            )
        } else if (this.state.nowFiltering === true) {
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
                    <h1 className="drinksyHeader">Your Restaurants</h1>
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
                <div id="noRestaurantsContainer">
                    <h2 className="drinksyHeader">You have no restaurants!</h2>
                    <Link id="overideLink" to={`/addRestaurant/${this.props.userProfile.id}`}>Add A Restaurant</Link>
                </div>
            )
        }
    }
}

Dashboard.propTypes = {
    loading: PropTypes.bool.isRequired,
    restaurantPending: PropTypes.bool.isRequired,
    userProfile: PropTypes.object.isRequired,
    fetchAllRestaurantDataForUser: PropTypes.func.isRequired,
    restaurantData: PropTypes.array.isRequired,
    onRestaurantRemoval: PropTypes.func.isRequired,
};

export default Dashboard;


