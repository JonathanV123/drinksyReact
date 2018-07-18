import React, { Component } from 'react';
import Navigation from '../Presentational/Navigation';
import EditForm from '../User/EditForm';
import Button from '../Presentational/Button';


const Form = (props) => {
    console.log(props);
    if (props.showForm) {
        return (
            <EditForm restauranId={props.restaurantId} />

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
        if (this.props.restaurantLoaded) {
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.restaurantById.title}</h1>
                    <p>{this.props.restaurantById.description}</p>
                    <p>{this.props.restaurantById.drinks}</p>
                    <Form restauranId={this.restaurantId} showForm={this.state.showForm} />
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