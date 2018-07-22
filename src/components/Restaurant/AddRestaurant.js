import React from 'react';
import AddRestaurantForm from './AddRestaurantForm';
import { Redirect } from 'react-router-dom';
import RestaurantStepper from '../Restaurant/RestaurantStepper';


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStepCounter: 0,
            restaurantCreated: false,
            activeStep: 0,
        }
    }
    handleFormStepCompletetion = () => {
        this.setState((prevState, props) => {
            return {
                formStepCounter: prevState.formStepCounter + 1,
                activeStep: prevState.activeStep + 1,

            }
        })
    }
    handleFormStepBack = () => {
        this.setState((prevState, props) => {
            return {
                formStepCounter: prevState.formStepCounter - 1,
                activeStep: prevState.activeStep - 1,
            }
        })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
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
            <div>
                <AddRestaurantForm
                    formStepBack={this.handleFormStepBack}
                    creationStepCount={this.state.formStepCounter}
                    formStepComplete={this.handleFormStepCompletetion}
                    userProfile={this.props.userProfile}
                    handleCreation={this.handleCreation}
                />
                <RestaurantStepper activeStep={this.state.activeStep} />
            </div>
        )
    }
}

export default AddRestaurant;
