import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const Notification = (props) => {
    if (props.type === 'signUp' && props.responseMessage) {
        return (
            <Paper className="paperNotificationContainer" elevation={5}>
                <Typography className="paperNotification" variant="headline" component="h3">
                    {props.responseMessage}
                </Typography>
                <Button variant="contained" onClick={props.clearAndRedirect} color="primary">
                    Ok
            </Button>
            </Paper>
        )
    }
    if (props.responseMessage) {
        return (
            <Paper className="paperNotificationContainer" elevation={5}>
                <Typography className="paperNotification" variant="headline" component="h3">
                    {props.responseMessage}
                </Typography>
                <Button variant="contained" onClick={props.clearNotification} color="primary">
                    Ok
                </Button>
            </Paper>
        )
    } else {
        return null;
    }
}

Notification.propTypes = {
    responseMessage: PropTypes.string,
    clearNotification: PropTypes.func,
    clearAndRedirect: PropTypes.func,
};

export default Notification;
