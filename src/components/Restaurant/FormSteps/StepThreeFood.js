import React from 'react';
import Button from '@material-ui/core/Button';
import DrinkReviews from '../DrinkReviews';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: 8,
    },
});

const StepThreeFood = (props) => {
    const { classes } = props;
    if (props.formType === 'addForm') {
        return (
            <div className="eachStepContainer">
                <h1 className="filterTitle">How would you rate their food selection?</h1>
                <DrinkReviews
                    handleStepComplete={props.handleStepComplete}
                    drinkOrFoodType={'food'}
                    handleSelection={props.handleSelection}
                />
                <Button className={classes.button} id="backButtonForReviews" variant="contained" onClick={props.handleFormStepBack} color="primary">
                    Back
                </Button>
            </div>

        )
    } else {
        return (
            <div className="eachStepContainer">
                <h1 className="filterTitle">Edit Food Review</h1>
                <DrinkReviews
                    handleStepComplete={props.handleStepComplete}
                    drinkOrFoodType={'food'}
                    handleSelection={props.handleSelection}
                />
                <Button className={classes.button} id="backButtonForReviews" variant="contained" onClick={props.handleFormStepBack} color="primary">
                    Back
                </Button>
            </div>
        )
    }

}

export default withStyles(styles)(StepThreeFood);
