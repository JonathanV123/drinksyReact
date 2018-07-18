import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Presentational/Button'
import Navigation from './Presentational/Navigation'

const RestaurantCard = (props) => {
    const buttonDesc = "Remove";
    return (
        <div className="peopleCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.drinks}</p>
            <Button clickAction={props.onRestaurantRemoval} buttonDesc={buttonDesc} funcArgs={props.id} />
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
            this.props.fetchRestaurantData(userId);
        }
        this.state = {
            restaurants: [],
        }


    }

    logout = () => {
        sessionStorage.removeItem('jwtToken');
        window.location.reload();
    }

    render() {
        if (this.props.loading) {
            return (
                <div>
                    <h1>Loading Data</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <Navigation logout={this.logout} />
                    <RestaurantList
                        restaurants={this.props.restaurantData}
                        onRestaurantRemoval={this.props.onRestaurantRemoval}
                        userId={this.props.userProfile.id}
                    />
                    <h1>Welcome {this.props.userProfile.name}</h1>
                </div>
            )
        }
    }
}

export default Dashboard;


