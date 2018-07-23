import React from 'react';
import AddRestaurantForm from './AddRestaurantForm';
import { Redirect } from 'react-router-dom';
import RestaurantStepper from '../Restaurant/RestaurantStepper';


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantCreated: false,
            activeStep: 0,
        }
    }

    handleCreation = (event) => {
        this.setState((prevState, props) => {
            return {
                restaurantCreated: !prevState.restaurantCreated,
            }
        })
    }

    render() {
        if (this.state.restaurantCreated) {
            return (
                <Redirect to={`/home/${this.props.userProfile.id}`} />
            )
        }
        return (
            <div id="formContainer">
                <div id="stepperContainer">
                    <RestaurantStepper activeStep={this.state.activeStep} />
                </div>
                <AddRestaurantForm
                    formStepBack={this.handleFormStepBack}
                    creationStepCount={this.state.formStepCounter}
                    userProfile={this.props.userProfile}
                    handleCreation={this.handleCreation}
                />
            </div>
        )
    }
}

export default AddRestaurant;
