
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimeStepForm from './TimeStepForm';
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

StepSevenHHTime.propTypes = {
    formType: PropTypes.string.isRequired,
    validateHappyHourTime: PropTypes.func.isRequired,
    handleTimeAMPM: PropTypes.func.isRequired,
    handleFormStepBack: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    fromTimeOfDay: PropTypes.string.isRequired,
    toTimeOfDay: PropTypes.string.isRequired,
};

export default withStyles(styles)(StepSevenHHTime);



