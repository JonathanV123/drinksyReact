import React from 'react';
import RestaurantCard from './RestaurantCard';
import FilterNotifcations from '../Presentational/FilterNotifcations';

const FilterHappyHourNow = (props) => {
    const today = new Date().getHours();
    const filteredCards = props.restaurantData.map((restaurant, index) => {
        // Checks current time against military time to see if restaurant happy hour is happening right now.
        if (today >= restaurant.fromMilitary && today <= restaurant.toMilitary) {
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
                    fromTimeOfDay={restaurant.fromTimeOfday}
                    toTimeOfDay={restaurant.toTimeOfDay}
                    onRestaurantRemoval={props.onRestaurantRemoval}
                    className="peopleCard"
                />
            )
        }
    });
    // Refactor to use single function!!! not DRY
    // Function that checks if a value is undefined.
    function isUndefined(currentValue) {
        return currentValue === undefined;
    }
    // If every index value in filteredCards array is undefined, no restaurants match the filter.
    if (filteredCards.every(isUndefined)) {
        const message = 'None of your restaurants are currently offering Happy Hour'
        return (
            <FilterNotifcations message={message} />
        )
        // Show restaurants that match the filter.
    } else {
        return (
            <div className="peopleContainer">
                {filteredCards}
            </div>
        )
    }
}

const FoodAndDrinksList = (props) => {
    // Map restaurants that match the typerFiltered prop (wine, food, ect...) if value is not none, then show the restaurant.
    const filteredCards = props.restaurantData.map((restaurant, index) => {
        if (restaurant[props.typeFiltered] !== 'None') {
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
        }
    });
    // Function that checks if a value is undefined.
    function isUndefined(currentValue) {
        return currentValue === undefined;
    }
    // If every index value in filteredCards array is undefined, no restaurants match the filter.
    if (filteredCards.every(isUndefined)) {
        const message = 'None of your restaurants match your current filter'
        return (
            <FilterNotifcations message={message} />
        )
        // Show restaurants that match the filter.
    } else {
        return (
            <div className="peopleContainer">
                {filteredCards}
            </div>
        )
    }
}

const FilterFoodAndDrinks = (props) => {
    if (props.foodState.filterHappyHour === true) {
        return (
            <div className="fillScreen">
                <h1 className="filterTitle">Happy Hour happening now</h1>
                <FilterHappyHourNow restaurantData={props.restaurantData} typeFiltered={'happyhour'} />
            </div>
        )
    } else if (props.foodState.filterBeer === true) {
        return (
            <div>
                <h1 className="filterTitle">Restaurants with Beer</h1>
                <FoodAndDrinksList restaurantData={props.restaurantData} typeFiltered={'beer'} />
            </div>
        )
    }
    else if (props.foodState.filterWine === true) {
        return (
            <div>
                <h1 className="filterTitle">Restaurants with Wine</h1>
                <FoodAndDrinksList restaurantData={props.restaurantData} typeFiltered={'wine'} />
            </div>
        )
    }
    else if (props.foodState.filterCocktails === true) {
        return (
            <div>
                <h1 className="filterTitle">Restaurants with Cocktails</h1>
                <FoodAndDrinksList restaurantData={props.restaurantData} typeFiltered={'cocktails'} />
            </div>
        )
    }
    else if (props.foodState.filterFood === true) {
        return (
            <div>
                <h1 className="filterTitle">Restaurants with Food</h1>
                <FoodAndDrinksList restaurantData={props.restaurantData} typeFiltered={'food'} />
            </div>
        )
    } else {
        return null
    }
}


export default FilterFoodAndDrinks;
