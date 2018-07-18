import React, { Component } from 'react';
import Navigation from '../Presentational/Navigation'



class Restaurant extends Component {
    constructor(props) {
        super(props);
        const restaurantId = this.props.match.params.id;
        props.fetchRestaurantById(restaurantId);
    }
    
    render() {
        if (this.props.restaurantLoaded) {
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.restaurantById.title}</h1>
                    <p>{this.props.restaurantById.description}</p>
                    <p>{this.props.restaurantById.drinks}</p>
                </div>
            )
        } else {
            return (
                <h1> No Restaurants Found </h1>
            )
        }
    }
}

export default Restaurant;