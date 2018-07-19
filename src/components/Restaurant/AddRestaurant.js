import React from 'react';
import AddRestaurantForm from './AddRestaurantForm';
import { Redirect } from 'react-router-dom';


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStepCounter: 0,
            restaurantCreated: false,
        }
    }
    handleFormStepCompletetion = () => {
        this.setState((prevState, props) => {
            return {
                formStepCounter: prevState.formStepCounter += 1,
            }
        })
    }

    handleFormStepBack = () => {
        this.setState((prevState, props) => {
            return {
                formStepCounter: prevState.formStepCounter -= 1,
            }
        })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleCreation = (event) => {
        console.log(this.state)
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
            <AddRestaurantForm
                formStepBack={this.handleFormStepBack}
                creationStepCount={this.state.formStepCounter}
                formStepComplete={this.handleFormStepCompletetion}
                userProfile={this.props.userProfile}
                handleCreation={this.handleCreation}
            />
        )
    }
}

export default AddRestaurant;
