import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Notification from '../Presentational/Notification';
import StepOneTitle from '../Restaurant/FormSteps/StepOneTitle';
import StepTwoDesc from '../Restaurant/FormSteps/StepTwoDesc';
import StepThreeFood from '../Restaurant/FormSteps/StepThreeFood';
import StepFourBeer from '../Restaurant/FormSteps/StepFourBeer';
import StepFiveWine from '../Restaurant/FormSteps/StepFiveWine';
import StepSixCocktails from '../Restaurant/FormSteps/StepSixCocktails';
import StepSevenHHTime from './FormSteps/StepSevenHHTime';
import FinalStepCheck from './FormSteps/FinalStep';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: 8,
    },
});

class AddEditRestaurantForm extends Component {
    constructor(props) {
        super(props);
        // Edit Restaurant Form State
        if (props.formType === 'editForm') {
            this.state = {
                title: this.props.restaurant.title,
                description: this.props.restaurant.description,
                from: this.props.restaurant.fromStandard,
                to: this.props.restaurant.toStandard,
                food: this.props.restaurant.food,
                beer: this.props.restaurant.beer,
                wine: this.props.restaurant.wine,
                cocktails: this.props.restaurant.cocktails,
                toTimeOfDay: this.props.restaurant.toTimeOfDay,
                fromTimeOfDay: this.props.restaurant.fromTimeOfDay,
                formStepCounter: 0,
                activeStep: 0,
                responseMessage: '',
            };
            // Add Restaurant Form State    
        } else {
            this.state = {
                title: '',
                description: '',
                from: '',
                to: '',
                food: '',
                beer: '',
                wine: '',
                cocktails: '',
                toTimeOfDay: '',
                fromTimeOfDay: '',
                responseMessage: '',
                formStepCounter: 0,
            };
        }
    }
    // Clear notifcation to user
    clearNotification = () => {
        this.setState((prevState, props) => {
            return {
                responseMessage: ''
            }
        })
    }
    // Title and Description validation. Make sure user entered information.
    checkStepCompletion = (name) => {
        if (this.state[name].length >= 1) {
            this.handleStepComplete();
        } else if (name === 'title') {
            this.setState((prevState, props) => {
                return {
                    responseMessage: 'Please enter the name of the restaurant'
                }
            })
        } else {
            this.setState((prevState, props) => {
                return {
                    responseMessage: 'Please enter a short description'
                }
            })
        }
    }
    // Increase step counter by 1
    handleStepComplete = () => {
        if (this.props.formType === 'editForm') {
            this.setState(state => ({
                formStepCounter: state.formStepCounter + 1,
            }));
        } else {
            // If not edit form call stepper func for add form
            this.props.handleFormStepperForward();
            this.setState(state => ({
                formStepCounter: state.formStepCounter + 1,
            }));
        }

    }
    // Decrease step counter by 1
    handleFormStepBack = () => {
        if (this.props.formType === 'editForm') {
            this.setState(state => ({
                formStepCounter: state.formStepCounter - 1,
            }));
        } else {
            // If not edit form call stepper func for add form
            this.props.handleFormStepperBackward();
            this.setState(state => ({
                formStepCounter: state.formStepCounter - 1,
            }));
        }
    }

    handleChange = (title, description, from, to) => event => {
        this.setState({
            [title]: event.target.value,
            [description]: event.target.value,
            [title]: event.target.value,
            [from]: event.target.value,
            [to]: event.target.value,
        });
    };

    // Handle review selection for Food, Drink, Wine, Beer, and Cocktails.
    handleSelection = (review, drinkOrFoodType) => {
        this.setState({
            [drinkOrFoodType]: review,
        });
    };

    // Handles time of day selection (AM/PM) for happy hour.
    handleTimeAMPM = (amORpm, toORfrom) => {
        this.setState({
            [toORfrom]: amORpm,
        });
    }

    validateHappyHourTime = () => {
        // Check if time input has been filled in
        if (this.state.fromTimeOfDay.length >= 1 && this.state.toTimeOfDay.length >= 1) {
            // If edit form
            if (this.props.formType === 'editForm') {
                this.handleStepComplete();
                // Else for add form
            } else {
                this.props.handleFormStepperForward();
                this.handleStepComplete();
            }
        }
        // If time input has not been filled notify user
        else {
            this.setState((prevState, props) => {
                return {
                    responseMessage: 'Please enter a time'
                }
            })
        }
    }

