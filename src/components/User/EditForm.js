import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Notification from '../Presentational/Notification';
import ButtonComponent from '../Presentational/ButtonComponent';

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
    input: {
        display: 'none',
    },
});

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.restaurantTitle,
            description: props.restaurantDescription,
            drinks: props.restaurantDrinks,
        };
    }
    handleSubmit = (event, data) => {
        const id = this.props.restaurantId;
        const title = this.state.title;
        const description = this.state.description;
        const drinks = this.state.drinks;
        this.props.editRestaurant(id, title, description, drinks)
        this.props.showHideForm();
        event.preventDefault();
    };

    handleChange = (title, description, drinks) => event => {
        this.setState({
            [title]: event.target.value,
            [description]: event.target.value,
            [drinks]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        if (this.props.loggedIn) {
            return (
                <Redirect to="/home" />
            )
        } else {
            return (
                <div>
                    <form id='signup-form' noValidate autoComplete='off' onSubmit={this.handleSubmit}>
                        <TextField
                            id="title"
                            className={classes.textField}
                            placeholder="Title"
                            label="title"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <TextField
                            id="description"
                            className={classes.textField}
                            placeholder="Description"
                            label="description"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                        <TextField
                            id="drinks"
                            className={classes.textField}
                            placeholder="Drinks"
                            label="drinks"
                            value={this.state.drinks}
                            onChange={this.handleChange('drinks')}
                            margin="normal"
                        />
                        <Button variant="contained" type='submit' color="primary">
                            Submit Edit
                        </Button>
                    </form>
                    <ButtonComponent buttonDesc={'Cancel'} clickAction={this.props.showHideForm} funcArgs={null} />
                    <Notification
                        responseMessage={this.state.responseMessage}
                        showNotification={this.state.showNotification}
                        clearNotification={this.clearNotification}
                    />
                </div>
            );
        }
    }
}

export default withStyles(styles)(EditForm);