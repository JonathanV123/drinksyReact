import React, { Component } from 'react';
import Navigation from '../Presentational/Navigation';
import EditForm from '../User/EditForm';
import Button from '../Presentational/Button';


const Form = (props) => {
    if (props.showForm) {
        return (
            <EditForm
                showHideForm={props.showHideForm}
                editRestaurant={props.editRestaurant}
                restaurant={props.restaurantInfo}
                restaurantId={props.restaurantId}
            />
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
                showForm: !prevState.showForm
            }
        })
    }

    render() {
        const restaurantId = this.props.match.params.id;
        if (this.state.showForm) {
            const restaurantInfo = {
                id: restaurantId,
                title: this.props.restaurantById.title,
                description: this.props.restaurantById.description,
                drinks: this.props.restaurantById.drinks,
            }
            return (
                <div>
                    <Form
                        editRestaurant={this.props.editRestaurant}
                        restaurantId={restaurantId}
                        restaurantInfo={restaurantInfo}
                        showForm={this.state.showForm}
                        showHideForm={this.showHideForm}
                    />
                </div>
            )
        } else if (this.props.restaurantLoaded && this.state.showForm === false) {
            return (
                <div>
                    <Navigation />
                    <h1>{this.props.restaurantById.title}</h1>
                    <p>{this.props.restaurantById.description}</p>
                    <p>{this.props.restaurantById.drinks}</p>
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