    handleSubmit = (event, data) => {
        const token = sessionStorage.getItem('jwtToken');
        // If edit form, handle edit restaurant submit.
        if (this.props.formType === 'editForm') {
            const restaurantId = this.props.restaurant.id;
            const restaurant = {
                title: this.state.title,
                description: this.state.description,
                fromStandard: this.state.from,
                toStandard: this.state.to,
                food: this.state.food,
                beer: this.state.beer,
                wine: this.state.wine,
                cocktails: this.state.cocktails,
                toTimeOfDay: this.state.toTimeOfDay,
                fromTimeOfDay: this.state.fromTimeOfDay,
            }
            this.props.editRestaurant(restaurantId, restaurant);
            // Hide form.
            this.props.showHideForm();
            // If not edit edit, then handle add restaurant form submit.
        } else {
            const userId = this.props.userProfile.id;
            axios({
                method: 'post',
                url: `https://drinkys.herokuapp.com/addRestaurant/${userId}`,
                headers: { 'Authorization': "bearer " + token },
                data: {
                    title: this.state.title,
                    description: this.state.description,
                    from: this.state.from,
                    to: this.state.to,
                    food: this.state.food,
                    beer: this.state.beer,
                    wine: this.state.wine,
                    cocktails: this.state.cocktails,
                    toTimeOfDay: this.state.toTimeOfDay,
                    fromTimeOfDay: this.state.fromTimeOfDay,
                }
            }).then((response) => {
                this.props.handleCreation();
            }).catch((err) => {
                this.setState({
                    responseMessage: 'Unable to add restaurant. Please ensure all fields are properly filled out, and try again.',
                });
            })
        }
    };
    render() {
        const { classes } = this.props;
        // Name section
        if (this.state.formStepCounter === 0) {
            return (
                <div className="centerMe" >
                    <StepOneTitle
                        formType={this.props.formType}
                        title={this.state.title}
                        checkStepCompletion={this.checkStepCompletion}
                        handleChange={this.handleChange}
                    />
                    <div className="notificationContainer">
                        <Notification
                            responseMessage={this.state.responseMessage}
                            clearNotification={this.clearNotification}
                        />
                    </div>
                </div >
            )
            // Description section   
        } else if (this.state.formStepCounter === 1) {
            return (
                <div className="centerMe">
                    <StepTwoDesc
                        formType={this.props.formType}
                        description={this.state.description}
                        checkStepCompletion={this.checkStepCompletion}
                        handleChange={this.handleChange}
                        handleFormStepBack={this.handleFormStepBack}
                    />
                    <Notification
                        responseMessage={this.state.responseMessage}
                        clearNotification={this.clearNotification}
                    />
                </div >
            )
            // Food section   
        } else if (this.state.formStepCounter === 2) {
            return (
                <StepThreeFood
                    formType={this.props.formType}
                    handleStepComplete={this.handleStepComplete}
                    drinkOrFoodType={'food'}
                    handleSelection={this.handleSelection}
                    handleFormStepBack={this.handleFormStepBack}
                />
            )
            // Beer section    
        } else if (this.state.formStepCounter === 3) {
            return (
                <StepFourBeer
                    formType={this.props.formType}
                    handleStepComplete={this.handleStepComplete}
                    drinkOrFoodType={'beer'}
                    handleSelection={this.handleSelection}
                    handleFormStepBack={this.handleFormStepBack}
                />
            )
            // Wine section    
        } else if (this.state.formStepCounter === 4) {
            return (
                <StepFiveWine
                    formType={this.props.formType}
                    handleStepComplete={this.handleStepComplete}
                    drinkOrFoodType={'wine'}
                    handleSelection={this.handleSelection}
                    handleFormStepBack={this.handleFormStepBack}
                />
            )
            // Cocktails section
        } else if (this.state.formStepCounter === 5) {
            return (
                <StepSixCocktails
                    formType={this.props.formType}
                    handleStepComplete={this.handleStepComplete}
                    drinkOrFoodType={'cocktails'}
                    handleSelection={this.handleSelection}
                    handleFormStepBack={this.handleFormStepBack}
                />
            )
        }
        // Happy Hour section
        else if (this.state.formStepCounter === 6) {
            return (
                <div className="centerMe">
                    <StepSevenHHTime
                        formType={this.props.formType}
                        validateHappyHourTime={this.validateHappyHourTime}
                        handleTimeAMPM={this.handleTimeAMPM}
                        handleFormStepBack={this.handleFormStepBack}
                        handleChange={this.handleChange}
                        to={this.state.to}
                        from={this.state.from}
                        fromTimeOfDay={this.state.fromTimeOfDay}
                        toTimeOfDay={this.state.toTimeOfDay}
                    />
                    <Notification
                        responseMessage={this.state.responseMessage}
                        clearNotification={this.clearNotification}
                    />
                </div>
            )
            // Final section. Submit information to server.    
        } else if (this.state.formStepCounter === 7) {
            return (
                <div id="centerFinalStep" >
                    <FinalStepCheck
                        formType={this.props.formType}
                        title={this.state.title}
                        description={this.state.description}
                        from={this.state.from}
                        to={this.state.to}
                        food={this.state.food}
                        beer={this.state.beer}
                        wine={this.state.wine}
                        cocktails={this.state.cocktails}
                        toTimeOfDay={this.state.toTimeOfDay}
                        fromTimeOfDay={this.state.fromTimeOfDay}
                    />
                    <Button className={classes.button} variant="contained" onClick={this.handleSubmit} color="primary">
                        Submit
                    </Button>
                    <Button className={classes.button} variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                    <div className="notificationContainer">
                        <Notification
                            responseMessage={this.state.responseMessage}
                            clearNotification={this.clearNotification}
                        />
                    </div>
                </div>
            )
        }
    }
}

AddEditRestaurantForm.propTypes = {
    showForm: PropTypes.func,
    showHideForm: PropTypes.func,
    restaurant: PropTypes.object,
    creationStepCount: PropTypes.number,
    handleEditSubmit: PropTypes.func,
    formType: PropTypes.string.isRequired,
    handleFormStepperForward: PropTypes.func,
    handleFormStepperBackward: PropTypes.func,
    userProfile: PropTypes.object,
    handleCreation: PropTypes.func,
};

export default withStyles(styles)(AddEditRestaurantForm);

