import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CheckboxLabels from './CheckboxForm'
import DrinkReviews from './DrinkReviews';
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
        margin: theme.spacing.unit,
    },
});

class AddRestaurantForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (title, description, from, to, beer, wine, cocktails) => event => {
        this.setState({
            [title]: event.target.value,
            [description]: event.target.value,
            [title]: event.target.value,
            [from]: event.target.value,
            [to]: event.target.value,

        });
    };

    handleSelection = (name, drinkOrFoodType) => {
        this.setState({
            [drinkOrFoodType]: name,
        });
        console.log('running');
        console.log(drinkOrFoodType)
        console.log(name);
    };

    handleTimeAMPM = (amORpm, toORfrom) => {
        this.setState({
            [toORfrom]: amORpm,
        });
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
            console.log(response.data);
        }).catch((err) => {
            console.log(err.response);
            // this.setState({
            //     responseMessage: err.response.data.message,
            // });
        })
        event.preventDefault();
    };
    render() {
        console.log(this.state);
        const { classes } = this.props;
        if (this.props.creationStepCount === 0) {
            return (
                <div>
                    <h1>What's the name of the restaurant?</h1>
                    <form id='creation-form' noValidate autoComplete='off' onSubmit={this.handleSubmit}>
                        <TextField
                            id="title"
                            className={classes.textField}
                            placeholder="Title"
                            label="title"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                            Next
                        </Button>
                    </form>
                </div>
            )
        } else if (this.props.creationStepCount === 1) {
            return (
                <div>
                    <h1>What did you like about the restaurant?</h1>
                    <form id='creation-form' noValidate autoComplete='off' onSubmit={this.handleSubmit}>
                        <TextField
                            id="description"
                            className={classes.textField}
                            placeholder="Description"
                            label="description"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                        <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                            Next
                        </Button>
                        <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                            Back
                        </Button>
                    </form>
                </div>
            )
        } else if (this.props.creationStepCount === 2) {
            return (
                <div>
                    <h1>How would you rate their food selection?</h1>
                    <DrinkReviews drinkOrFoodType={'food'} handleSelection={this.handleSelection} />
                    <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                        Next
                    </Button>
                    <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        } else if (this.props.creationStepCount === 3) {

            return (
                <div>
                    <h1>How would you rate their beer selection?</h1>
                    <DrinkReviews drinkOrFoodType={'beer'} handleSelection={this.handleSelection} />
                    <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                        Next
                    </Button>
                    <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )
        }
        else if (this.props.creationStepCount === 4) {
            return (
                <div>
                    <h1>How would you rate their wine selection?</h1>
                    <DrinkReviews drinkOrFoodType={'wine'} handleSelection={this.handleSelection} />
                    <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                        Next
                    </Button>
                    <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                        Back
                    </Button>
                </div >
            )

        } else if (this.props.creationStepCount === 5) {
            return (
                <div>
                    <h1>How would you rate their cocktail selection?</h1>
                    <DrinkReviews drinkOrFoodType={'cocktails'} handleSelection={this.handleSelection} />
                    <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                        Next
                        </Button>
                    <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                        Back
                        </Button>
                </div >
            )

        }
        else if (this.props.creationStepCount === 6) {
            return (
                <div>
                    <h1>What's the happy hour?</h1>
                    <TextField
                        id="from"
                        className={classes.textField}
                        placeholder="From"
                        label="from"
                        value={this.state.from}
                        onChange={this.handleChange('from')}
                        margin="normal"
                    />
                    <Button variant="contained" onClick={() => this.handleTimeAMPM('am', 'fromTimeOfDay')} color="primary">
                        am
                    </Button>
                    <Button variant="contained" onClick={() => this.handleTimeAMPM('pm', 'fromTimeOfDay')} color="primary">
                        pm
                    </Button>
                    <h1>to</h1>
                    <TextField
                        id="to"
                        className={classes.textField}
                        placeholder="to"
                        label="to"
                        value={this.state.to}
                        onChange={this.handleChange('to')}
                        margin="normal"
                    />
                    <Button variant="contained" onClick={() => this.handleTimeAMPM('am', 'toTimeOfDay')} color="primary">
                        am
                    </Button>
                    <Button variant="contained" onClick={() => this.handleTimeAMPM('pm', 'toTimeOfDay')} color="primary">
                        pm
                    </Button>
                    <Button variant="contained" onClick={this.props.formStepComplete} color="primary">
                        No Happy Hour
                    </Button>
                    <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                        Back
                    </Button>
                </div>
            )

        } else if (this.props.creationStepCount === 7) {
            return (
                <div>
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
                    <Button variant="contained" onClick={this.handleSubmit} color="primary">
                        Add Restaurant
                    </Button>
                    <Button variant="contained" onClick={this.props.formStepBack} color="primary">
                        Back
                    </Button>
                </div>
            )
        }
    }
}

export default withStyles(styles)(AddRestaurantForm);

