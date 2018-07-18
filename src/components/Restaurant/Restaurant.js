import React, { Component } from 'react';
import Navigation from '../Presentational/Navigation';
import EditForm from '../User/EditForm';
import Button from '../Presentational/Button';


const Form = (props) => {
    console.log(props);
    if (props.showForm) {
        return (
            <EditForm editRestaurant={props.editRestaurant} restaurant={props.restaurantInfo} restaurantId={props.restaurantId} />
        )
    } else {
        return null;
    }
}

class Restaurant extends Component {
    constructor(props) {
        super(props);
        const restaurantId = this.props.match.params.id;
        props.fetchRestaurantById(restaurantId);
        this.state = {
            showForm: false,
        }
    }
    showHideForm = () => {
        this.setState((prevState, props) => {
            return {
                showForm: true
            }
        })
    }

    render() {
        const restaurantId = this.props.match.params.id;
        if (this.props.restaurantLoaded) {
            const restaurantInfo = {
                id: restaurantId,
                title: this.props.restaurantById.title,
                description: this.props.restaurantById.description,
                drinks: this.props.restaurantById.drinks,
            }
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.restaurantById.title}</h1>
                    <p>{this.props.restaurantById.description}</p>
                    <p>{this.props.restaurantById.drinks}</p>
                    <Form editRestaurant={this.props.editRestaurant} restaurantId={restaurantId} restaurantInfo={restaurantInfo} showForm={this.state.showForm} />
                    <Button buttonDesc={'Edit Restaurant'} clickAction={this.showHideForm} funcArgs={null} />
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