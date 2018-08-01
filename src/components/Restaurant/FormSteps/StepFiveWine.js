import React from 'react';
import Button from '@material-ui/core/Button';
import DrinkReviews from '../DrinkReviews';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: 8,
    },
});

const HeaderMessage = (props) => {
    if (props.formType === 'addForm') {
        return (
            <h1 className="drinksyHeader">How would you rate their wine selection?</h1>
        )
    } else {
        return (
            <h1 className="drinksyHeader">Edit Wine Review</h1>

        )
    }
}
const StepFiveWine = (props) => {
    const { classes } = props;
    return (
        <div className="eachStepContainer">
            <HeaderMessage formType={props.formType} />
            <DrinkReviews
                handleStepComplete={props.handleStepComplete}
                drinkOrFoodType={'wine'}
                handleSelection={props.handleSelection}
            />
            <Button className={classes.button} id="backButtonForReviews" variant="contained" onClick={props.handleFormStepBack} color="primary">
                Back
            </Button>
        </div>
    )
}

StepFiveWine.propTypes = {
    formType: PropTypes.string.isRequired,
    handleStepComplete: PropTypes.func.isRequired,
    drinkOrFoodType: PropTypes.string.isRequired,
    handleSelection: PropTypes.func.isRequired,
    handleFormStepBack: PropTypes.func.isRequired,
};

export default withStyles(styles)(StepFiveWine);