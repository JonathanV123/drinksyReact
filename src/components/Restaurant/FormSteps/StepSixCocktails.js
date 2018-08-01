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
            <h1 className="filterTitle">How would you rate their cocktail selection?</h1>
        )
    } else {
        return (
            <h1 className="filterTitle">Edit Cocktail Review</h1>
        )
    }
}
const StepSixCocktails = (props) => {
    const { classes } = props;
    return (
        <div className="eachStepContainer">
            <HeaderMessage formType={props.formType} />
            <DrinkReviews
                handleStepComplete={props.handleStepComplete}
                drinkOrFoodType={'cocktails'}
                handleSelection={props.handleSelection}
            />
            <Button className={classes.button} id="backButtonForReviews" variant="contained" onClick={props.handleFormStepBack} color="primary">
                Back
                </Button>
        </div>
    )
}

StepSixCocktails.propTypes = {
    formType: PropTypes.string.isRequired,
    handleStepComplete: PropTypes.func.isRequired,
    drinkOrFoodType: PropTypes.string.isRequired,
    handleSelection: PropTypes.func.isRequired,
    handleFormStepBack: PropTypes.func.isRequired,
};


export default withStyles(styles)(StepSixCocktails);