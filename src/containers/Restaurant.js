import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoaderAnimation from '../components/Presentational/Loaders';
import RestaurantPage from '../components/Restaurant/RestaurantInfo';
import AddEditRestaurantForm from '../components/Restaurant/AddEditRestaurantForm';
import PropTypes from 'prop-types';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        const restaurantId = this.props.match.params.id;
        props.fetchRestaurantById(restaurantId);
        this.state = {
            showForm: false,
            restaurantEditSuccess: false,
        }
    }

    // Handle restaurant creation
    handleCreation = (event) => {
        this.setState((prevState, props) => {
            return {
                restaurantCreated: !prevState.restaurantCreated,
            }
        })
    }
    // Make form visible or invisible
    showHideForm = () => {
        this.setState((prevState, props) => {
            return {
                showForm: !prevState.showForm
            }
        })
    }
    render() {
        if (this.props.restaurantPending) {
            return (
                <div>
                    <LoaderAnimation />
                </div>
            )
        } else if (this.state.restaurantEditSuccess) {
            return (
                <Redirect to={`/home/${this.props.restaurantById.owner}`} />
            )
        // Show the edit form for the individual restaurant.    
        } else if (this.state.showForm === true) {
            return (
                <AddEditRestaurantForm
                    editRestaurant={this.props.editRestaurant}
                    showForm={this.state.showForm}
                    showHideForm={this.showHideForm}
                    restaurant={this.props.restaurantById}
                    creationStepCount={this.state.formStepCounter}
                    handleEditSubmit={this.handleEditSubmit}
                    formType={'editForm'}
                />
            )
        // Display individual restaurant data     
        } else if (this.props.restaurantById && this.state.showForm === false) {
            return (
                <RestaurantPage
                    onRestaurantRemoval={this.props.onRestaurantRemoval}
                    showHideForm={this.showHideForm}
                    restaurant={this.props.restaurantById}
                />
            )
        } else {
            return (
                <div id="errorContainer">
                    <h1 className="drinksyHeader"> There seems to be an error retreiving your restaurant</h1>
                    <Link id="overideLink" to={`/home/${this.props.userProfile.id}`}>Ok</Link>
                </div>
            )
        }
    }
}

Restaurant.propTypes = {
    userProfile: PropTypes.object.isRequired,
    restaurantPending: PropTypes.bool.isRequired,
    restaurantById: PropTypes.object,
    verifyToken: PropTypes.func.isRequired,
    editRestaurant: PropTypes.func.isRequired,
    fetchRestaurantById: PropTypes.func.isRequired,
    onRestaurantRemoval: PropTypes.func.isRequired,
};

export default Restaurant;