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

class AddRestaurantForm extends Component {
    constructor(props) {
        super(props);
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

    clearNotification = () => {
        this.setState((prevState, props) => {
            return {
                responseMessage: ''
            }
        })
    }

    handleStepComplete = () => {
        this.props.handleFormStepperForward();
        this.setState(state => ({
            formStepCounter: state.formStepCounter + 1,
        }));
    }

    handleFormStepBack = () => {
        this.props.handleFormStepperBackward();
        this.setState(state => ({
            formStepCounter: state.formStepCounter - 1,
        }));
    }

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
    handleChange = (title, description, from, to) => event => {
        this.setState({
            [title]: event.target.value,
            [description]: event.target.value,
            [title]: event.target.value,
            [from]: event.target.value,
            [to]: event.target.value,
        });
    };

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
        if (this.state.fromTimeOfDay.length >= 1 && this.state.toTimeOfDay.length >= 1) {
            this.props.handleFormStepperForward();
            this.handleStepComplete();
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
        const userId = this.props.userProfile.id;
        const token = sessionStorage.getItem('jwtToken');
        axios({
            method: 'post',
            url: `http://localhost:8080/addRestaurant/${userId}`,
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
            console.log(err.response)
            this.setState({
                responseMessage: 'Unable to add restaurant. Please ensure all fields are properly filled out, and try again.',
            });
        })
    };
    render() {
        const { classes } = this.props;
        if (this.state.formStepCounter === 0) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">What's the name of the restaurant?</h1>
                    <form id='creation-form' noValidate autoComplete='off'>
                        <TextField
                            id="title"
                            className={classes.textField}
                            placeholder="Title"
                            label="Restaurant name"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <Button className={classes.button} variant="contained"
                            onClick={() => { this.checkStepCompletion('title') }} color="primary">
                            Next
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
                    <h1 className="filterTitle" >What did you like about the restaurant?</h1>
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
                        <Button variant="contained" className={classes.button} onClick={() => this.checkStepCompletion('description')} color="primary">
                            Next
                        </Button>
                        <Button variant="contained" className={classes.button} onClick={this.handleFormStepBack} color="primary">
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
                    <h1 className="filterTitle">How would you rate their food selection?</h1>
                    <DrinkReviews
                        formStepComplete={this.handleStepComplete}
                        drinkOrFoodType={'food'} handleSelection={this.handleSelection}
                    />
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        } else if (this.state.formStepCounter === 3) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">How would you rate their beer selection?</h1>
                    <DrinkReviews
                        formStepComplete={this.handleStepComplete}
                        drinkOrFoodType={'beer'}
                        handleSelection={this.handleSelection} />
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        } else if (this.state.formStepCounter === 4) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">How would you rate their wine selection?</h1>
                    <DrinkReviews drinkOrFoodType={'wine'}
                        formStepComplete={this.handleStepComplete}
                        handleSelection={this.handleSelection} />
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )

        } else if (this.state.formStepCounter === 5) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">How would you rate their cocktail selection?</h1>
                    <DrinkReviews
                        formStepComplete={this.handleStepComplete}
                        drinkOrFoodType={'cocktails'}
                        handleSelection={this.handleSelection} />
                    <Button id="backButtonForReviews" variant="contained" onClick={this.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        }
        else if (this.state.formStepCounter === 6) {
            return (
                <div className="eachStepContainer">
                    <h1 className="filterTitle">What's the happy hour?</h1>
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
                        <Button className={classes.button} variant="contained" onClick={() => this.handleTimeAMPM('am', 'fromTimeOfDay')} color="secondary">
                            am
                    </Button>
                        <Button className={classes.button} variant="contained" onClick={() => this.handleTimeAMPM('pm', 'fromTimeOfDay')} color="secondary">
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

                        <Button className={classes.button} variant="contained" onClick={() => this.handleTimeAMPM('am', 'toTimeOfDay')} color="secondary">
                            am
                    </Button>
                        <Button className={classes.button} variant="contained" onClick={() => this.handleTimeAMPM('pm', 'toTimeOfDay')} color="secondary">
                            pm
                    </Button>
                    </div>
                    <div className="nextBackContainer">
                        <Button className={classes.button} variant="contained" onClick={this.handleFormStepBack} color="primary">
                            Back
                    </Button>
                        <Button className={classes.button} variant="contained" onClick={this.validateHappyHourTime} color="primary">
                            Next
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
                        Add Restaurant
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

export default withStyles(styles)(AddRestaurantForm);

