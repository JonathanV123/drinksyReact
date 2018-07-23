import React, { Component } from 'react';
import RestaurantEditForm from './EditForm';
import ButtonComponent from '../Presentational/ButtonComponent';
import { Link, Redirect } from 'react-router-dom';
import LoaderAnimation from '../Presentational/Loaders';

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

    handleCreation = (event) => {
        this.setState((prevState, props) => {
            return {
                restaurantCreated: !prevState.restaurantCreated,
            }
        })
    }
    showHideForm = () => {
        this.setState((prevState, props) => {
            return {
                showForm: !prevState.showForm
            }
        })
    }

    handleEditSubmit = (event) => {
        this.setState((prevState, props) => {
            return {
                restaurantEditSuccess: !prevState.restaurantEditSuccess,
            }
        })
    }

    render() {
        console.log(this.props);
        const restaurantId = this.props.match.params.id;
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
        } else if (this.state.showForm === true) {
            return (
                <RestaurantEditForm
                    editRestaurant={this.props.editRestaurant}
                    showForm={this.state.showForm}
                    showHideForm={this.showHideForm}
                    restaurant={this.props.restaurantById}
                    creationStepCount={this.state.formStepCounter}
                    handleEditSubmit={this.handleEditSubmit}
                />
            )
        } else if (this.props.restaurantById && this.state.showForm === false) {
            return (
                <div>
                    <h1>{this.props.restaurantById.title}</h1>
                    <p>{this.props.restaurantById.description}</p>
                    <p>{this.props.restaurantById.drinks}</p>
                    <ButtonComponent buttonDesc={'Edit Restaurant'} clickAction={this.showHideForm} funcArgs={null} />
                </div>
            )
        } else {
            return (
                <div>
                    <h1> There seems to be an error retreiving your restaurant</h1>
                    <Link className="navBarLink" to={`/home/${this.props.userProfile.id}`}>Ok</Link>
                </div>
            )
        }
    }
}

export default Restaurant;