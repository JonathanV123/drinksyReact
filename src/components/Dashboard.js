import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from './Presentational/Button'

const Navbar = (props) => {
    return (
        <header id="header">
            <div id="logoContainer">
                Drinksy
            </div>
            <nav id="nav">
                <Link className="navBarLink" to={'/'}>Home</Link>
                <Link className="navBarLink" to={'/restaurant'}>Restaurants</Link>
                <Link className="navBarLink" to={'/'} onClick={props.logout}>Logout</Link>
            </nav>

        </header>
    )
}

const RestaurantCard = (props) => {
    const buttonDesc = "Remove";
    console.log(props);
    return (
        <div className="peopleCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.drinks}</p>
            <Button clickAction={props.onRestaurantRemoval} buttonDesc={buttonDesc} funcArgs={props.id} />
            <Link className="navBarLink" to={'/people/editPeople'}>Edit Restaurant</Link>
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
        console.log(this.props.loading);
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
                    <Navbar logout={this.logout} />
                    <RestaurantList
                        restaurants={this.props.restaurantData}
                        onRestaurantRemoval={this.props.onRestaurantRemoval}
                    />
                    <h1>Welcome {this.props.userProfile.name}</h1>
                </div>
            )
        }
    }
}

export default Dashboard;


