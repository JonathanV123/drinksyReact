import React from 'react';
import RestaurantList from './RestaurantList';
import GetRestaurants from './GetRestaurants';

const Restaurant = (props) => {
    const pending = props.isPending;
    if (pending === true) {
        return (
            <h1>Loading Data</h1>
        )
    } else if (props.restaurantData.length === 0) {
        return (
            <div>
                <GetRestaurants {...props} />
            </div>
        )
    } else {
        return (
            <div>
                <RestaurantList {...props} />
            </div>
        )
    }

}

export default Restaurant;