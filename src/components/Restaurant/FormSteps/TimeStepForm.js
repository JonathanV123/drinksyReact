
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
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

const DisplayTimeOfDaySelection = (props) => {
    if (props.timeOfDay) {
        return (
            <span className="spanTime">{props.timeOfDay}</span>
        )
    } else {
        return null;
    }

}

const HeaderMessage = (props) => {
    if (props.formType === 'addForm') {
        return (
            <h1 className="drinksyHeader">"How would you rate their food selection?"</h1>
        )
    } else {
        return (
            <h1 className="drinksyHeader">Edit Food Reivew</h1>
        )
    }
}

const EditTimeSection = (props) => {
    const { classes } = props;
    return (
        <div className="eachStepContainer">
            <HeaderMessage formType={props.formType} />
            <div className="timeContainerInput">
                <TextField
                    id="from"
                    className={classes.textField}
                    placeholder="From"
                    label="from"
                    value={props.from}
                    onChange={props.handleChange('from')}
                    margin="normal"
                />
                <DisplayTimeOfDaySelection timeOfDay={props.fromTimeOfDay} />
            </div>
            <div className="timeContainer">
                <Button id="spaceMe" variant="contained" onClick={() => props.handleTimeAMPM('am', 'fromTimeOfDay')} color="secondary">
                    am
                </Button>
                <Button id="spaceMe" variant="contained" onClick={() => props.handleTimeAMPM('pm', 'fromTimeOfDay')} color="secondary">
                    pm
                </Button>
            </div>
            <div className="timeContainerInput">
                <TextField
                    id="to"
                    className={classes.textField}
                    placeholder="to"
                    label="to"
                    value={props.to}
                    onChange={props.handleChange('to')}
                    margin="normal"
                />
                <DisplayTimeOfDaySelection timeOfDay={props.toTimeOfDay} />
            </div>
            <div className="timeContainer">
                <Button id="spaceMe" variant="contained" onClick={() => props.handleTimeAMPM('am', 'toTimeOfDay')} color="secondary">
                    am
                </Button>
                <Button id="spaceMe" variant="contained" onClick={() => props.handleTimeAMPM('pm', 'toTimeOfDay')} color="secondary">
                    pm
                </Button>
            </div>
            <div className="nextBackContainer">
                <Button id="spaceMe" className="backButtonForReviews" variant="contained" onClick={props.handleFormStepBack} color="primary">
                    Back
                </Button>
                <Button id="spaceMe" variant="contained" onClick={props.validateHappyHourTime} color="primary">
                    Save
                </Button>
            </div>
        </div >
    )
}

EditTimeSection.propTypes = {
    validateHappyHourTime: PropTypes.func.isRequired,
    handleTimeAMPM: PropTypes.func.isRequired,
    handleFormStepBack: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    fromTimeOfDay: PropTypes.string.isRequired,
    toTimeOfDay: PropTypes.string.isRequired,
};

export default withStyles(styles)(EditTimeSection);