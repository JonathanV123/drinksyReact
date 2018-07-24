import React from 'react';
import AddRestaurantForm from './AddRestaurantForm';
import { Redirect } from 'react-router-dom';
import RestaurantStepper from '../Restaurant/RestaurantStepper';


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            restaurantCreated: false,
        }
    }
    handleFormStepperForward = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleFormStepperBackward = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    }
    handleCreation = () => {
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
                    handleFormStepperForward={this.handleFormStepperForward}
                    handleFormStepperBackward={this.handleFormStepperBackward}
                    userProfile={this.props.userProfile}
                    handleCreation={this.handleCreation}
                />
            </div>
        )
    }
}

export default AddRestaurant;
