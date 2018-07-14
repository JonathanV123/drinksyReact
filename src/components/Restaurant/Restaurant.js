import React, { Component } from 'react';
import Navigation from '../Presentational/Navigation'

class Restaurant extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        const restaurantId = props.match.params.id;
        props.editRestaurant(restaurantId)
    }
    render() {
        const userId = this.props.userProfile.id
        return (
            <div>
                <Navigation />
                <h1>hi</h1>
            </div>
        )
    }
}

export default Restaurant;