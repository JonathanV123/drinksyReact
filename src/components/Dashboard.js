import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
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
    const removePersonButton = "Remove Person";
    // const editPersonButton = "Edit Person";
    return (
        <div className="peopleCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.drinks}</p>
            <Button clickAction={props.onPersonRemoval} buttonDesc={removePersonButton} funcArgs={props.name} />
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
                description={restaurant.description}
                drinks={restaurant.drinks}
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
        console.log(props);
        const userId = this.props.userProfile.id
        const token = sessionStorage.getItem('jwtToken')
        if (this.props.loading === false) {
            axios({
                method: 'get',
                url: `http://localhost:8080/home/${userId}`,
                headers: { 'Authorization': "bearer " + token },
            }).then((response) => {
                console.log(response);
                this.setState((prevState, props) => {
                    return {
                        restaurants: response.data.restaurants,
                    }
                })
                console.log(this.state);

            }).catch((err) => {
                console.log(err.response);
                const errorMessage = err.response.data.message;
                // this.props.renderResponse(errorMessage)
            })
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
        return (
            <div>
                <Navbar logout={this.logout} />
                <h1>Welcome {this.props.userProfile.name}</h1>
                <RestaurantList restaurants={this.state.restaurants} />
            </div>
        )
    }
}

export default Dashboard;


