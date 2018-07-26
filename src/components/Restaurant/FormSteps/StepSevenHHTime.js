
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimeStepForm from './TimeStepForm';

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


const StepSevenHHTime = (props) => {
    return (
        <TimeStepForm
            formType={props.formType}
            validateHappyHourTime={props.validateHappyHourTime}
            handleTimeAMPM={props.handleTimeAMPM}
            handleFormStepBack={props.handleFormStepBack}
            handleChange={props.handleChange}
            to={props.to}
            from={props.from}
            fromTimeOfDay={props.fromTimeOfDay}
            toTimeOfDay={props.toTimeOfDay}
        />
    )
}

export default withStyles(styles)(StepSevenHHTime);



