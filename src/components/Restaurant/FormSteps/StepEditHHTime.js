
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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
console.log('test');
const DisplayTimeOfDaySelection = (props) => {
    if (props.timeOfDay) {
        return (
            <span className="spanTime">{props.timeOfDay}</span>
        )
    } else {
        return null;
    }

}

const EditTimeSection = (props) => {
    const { classes } = props;
    return (
        <div className="eachStepContainer">
            <h1 className="filterTitle">Edit Happy Hour</h1>
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
                    Ok
                    </Button>
            </div>
        </div >
    )
}

export default withStyles(styles)(EditTimeSection);
