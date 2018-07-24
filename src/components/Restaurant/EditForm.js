import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import DrinkReviews from './DrinkReviews';
import Notification from '../Presentational/Notification';

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

const DisplayTimeOfDaySelection = (props) => {
    if (props.timeOfDay) {
        return (
            <span className="spanTime">{props.timeOfDay}</span>
        )
    } else {
        return null;
    }

}

// Quick edit form functionality. Explore using one single form component for adding restaurant and editing since both use the same form layout.
// TODO: Explore refactor
class EditForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
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
    }

    clearNotification = () => {
        this.setState((prevState, props) => {
            return {
                responseMessage: ''
            }
        })
    }


    checkStepCompletion = (name) => {
        if (this.state[name].length >= 1) {
            this.handleFormStepCompletetion();

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
    handleChange = (title, description, from, to) => event => {
        this.setState({
            [title]: event.target.value,
            [description]: event.target.value,
            [title]: event.target.value,
            [from]: event.target.value,
            [to]: event.target.value,
        });
    };

    handleFormStepCompletetion = () => {
        this.setState((prevState, props) => {
            return {
                formStepCounter: prevState.formStepCounter + 1,
                // activeStep: prevState.activeStep + 1,

            }
        })
    }

    handleFormStepBack = () => {
        this.setState((prevState, props) => {
            return {
                formStepCounter: prevState.formStepCounter - 1,
                // activeStep: prevState.activeStep - 1,
            }
        })
    }

    handleSelection = (review, drinkOrFoodType) => {
        this.setState({
            [drinkOrFoodType]: review,
        });
    };

    handleTimeAMPM = (amORpm, toORfrom) => {
        this.setState({
            [toORfrom]: amORpm,
        });
    }






    validateHappyHourTime = () => {
        console.log(this.state);
        if (this.state.fromTimeOfDay.length >= 1 && this.state.toTimeOfDay.length >= 1) {
            this.handleFormStepCompletetion();
        }
        else {
            this.setState((prevState, props) => {
                return {
                    responseMessage: 'Please enter a time'
                }
            })
        }
    }

    handleSubmit = (event, data) => {
        // const restaurantId = this.props.restaurant.id;
        // const token = sessionStorage.getItem('jwtToken');

        // this.props.editRestaurant(restaurantId, restaurant);
        // this.props.showHideForm();
    };

    render() {
        const { classes } = this.props;
        if (this.state.formStepCounter === 0) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">Edit Title</h1>
                    <form id='creation-form' noValidate autoComplete='off'>
                        <TextField
                            id="title"
                            className={classes.textField}
                            placeholder="Title"
                            label="title"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <Button className={classes.button} variant="contained" onClick={() => this.checkStepCompletion('title')} color="primary">
                            Ok
                        </Button>
                        <div className="notificationContainer">
                            <Notification
                                responseMessage={this.state.responseMessage}
                                clearNotification={this.clearNotification}
                            />
                        </div>
                    </form>
                </div>
            )
        } else if (this.state.formStepCounter === 1) {
            return (
                <div className="eachStepContainer" >
                    <h1 className="filterTitle" >Edit Description</h1>
                    <form id='creation-form' noValidate autoComplete='off'>
                        <TextField
                            id="description"
                            className={classes.textField}
                            placeholder="Description"
                            label="description"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                        <Button className={classes.button} variant="contained" onClick={() => this.checkStepCompletion('description')} color="primary">
                            Ok
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
                    </form>
                </div >
            )
        } else if (this.state.formStepCounter === 2) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">Edit Food Review</h1>
                    <DrinkReviews
                        formStepComplete={this.handleFormStepCompletetion}
                        drinkOrFoodType={'food'} handleSelection={this.handleSelection}
                    />
                    <Button className={classes.button} variant="contained" onClick={() => this.checkStepCompletion('description')} color="primary">
                        Ok
                    </Button>
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        } else if (this.state.formStepCounter === 3) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">Edit Beer Review</h1>
                    <DrinkReviews
                        formStepComplete={this.handleFormStepCompletetion}
                        drinkOrFoodType={'beer'}
                        handleSelection={this.handleSelection}
                    />
                    <Button className={classes.button} variant="contained" onClick={() => this.checkStepCompletion('description')} color="primary">
                        Ok
                    </Button>
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        } else if (this.state.formStepCounter === 4) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">Edit Wine Review</h1>
                    <DrinkReviews drinkOrFoodType={'wine'}
                        formStepComplete={this.handleFormStepCompletetion}
                        handleSelection={this.handleSelection}
                    />
                    <Button className={classes.button} variant="contained" onClick={() => this.checkStepCompletion('description')} color="primary">
                        Ok
                    </Button>
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )

        } else if (this.state.formStepCounter === 5) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">Edit Cocktail Review</h1>
                    <DrinkReviews
                        formStepComplete={this.handleFormStepCompletetion}
                        drinkOrFoodType={'cocktails'}
                        handleSelection={this.handleSelection} />
                    <Button className={classes.button} variant="contained" onClick={() => this.checkStepCompletion('description')} color="primary">
                        Ok
                    </Button>
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        }
        else if (this.state.formStepCounter === 6) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">Edit Happy Hour</h1>
                    <div className="timeContainerInput">
                        <TextField
                            id="from"
                            className={classes.textField}
                            placeholder="From"
                            label="from"
                            value={this.state.from}
                            onChange={this.handleChange('from')}
                            margin="normal"
                        />
                        <DisplayTimeOfDaySelection timeOfDay={this.state.fromTimeOfDay} />
                    </div>
                    <div className="timeContainer">
                        <Button id="spaceMe" variant="contained" onClick={() => this.handleTimeAMPM('am', 'fromTimeOfDay')} color="secondary">
                            am
                    </Button>
                        <Button id="spaceMe" variant="contained" onClick={() => this.handleTimeAMPM('pm', 'fromTimeOfDay')} color="secondary">
                            pm
                    </Button>
                    </div>
                    <div className="timeContainerInput">
                        <TextField
                            id="to"
                            className={classes.textField}
                            placeholder="to"
                            label="to"
                            value={this.state.to}
                            onChange={this.handleChange('to')}
                            margin="normal"
                        />
                        <DisplayTimeOfDaySelection timeOfDay={this.state.toTimeOfDay} />
                    </div>
                    <div className="timeContainer">
                        <Button id="spaceMe" variant="contained" onClick={() => this.handleTimeAMPM('am', 'toTimeOfDay')} color="secondary">
                            am
                    </Button>
                        <Button id="spaceMe" variant="contained" onClick={() => this.handleTimeAMPM('pm', 'toTimeOfDay')} color="secondary">
                            pm
                    </Button>
                    </div>
                    <div className="nextBackContainer">
                        <Button id="spaceMe" className="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                            Back
                    </Button>
                        <Button id="spaceMe" variant="contained" onClick={this.validateHappyHourTime} color="primary">
                            Ok
                    </Button>
                    </div>
                    <div className="notificationContainer">
                        <Notification
                            responseMessage={this.state.responseMessage}
                            clearNotification={this.clearNotification}
                        />
                    </div>
                </div >
            )

        } else if (this.state.formStepCounter === 7) {
            console.log(this.state);
            return (
                <div className="eachStepContainer">
                    <h1>Does this look right?</h1>
                    <h2>{this.state.title}</h2>
                    <h2>{this.state.description}</h2>
                    <h2>{this.state.food}</h2>
                    <h2>{this.state.beer}</h2>
                    <h2>{this.state.wine}</h2>
                    <h2>{this.state.cocktails}</h2>
                    <h2>{this.state.from}</h2>
                    <h3>to</h3>
                    <h2>{this.state.to}</h2>
                    <Button className={classes.button} variant="contained" onClick={this.handleSubmit} color="primary">
                        Submit Edits
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

export default withStyles(styles)(EditForm);

