import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from './Presentational/ButtonComponent'

const RestaurantCard = (props) => {
    console.log
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
    const filteredCards = props.restaurants.map((restaurant, index) => {
        if (today >= restaurant.from && today <= restaurant.to) {
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
            restaurants: [],
        }
    }
    render() {
        if (this.props.restaurantPending === true) {
            return (
                <div>
                    <h1>Loading Data</h1>
                </div>
            )

        } else if (this.props.restaurantData.length >= 1) {
            return (
                <div>
                    {/* <RestaurantList
                        loadingRestaurants={this.props.loading}
                        restaurants={this.props.restaurantData}
                        onRestaurantRemoval={this.props.onRestaurantRemoval}
                        userId={this.props.userProfile.id}
                    /> */}
                    <h1>Welcome {this.props.userProfile.name}</h1>
                    <FilterHappyHourNow restaurants={this.props.restaurantData} />
                </div>
            )
        } else {
            return (
                <Link className="navBarLink" to={`/addRestaurant/${this.props.userProfile.id}`}>Add A Restaurant</Link>
            )
        }
    }
}


export default Dashboard;


