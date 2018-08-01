import React from 'react';
import AddEditRestaurantForm from '../components/Restaurant/AddEditRestaurantForm';
import { Redirect } from 'react-router-dom';
import RestaurantStepper from '../components/Restaurant/RestaurantStepper';
import PropTypes from 'prop-types';


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            restaurantCreated: false,
        }
    }
    // Handle step forward for visual bar at top of form
    handleFormStepperForward = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };
    // Handle step backward for visual bar at top of form
    handleFormStepperBackward = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    }
    // Handle restaurant creation
    handleCreation = () => {
        this.setState((prevState, props) => {
            return {
                restaurantCreated: !prevState.restaurantCreated,
            }
        })
    }
    render() {
        // If restaurant is created, redirect to homepage
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
                <AddEditRestaurantForm
                    formType={'addForm'}
                    handleFormStepperForward={this.handleFormStepperForward}
                    handleFormStepperBackward={this.handleFormStepperBackward}
                    userProfile={this.props.userProfile}
                    handleCreation={this.handleCreation}
                />
            </div>
        )
    }
}

AddRestaurant.propTypes = {
    userProfile: PropTypes.object.isRequired,
    restaurantPending: PropTypes.bool.isRequired,
    verifyToken: PropTypes.func.isRequired,
};

export default AddRestaurant;
